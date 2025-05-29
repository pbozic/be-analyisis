module.exports = {
	apps: [
		{
			name: 'Klikni Dev',
			script: 'server.ts', // or server.js if JS
			interpreter: 'npx',
			args: 'ts-node',
			watch: ['.'],
			ignore_watch: ['node_modules'],
			env: {
				NODE_ENV: 'development',
			},
		},
	],
};
