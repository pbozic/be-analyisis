import fs from 'fs';
import path from 'path';

export default function generateRoutesMap(routesFolderPath, outputFilePath) {
	const allRouteFiles = getAllRouteFiles(routesFolderPath);
	const routesMap = [];

	for (const file of allRouteFiles) {
		const content = fs.readFileSync(file, 'utf-8');
		const lines = content.split('\n');
		const requireMap = buildRequireMap(content, path.dirname(file));
		const relativePath = path.relative(routesFolderPath, file);
		const parts = path.dirname(relativePath).split(path.sep).filter(Boolean);
		const partsFilename = relativePath.replace(path.extname(relativePath), '').split(path.sep).filter(Boolean);
		const pathParts = [...partsFilename];
		const fileNameWithoutExt = path.basename(file, path.extname(file));
		if (fileNameWithoutExt !== 'index') parts.push(fileNameWithoutExt);
		const prefix = '/' + parts.join('/');

		let middlewareStack = [];
		for (let i = 0; i < lines.length; i++) {
			const line = lines[i];

			const useMatch = line.match(/router\.use\((['"`])([^'"`]+)\1\s*,\s*(\[[^\]]+\])\s*\)/);
			if (useMatch) {
				const middlewareStr = useMatch[3];
				const mws = middlewareStr
					// eslint-disable-next-line no-useless-escape
					.replace(/[\[\]]/g, '')
					.split(',')
					.map((s) => s.trim())
					.filter(Boolean);
				middlewareStack = [...new Set([...middlewareStack, ...mws])];
				continue;
			}

			const routeMatch = line.match(/router\.(get|post|put|delete|patch)\((.+?)\)/);
			if (routeMatch) {
				const [_, method, fullExpr] = routeMatch;

				// Extract path
				const pathMatch = fullExpr.match(/['"`]([^'"]+)['"`]/);
				const routePath = pathMatch ? pathMatch[1] : '';

				// Extract all arguments
				const rawArgs = fullExpr.replace(/^\s*['"`][^'"`]+['"`]\s*,?/, '').trim();
				const args = rawArgs
					.replace(/^\[/, '')
					.replace(/\]$/, '')
					.split(',')
					.map((s) => s.trim())
					.filter(Boolean);

				const joiSchemas = args
					.filter((s) => s.startsWith('joi('))
					.map((s) => {
						const m = s.match(/joi\(([^)]+)\)/);
						return m ? m[1].trim() : null;
					})
					.filter(Boolean);

				const handler = args.find((s) => s.includes('.') && !s.includes('joi'));

				if (!handler || !handler.includes('.')) {
					console.warn(`⚠️  Skipping unrecognized handler at ${file}:${i + 1} → ${fullExpr}`);
					continue;
				}

				const [controllerName, functionName] = handler.split('.');
				const controllerPath = requireMap[controllerName];

				if (!controllerPath || !functionName) {
					console.warn(
						`⚠️  Skipping: missing controller path or function name → ${file}:${i + 1} [${handler}]`
					);
					continue;
				}

				const functionLine = findFunctionLine(controllerPath, functionName);
				const isDocumented = checkIfDocumented(controllerPath, functionName);
				const fullPath = path.posix.join(prefix, routePath).replace(/\\/g, '/');
				const normalizedPath = fullPath.replace(/^\/+/g, '').replace(/\/+/g, '-');
				const filename = `${method.toLowerCase()}-${normalizedPath || 'root'}`;

				const middlewares = args
					.filter((s) => s.includes('Middleware') && !s.includes('.') && !s.startsWith('joi'))
					.concat(middlewareStack)
					.filter((v, i, a) => a.indexOf(v) === i);

				routesMap.push({
					path: fullPath,
					method: method.toLowerCase(),
					controller: controllerPath,
					function: functionName,
					line: functionLine,
					documented: isDocumented,
					filename,
					pathParts,
					joi: joiSchemas.length > 0 ? joiSchemas : false,
					middlewares: middlewares.length > 0 ? middlewares : false,
				});
			}
		}
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
	const requireRegex = /const\s+(\w+)\s*=\s*require\(['"](.*?)['"]\)/g;
	let match;
	while ((match = requireRegex.exec(content)) !== null) {
		const name = match[1];
		const required = match[2];
		const resolved = tryResolve(basePath, required);
		if (resolved) requireMap[name] = resolved;
	}
	return requireMap;
}

function tryResolve(basePath, required) {
	const exts = ['.js', '.ts'];
	const pathsToTry = [
		path.resolve(basePath, required),
		...exts.map((ext) => path.resolve(basePath, required + ext)),
		path.resolve(basePath, required, 'index.js'),
		path.resolve(basePath, required, 'index.ts'),
	];

	for (const p of pathsToTry) {
		if (fs.existsSync(p)) return p;
	}
	return null;
}

function findFunctionLine(controllerPath, functionName) {
	if (!fs.existsSync(controllerPath)) return -1;
	const lines = fs.readFileSync(controllerPath, 'utf-8').split('\n');
	for (let i = 0; i < lines.length; i++) {
		if (
			lines[i].includes(`function ${functionName}`) ||
			lines[i].includes(`exports.${functionName}`) ||
			lines[i].includes(`${functionName} =`) ||
			lines[i].includes(`${functionName}:`)
		) {
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
