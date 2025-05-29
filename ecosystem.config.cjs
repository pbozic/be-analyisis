module.exports = {
  apps: [
    {
      name: 'Klikni Dev',
      script: 'server.js',     // Your actual entrypoint
      interpreter: 'npx',          // Use npx to invoke...
      interpreter_args: 'ts-node-esm', // ...ts-node as interpreter
      watch: ['src'],
      ignore_watch: ['node_modules'],
      env: {
        NODE_ENV: 'development',
      },
    },
  ],
};