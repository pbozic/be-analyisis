const fs = require('fs');
const path = require('path');

const client = require('./client');

// Function to dynamically load modules from a directory
const loadModules = (directory) => {
	const modules = {};
	const dirPath = path.join(__dirname, directory);

	fs.readdirSync(dirPath).forEach((file) => {
		if (file.endsWith('.js')) {
			const moduleName = path.basename(file, '.js'); // Get file name without extension
			modules[moduleName] = require(path.join(dirPath, file));
		}
	});

	return modules;
};

// Load all searches and indexes dynamically
const searches = loadModules('searches');
const indexes = loadModules('indexes');

module.exports = {
	client,
	...searches, // Spread searches into exports
	...indexes, // Spread indexes into exports
};
