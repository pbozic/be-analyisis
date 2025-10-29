import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

import YAML from 'js-yaml';
import merge from 'lodash.merge';
import SwaggerParser from '@apidevtools/swagger-parser';
import openapi from 'openapi-comment-parser';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname);

function safeLoadYaml(p) {
	const txt = fs.readFileSync(p, 'utf8');
	const doc = YAML.load(txt);
	if (!doc || typeof doc !== 'object') throw new Error(`Invalid YAML at ${p}`);
	return doc;
}

function listYamlFiles(dir) {
	if (!fs.existsSync(dir)) return [];
	const out = [];
	const stack = [dir];
	while (stack.length) {
		const cur = stack.pop();
		for (const e of fs.readdirSync(cur, { withFileTypes: true })) {
			const full = path.join(cur, e.name);
			if (e.isDirectory()) stack.push(full);
			else if (e.isFile() && /\.(ya?ml)$/i.test(e.name)) out.push(full);
		}
	}
	return out;
}

function pascalCaseFromFilename(p) {
	const base = path.basename(p).replace(/\.(ya?ml)$/i, '');
	return base.replace(/[-_ ]+(\w)/g, (_, c) => c.toUpperCase()).replace(/^\w/, (c) => c.toUpperCase());
}

export async function buildOpenApiSpec() {
	const baseYamlPath = path.resolve(projectRoot, 'swagger', 'openApiConfig.yaml');
	const baseSpec = safeLoadYaml(baseYamlPath);

	// Generate paths/operations from comments
	const specFromComments = openapi({
		include: [
			path.resolve(projectRoot, 'routes/**/*.js'),
			path.resolve(projectRoot, 'controllers/**/*.js'),
			path.resolve(projectRoot, 'middlewares/**/*.js'),
		],
	});

	// Merge base + comments first
	let combined = merge({}, baseSpec, specFromComments);
	if (!combined.openapi) combined.openapi = '3.0.3';
	if (!combined.components) combined.components = {};
	if (!combined.components.schemas) combined.components.schemas = {};

	// Load legacy schema files from swagger/schemas/*.yaml
	const schemasDir = path.resolve(projectRoot, 'swagger', 'schemas');
	if (fs.existsSync(schemasDir)) {
		const schemaFiles = listYamlFiles(schemasDir);
		console.log(`📄 Found ${schemaFiles.length} schema files in swagger/schemas`);

		for (const filePath of schemaFiles) {
			const key = pascalCaseFromFilename(filePath);

			if (!fs.existsSync(filePath)) {
				console.error(`❌ Schema file not found: ${filePath}`);
				throw new Error(`Schema file missing: ${filePath}`);
			}

			try {
				const parsed = safeLoadYaml(filePath);

				// Check if this is a components file (contains components.schemas)
				if (parsed.components && parsed.components.schemas) {
					console.log(`  → Merging components from: ${path.basename(filePath)}`);
					// Merge all schemas from this file into combined.components.schemas
					Object.assign(combined.components.schemas, parsed.components.schemas);

					// Also merge other component types if present
					if (parsed.components.parameters) {
						if (!combined.components.parameters) combined.components.parameters = {};
						Object.assign(combined.components.parameters, parsed.components.parameters);
					}
					if (parsed.components.responses) {
						if (!combined.components.responses) combined.components.responses = {};
						Object.assign(combined.components.responses, parsed.components.responses);
					}
					if (parsed.components.examples) {
						if (!combined.components.examples) combined.components.examples = {};
						Object.assign(combined.components.examples, parsed.components.examples);
					}
				} else {
					// Legacy format: file is a single schema
					console.log(`  → ${key}: ${path.basename(filePath)}`);
					combined.components.schemas[key] = parsed;
				}
			} catch (parseErr) {
				console.error(`❌ Invalid YAML in ${filePath}:`, parseErr.message);
				throw new Error(`Invalid schema YAML: ${filePath}`);
			}
		}
	} else {
		console.warn(`⚠️ Schemas directory not found: ${schemasDir}`);
	}

	console.log(`✅ Loaded ${Object.keys(combined.components.schemas).length} schemas`);

	try {
		// Write debug output
		//const debugPath = path.resolve(projectRoot, 'debug-combined-spec.json');
		//fs.writeFileSync(debugPath, JSON.stringify(combined, null, 2));
		//console.log(`📝 Debug spec saved to: ${debugPath}`);

		console.log('🔗 Bundling OpenAPI spec...');

		// Bundle with proper options for internal refs
		const bundled = await SwaggerParser.bundle(combined, {
			resolve: {
				// Disable external file resolution
				file: false,
				http: false,
			},
			dereference: {
				circular: 'ignore', // Handle circular refs
			},
		});

		console.log('✅ FINISHED BUNDLING');
		return bundled;
	} catch (bundleErr) {
		console.error('❌ Bundle failed:', bundleErr.message);
		console.error('Stack:', bundleErr.stack);

		// Return the unbundled spec so Swagger still loads
		console.warn('⚠️ Returning unbundled spec due to bundle failure');
		return combined;
	}
}
