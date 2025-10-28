// openapi-build.js (run this at server start or prebuild)
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

import YAML from 'js-yaml';
import merge from 'lodash.merge';
import SwaggerParser from '@apidevtools/swagger-parser';
import openapi from 'openapi-comment-parser'; // the one you already use

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

	// Wire every schema file as a $ref under components.schemas
	console.log('RESOLVING PATH');
	const schemasDir = path.resolve(projectRoot, 'swagger', 'schemas');
	console.log('PATH RESOLVED:', schemasDir);

	// Validate schemas directory exists
	if (!fs.existsSync(schemasDir)) {
		console.warn(`⚠️ Schemas directory not found: ${schemasDir}`);
		console.warn('Skipping external schema references');
	} else {
		const schemaFiles = listYamlFiles(schemasDir);
		console.log(`📄 Found ${schemaFiles.length} schema files`);

		for (const filePath of schemaFiles) {
			const key = pascalCaseFromFilename(filePath);
			console.log(`  → ${key}: ${filePath}`);

			// Validate file exists and is readable
			if (!fs.existsSync(filePath)) {
				console.error(`❌ Schema file not found: ${filePath}`);
				throw new Error(`Schema file missing: ${filePath}`);
			}

			// Test-parse the YAML to catch syntax errors early
			try {
				const parsed = safeLoadYaml(filePath);
				console.log(`    ✓ Parsed schema keys:`, Object.keys(parsed)); // ADD THIS
			} catch (parseErr) {
				console.error(`❌ Invalid YAML in ${filePath}:`, parseErr.message);
				throw new Error(`Invalid schema YAML: ${filePath}`);
			}
		}
	}

	console.log('🔗 BUNDLING OpenAPI spec...');
	try {
		// Now bundle so all external $refs resolve (including refs inside your schema files)
		const bundled = await SwaggerParser.bundle(combined, {
			resolve: {
				file: {
					read: (file) => {
						// Custom file reader with better error messages
						const filePath = file.url.replace('file://', '');
						console.log(`  Reading: ${filePath}`);
						if (!fs.existsSync(filePath)) {
							throw new Error(`File not found: ${filePath}`);
						}
						return fs.readFileSync(filePath, 'utf8');
					},
				},
				http: false,
			},
			// if you have circular schema refs and want objects inline, switch to dereference():
			// dereference: { circular: 'ignore' }
		});

		console.log('✅ FINISHED BUNDLING');
		return bundled;
	} catch (bundleErr) {
		console.error('❌ Bundle failed:', bundleErr.message);
		console.error('Stack:', bundleErr.stack);

		// Add detailed debugging info
		if (bundleErr.message.includes('Token') && bundleErr.message.includes('does not exist')) {
			console.error('\n🔍 DEBUGGING INFO:');
			console.error("This error means a $ref is pointing to a path that doesn't exist.");
			console.error('Common issues:');
			console.error('  1. Using #/examples instead of #/components/examples');
			console.error('  2. Using #/definitions instead of #/components/schemas');
			console.error('  3. Typo in the reference path');
			console.error('\nSearching for problematic references...\n');

			// Search schema files for 'examples' refs
			const schemasDir = path.resolve(projectRoot, 'swagger', 'schemas');
			if (fs.existsSync(schemasDir)) {
				const schemaFiles = listYamlFiles(schemasDir);
				for (const file of schemaFiles) {
					const content = fs.readFileSync(file, 'utf8');
					if (content.includes('$ref') && content.includes('examples')) {
						console.error(`⚠️  Found 'examples' reference in: ${file}`);
						const lines = content.split('\n');
						lines.forEach((line, idx) => {
							if (line.includes('$ref') && line.includes('examples')) {
								console.error(`   Line ${idx + 1}: ${line.trim()}`);
							}
						});
					}
				}
			}

			// Also check the combined spec
			console.error('\n📋 Checking combined spec for invalid refs...');
			const combinedStr = JSON.stringify(combined, null, 2);
			if (combinedStr.includes('"$ref"') && combinedStr.includes('examples')) {
				console.error('⚠️  Found "examples" in combined spec (check comments in controllers)');
			}
		}

		// Return the unbundled spec so Swagger still loads (with broken refs)
		console.warn('⚠️ Returning unbundled spec due to bundle failure');
		return combined;
	}
}
