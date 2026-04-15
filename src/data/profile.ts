export const education = [
	{
		school: 'Nottingham Trent University',
		period: 'Sep 2024 to Sep 2025',
		qualification: 'MSc Artificial Intelligence',
		outcome: 'Distinction',
		details: [
			'Focused on production-minded AI systems, performance, and memory-aware design.',
			'Completed research on lightweight super-resolution for edge and drone-based systems.',
		],
	},
	{
		school: 'University of Nairobi',
		period: 'Sep 2012 to Sep 2017',
		qualification: 'BSc Electrical and Electronics Engineering',
		outcome: 'First Class Honours',
		details: [
			'Built a strong foundation in systems thinking, engineering rigor, and analytical problem solving.',
		],
	},
];

export const achievements = [
	'MSc Artificial Intelligence completed with distinction.',
	'Certified Kubernetes Administrator (CKA).',
	'Microsoft Azure Fundamentals (AZ-900).',
	'Microsoft Azure AI Fundamentals (AI-900).',
];

export const certificates = [
	{
		title: 'Certified Kubernetes Administrator (CKA)',
		issuer: 'The Linux Foundation',
		status: 'Certificate file can be added to public/certificates/',
		certificateUrl: '',
	},
	{
		title: 'Microsoft Azure Fundamentals (AZ-900)',
		issuer: 'Microsoft',
		status: 'Certificate file can be added to public/certificates/',
		certificateUrl: '',
	},
	{
		title: 'Microsoft Azure AI Fundamentals (AI-900)',
		issuer: 'Microsoft',
		status: 'Certificate file can be added to public/certificates/',
		certificateUrl: '',
	},
];

export const projects = [
	{
		title: 'Meshery Kubernetes Discovery Improvements',
		type: 'Open-source contribution',
		period: '2023 to 2024',
		summary:
			'Contributed to Meshery and MeshSync discovery flows, improving Kubernetes resource tracking, streaming-list performance, and cluster synchronization behavior.',
		highlights: [
			'Extended discovery mechanisms for more accurate resource visibility across environments.',
			'Improved performance by using Kubernetes Discovery APIs and streaming-list operations.',
			'Strengthened test coverage and CI reliability around critical synchronization flows.',
		],
		linkLabel: 'View GitHub profile',
		linkUrl: 'https://github.com/kiptoonkipkurui',
	},
	{
		title: 'Config-Op Kubernetes Operator',
		type: 'Project',
		period: 'Independent project',
		summary:
			'Designed an operator to synchronize ConfigMaps and Secrets across namespaces with a focus on reliability and consistency in multi-service production environments.',
		highlights: [
			'Built for repeatable configuration propagation across Kubernetes workloads.',
			'Focused on operational simplicity and safe synchronization behavior.',
			'Shaped as a practical tool for teams managing shared configuration at scale.',
		],
		linkLabel: '',
		linkUrl: '',
	},
	{
		title: 'Lightweight Super-Resolution on Edge Devices',
		type: 'Research project',
		period: 'MSc thesis',
		summary:
			'Explored real-time image enhancement models for constrained edge and drone-based systems, balancing perceptual quality with memory and latency constraints.',
		highlights: [
			'Optimized for real-time execution on resource-constrained hardware.',
			'Focused on practical trade-offs between quality, throughput, and memory use.',
			'Connected machine learning work with deployable engineering concerns.',
		],
		linkLabel: '',
		linkUrl: '',
	},
];
