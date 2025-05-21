const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const dotenv = require('dotenv');

dotenv.config({ path: '.env.test' });

const composeFile = './Docker/docker-compose.yml';
const dbService = 'test-db';

// Step 1: Start Docker container
console.log('🛠️  Starting test-db container...');
// execSync(`docker compose -f ${composeFile} --env-file .env.test up -d ${dbService}`, {
// 	stdio: 'inherit',
// });

// Step 2: Wait for PostgreSQL to be ready
console.log('⏳ Waiting for Postgres to be ready...');
// let retries = 10;
// while (retries > 0) {
// 	try {
// 		execSync(`docker exec postgres-test pg_isready -U test`);
// 		break;
// 	} catch {
// 		retries--;
// 		console.log(`Waiting... (${retries} retries left)`);
// 		if (retries === 0) {
// 			console.error('❌ Postgres did not become ready in time.');
// 			process.exit(1);
// 		}
// 		require('child_process').execSync('timeout 1', { stdio: 'ignore', shell: true });
// 	}
// }

// Step 3: Reset database
console.log('🔄 Resetting Prisma database...');
// execSync(`npx prisma migrate reset --force --skip-seed --schema=./prisma/schema.prisma`, {
// 	stdio: 'inherit',
// 	env: {
// 		...process.env,
// 		DATABASE_URL: process.env.DATABASE_URL,
// 		SHADOW_DATABASE_URL: process.env.SHADOW_DATABASE_URL,
// 	},
// });

// // Step 4: Run tests
// console.log('🧪 Running tests...');
execSync(`npx jest`, {
	stdio: 'inherit',
	env: { ...process.env, NODE_ENV: 'test' },
});

// // Step 5: Stop Docker container
// console.log('🧹 Stopping test-db container...');
// execSync(`docker compose -f ${composeFile} down --remove-orphans`, {
// 	stdio: 'inherit',
// });
