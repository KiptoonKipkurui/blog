---
title: "Kubernetes Streaming Lists"
description: "Why watch-list streaming reduces memory pressure in large Kubernetes clusters and how to use it from Go."
pubDate: "Nov 04 2023"
heroImage: "/blog-placeholder-3.jpg"
---

When you run a resource watch in Kubernetes, the common mental model is "start watching and keep reading events." In practice, the flow usually begins with a `LIST` and then transitions into a `WATCH`. That startup step matters because in large clusters the `LIST` call can create significant memory pressure on the API server before the long-running watch even begins.

That is the problem Kubernetes streaming lists are trying to solve. Starting in Kubernetes 1.27, the watch-list feature allows a client to request a watch that can stream initial state from cache instead of forcing a full list-first behavior. The result is lower memory overhead, reduced risk of API server stalls, and a much safer path for high-cardinality resources in busy clusters.

I explored this feature using the dynamic Kubernetes Go client so the same pattern could work across different resource types. The setup is straightforward:

```go
opts := metav1.ListOptions{
	Watch:                true,
	SendInitialEvents:    &enabled,
	ResourceVersionMatch: metav1.ResourceVersionMatchNotOlderThan,
}
```

With those options in place, the client can receive initial objects and subsequent changes through the same watch stream. That gives you a cleaner and more efficient starting point for controllers, discovery tooling, or any service that needs to observe resource state continuously.

There is one practical caveat: watch-list was introduced behind the `WatchList` feature gate, so production code needs a graceful fallback. In the original write-up, I covered two lightweight strategies:

- inspect the API server process flags when that is possible
- perform a small probe watch and treat success as evidence that the feature is enabled

Once the watch is established, the remaining work is familiar Go concurrency: read from `watcher.ResultChan()`, process `Added`, `Modified`, and `Deleted` events, and expose a stop channel so the background processor can shut down cleanly.

The larger point is not just that streaming lists are "faster." They reduce the blast radius of state synchronization in large clusters by removing one of the most expensive startup steps from a very common workflow. For platform and infrastructure tooling, that is a meaningful improvement.

The original version of this article was published on Medium:
[Kubernetes Streaming Lists](https://medium.com/@kiptoonkipkurui/kubernetes-streaming-lists-8603d6c01e21).
