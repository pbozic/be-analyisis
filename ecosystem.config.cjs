module.exports = {
  apps: [
    {
      name: 'klikni-dev',
      script: 'tsx', // this becomes: `npx tsx watch server.ts`
      interpreter: 'npx',
      args: 'watch server.ts',
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
