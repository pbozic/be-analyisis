module.exports = {
	apps: [
		{
			name: 'Klikni Dev',
			script: 'ts-node',
			args: 'server.js', // or whatever your main TS file is
			interpreter: 'npx',
			watch: ['.'],
			ignore_watch: ['node_modules'],
			env: {
				NODE_ENV: 'development',
			},
		},
	],
};
