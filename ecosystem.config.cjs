module.exports = {
  apps: [
    {
      name: 'klikni-dev',
      script: 'server.ts',
      interpreter: 'npx',
      interpreter_args: '--yes tsx',
      env: {
        NODE_ENV: 'development',
      },
      watch: ['.'],
      ignore_watch: ['node_modules', 'dist', '.git'],
    },
    {
      name: 'klikni-prod',
      script: './dist/server.js',
      interpreter: 'node',
      env: {
        NODE_ENV: 'production',
      },
    },
  ],
};