const openapiDefinition = {
	openapi: '3.1.0',
	info: {
		title: 'Tech Prism API',
		description: 'Marketplace to buy tech items all at one place',
		contact: {
			email: 'admin@techprism.com',
		},
		version: '1.0.0',
	},
	servers: [
		{
			description: 'local',
			url: 'http://localhost:5000/api/v1',
		},
	],
	tags: [
		{ name: 'products', description: 'Product listings APIs' },
		{ name: 'reviews', description: 'Product reviews APIs' },
	],
};

export default openapiDefinition;
