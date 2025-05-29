export default {
	apps: [
		{
			name: 'Klikni Dev',
			script: 'server.js', // your entry file
			interpreter: 'npx',
			args: 'ts-node',
			watch: ['src'],
			env: {
				NODE_ENV: 'development',
			},
		},
	],
};
