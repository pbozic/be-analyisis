import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

import fg from 'fast-glob';
import yaml from 'js-yaml';
import openapi from 'openapi-comment-parser';
import merge from 'lodash.merge';

import generateRoutesMap from './generateRouteMap.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ROUTES_MAP = path.join(__dirname, './routesMap.json');
const OUTPUT_DIR = path.join(process.cwd(), 'docs', 'docs', 'api');
const CONTROLLERS_DIR = path.join(process.cwd(), 'docs', 'docs', 'controllers');
const DOCS_DIR = path.join(process.cwd(), 'docs');
const SWAGGER_INPUT = path.join(DOCS_DIR, 'static/swagger/openApiConfig.yaml');
const SWAGGER_SMALL_INPUT = path.join(DOCS_DIR, 'static/swagger/openApiConfig.yaml');
console.log('SWAGGER_INPUT', SWAGGER_INPUT);
const SWAGGER_OUTPUT_DIR = path.join(DOCS_DIR, 'static/swagger-per-route');

function ensureDir(dir) {
	if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

function sanitizePathSegment(segment) {
	return segment.replace(/[:*?<>|"\\]/g, '').replace(/\s+/g, '-');
}

function generateRouteDoc(route) {
	const segments = route.pathParts.map(sanitizePathSegment);
	const dir = path.join(OUTPUT_DIR, ...segments);
	ensureDir(dir);
	const method = route.method.toLowerCase();
	const pathSegments = route.path.split('/').filter(Boolean).map(sanitizePathSegment);
	const filenameBase = [method, ...pathSegments].join('-');

	const filepath = path.join(dir, `${filenameBase}.mdx`);
	ensureDir(SWAGGER_OUTPUT_DIR);

	const controllerDocFile = path.join(CONTROLLERS_DIR, `${path.basename(route.controller, '.js')}.md`);
	const depth = segments.length + 1;
	const upDirs = Array(depth).fill('..').join('/');
	const relativePathToControllerDoc = `${upDirs}/controllers/${path.basename(route.controller, '.js')}.md`;

	const controllerLink = fs.existsSync(controllerDocFile)
		? `[${route.function}](${relativePathToControllerDoc}#${route.function.toLowerCase()})`
		: `\`${route.function}\` (no controller doc yet)`;

	const openapiFull = yaml.load(fs.readFileSync(SWAGGER_INPUT, 'utf8'));
	const openapiSmall = yaml.load(fs.readFileSync(SWAGGER_SMALL_INPUT, 'utf8'));
	let routeSpec = openapiFull.paths?.[route.path.replace('/api', '')]?.[method];
	if (!routeSpec) {
		routeSpec = openapiFull.paths?.[route.path]?.[method];
	}
	if (!routeSpec) {
		routeSpec = openapiFull.paths?.[route.path.replace('/api/', '')]?.[method];
	}
	if (!routeSpec) {
		console.warn(`⚠️ No OpenAPI spec found for ${route.method} ${route.path}`);
	}
	let relativeSpecPath = '';
	let swagger = '';
	if (routeSpec) {
		const filteredSpec = {
			openapi: openapiSmall.openapi || '3.0.3',
			info: { title: `${route.method} ${route.path}`, version: '1.0.0' },
			paths: {
				[route.path]: {
					[method]: routeSpec,
				},
			},
			components: undefined,
		};

		const specFileName = `${filenameBase}.yaml`;
		const specFilePath = path.join(SWAGGER_OUTPUT_DIR, specFileName);
		fs.writeFileSync(specFilePath, yaml.dump(filteredSpec), 'utf8');

		relativeSpecPath = `/swagger-per-route/${specFileName}`;

		swagger = `<SwaggerUI url="${relativeSpecPath}" deepLinking={true} filter={true} />`;
	}
	const content = `import SwaggerUI from 'swagger-ui-react';
import 'swagger-ui-react/swagger-ui.css';


# [${route.method.toUpperCase()}] ${route.path}

**Controller**: ${controllerLink}

**Requires Auth**: ${route.auth ? '✅ Yes' : '❌ No'}

## 🧾 Swagger Preview

${swagger ? swagger : '⚠️ No OpenAPI spec found for this route.'}

## ✍️ Description
_Add details here._

`;

	if (!fs.existsSync(filepath)) {
		//console.log(`✅ Creating route doc: ${filepath}`);
		fs.writeFileSync(filepath, content);
	} else {
		//console.log(`⏩ Skipped (already exists): ${filepath}`);
	}
}

export default async function generateRouteDocs() {
	await generateRoutesMap(path.join(__dirname, '../routes'), ROUTES_MAP);
	console.log('Generating route docs...');
	const data = JSON.parse(fs.readFileSync(ROUTES_MAP, 'utf-8'));
	let spec;
	let finalSpec;
	try {
		const baseYamlPath = path.join(__dirname, '../swagger', 'openApiConfig.yaml');
		const baseSpec = yaml.load(fs.readFileSync(baseYamlPath, 'utf8'));
		const files = fg.sync(['routes/**/*.js', 'controllers/**/*.js', 'middlewares/**/*.js'], {
			cwd: process.cwd(), // base dir to resolve from
			absolute: true, // get full paths
		});
		// This triggers parsing of comments
		spec = openapi({
			include: files,
		});
		finalSpec = merge({}, baseSpec, spec);
		if (!finalSpec.openapi) finalSpec.openapi = '3.0.3';
		const yamlSpec = yaml.dump(finalSpec);
		const outputPath = path.join(__dirname, '../docs/static/swagger', 'openApiConfig.yaml'); // adjust if needed
		fs.writeFileSync(outputPath, yamlSpec, 'utf8');
	} catch (err) {
		console.error('❌ Failed to parse OpenAPI comments:', err.message);
		console.error(err.stack);
		process.exit(1); // or continue without Swagger if desired
	}
	ensureDir(OUTPUT_DIR);
	data.forEach(generateRouteDoc);
}
