const fs = require('fs');
const path = require('path');

function generateRoutesMap(routesFolderPath, outputFilePath) {
	const allRouteFiles = getAllRouteFiles(routesFolderPath);
	const routesMap = [];

	for (const file of allRouteFiles) {
		const content = fs.readFileSync(file, 'utf-8');
		const lines = content.split('\n');
		const requireMap = buildRequireMap(content, path.dirname(file));
		const relativePath = path.relative(routesFolderPath, file);
		const parts = path.dirname(relativePath).split(path.sep).filter(Boolean);
		const fileNameWithoutExt = path.basename(file, path.extname(file));
		if (fileNameWithoutExt !== 'index') parts.push(fileNameWithoutExt);
		const prefix = '/' + parts.join('/');

		lines.forEach((line, index) => {
			// eslint-disable-next-line no-useless-escape
			const match = line.match(/router\.(get|post|put|delete|patch)\(['\"](.*?)['\"],\s*(.*?)\)/);
			if (match) {
				const [_, method, routePath, handler] = match;

				if (!handler.includes('.')) {
					console.warn(`⚠️  Skipping malformed handler at ${file}:${index + 1} → ${handler}`);
					return;
				}

				const [controllerName, functionName] = handler.split('.');
				const controllerPath = requireMap[controllerName];

				if (!controllerPath || !functionName) {
					console.warn(
						`⚠️  Skipping: missing controller path or function name → ${file}:${index + 1} [${handler}]`
					);
					return;
				}

				const functionLine = findFunctionLine(controllerPath, functionName);
				const isDocumented = checkIfDocumented(controllerPath, functionName);
				const fullPath = path.posix.join(prefix, routePath).replace(/\\/g, '/');

				console.log(`📌 ${method.toUpperCase()} ${fullPath} → ${controllerName}.${functionName}`);

				const normalizedPath = fullPath.replace(/^\/+/, '').replace(/\/+$/, '').replace(/\//g, '-');
				const filename = `${method.toLowerCase()}-${normalizedPath || 'root'}`;

				routesMap.push({
					path: fullPath,
					method: method.toLowerCase(),
					controller: controllerPath,
					function: functionName,
					line: functionLine,
					documented: isDocumented,
					filename,
				});
			}
		});
	}

	fs.writeFileSync(outputFilePath, JSON.stringify(routesMap, null, 2));
	console.log(`✅ Routes map saved to ${outputFilePath}`);
}

function getAllRouteFiles(dir, files = []) {
	for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
		const fullPath = path.join(dir, entry.name);
		if (entry.isDirectory()) {
			getAllRouteFiles(fullPath, files);
		} else if (entry.name.endsWith('.js') || entry.name.endsWith('.ts')) {
			files.push(fullPath);
		}
	}
	return files;
}

function buildRequireMap(content, basePath) {
	const requireMap = {};
	// eslint-disable-next-line no-useless-escape
	const requireRegex = /const\s+(\w+)\s*=\s*require\(['\"](.*?)['\"]\)/g;
	let match;
	while ((match = requireRegex.exec(content)) !== null) {
		const name = match[1];
		let fullPath = path.resolve(basePath, match[2]);
		if (!fullPath.endsWith('.js')) fullPath += '.js';
		requireMap[name] = fullPath;
	}
	return requireMap;
}

function findFunctionLine(controllerPath, functionName) {
	if (!fs.existsSync(controllerPath)) return -1;
	const lines = fs.readFileSync(controllerPath, 'utf-8').split('\n');
	for (let i = 0; i < lines.length; i++) {
		if (lines[i].includes(`function ${functionName}`)) {
			return i + 1;
		}
	}
	return -1;
}

function checkIfDocumented(controllerPath, functionName) {
	if (!fs.existsSync(controllerPath)) return false;
	const lines = fs.readFileSync(controllerPath, 'utf-8').split('\n');
	const functionLine = findFunctionLine(controllerPath, functionName);
	for (let i = functionLine - 2; i >= 0; i--) {
		if (lines[i].includes('/**')) return true;
		if (lines[i].trim() === '') continue;
		break;
	}
	return false;
}

module.exports = generateRoutesMap;
