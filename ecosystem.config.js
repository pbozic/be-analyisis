module.exports = {
	apps: [
		{
			name: 'Klikni Dev',
			script: 'server.js', // The compiled JS entry point
			watch: ['src'], // Optional: Watch source changes
			ignore_watch: ['node_modules', 'dist'],
			interpreter: 'ts-node',
			watch_delay: 500,
			env: {
				NODE_ENV: 'development',
			},
			// 🔧 This runs before restart/reload
			//post_update: 'npm run build', // or 'npx tsc'
		},
	],
};
