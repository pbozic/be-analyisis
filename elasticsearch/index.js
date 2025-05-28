import fs from 'fs';
import path from 'path';
import url from 'node:url';

import client from './client.js';
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// Async version using dynamic import()
const loadModules = async (directory) => {
	const modules = {};
	const dirPath = path.join(__dirname, directory);
	const files = fs.readdirSync(dirPath);
	for (const file of files) {
		if (file.endsWith('.js')) {
			const moduleName = path.basename(file, '.js');
			const modulePath = path.join(dirPath, file);
			const module = await import(url.pathToFileURL(modulePath).href);
			modules[moduleName] = module.default ?? module;
		}
	}
	return modules;
};
// Wrap in async IIFE since top-level await may not be supported in your node version or context
const combined = await (async () => {
	const searches = await loadModules('searches');
	const indexes = await loadModules('indexes');
	return {
		client,
		...searches,
		...indexes,
	};
})();
export { client };
export default combined;
