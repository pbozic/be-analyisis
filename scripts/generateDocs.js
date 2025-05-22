#!/usr/bin/env node

// Stub functions (replace with real logic)

const generateControllerDocs = require('../generators/generateControllerDocs');
const generateRouteDocs = require('../generators/generateRouteDocs');
const generateDaoDocs = require('../generators/generateDaoDocs');
const generateSidebar = require('../generators/generateSidebar');
const args = process.argv.slice(2);
const runControllers = args.includes('--controllers');
const runRoutes = args.includes('--routes');
const runDaos = args.includes('--daos');
const runSidebar = args.includes('--sidebar');

const runAll = !runControllers && !runRoutes && !runDaos && !runSidebar;

(async () => {
	if (runAll || runControllers) {
		console.log('📄 Generating Controller Docs...');
		await generateControllerDocs({ basePath: process.cwd() });
	}

	if (runAll || runRoutes) {
		console.log('🧭 Generating Route Docs...');
		await generateRouteDocs({ basePath: process.cwd() });
	}

	if (runAll || runDaos) {
		console.log('📁 Generating DAO Docs...');
		await generateDaoDocs({ basePath: process.cwd() });
	}

	if (runAll || runSidebar) {
		console.log('📚 Generating Sidebar...');
		await generateSidebar();
	}

	console.log('✅ Documentation generation complete.');
})();
