#!/usr/bin/env node
/*
  Simple Prisma model -> DTO generator
  - Parses prisma/schemas/*.prisma
  - Generates types/dtos/<Model>DTO.ts with:
	- <Model>DTO (response)
	- <Model>CreateDTO (input)
	- <Model>UpdateDTO (input, all optional)
	- picker helpers for create/update

  Usage:
	node scripts/generate-dtos.js users
	node scripts/generate-dtos.js all
*/

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

import { generateModelTypeFromSchemas, modelNameToTypeName, parseModelsAndEnums } from './utils/schemaMapper.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ROOT = path.resolve(path.join(__dirname, '..'));
const PRISMA_SCHEMAS_DIR = path.join(ROOT, 'prisma', 'schemas');
const OUTPUT_DIR = path.join(ROOT, 'types', 'dtos');

const SCALARS = new Set(['String', 'Int', 'BigInt', 'Float', 'Decimal', 'DateTime', 'Boolean', 'Json', 'Bytes']);

function readSchemas() {
	const files = fs.readdirSync(PRISMA_SCHEMAS_DIR).filter((f) => f.endsWith('.prisma'));
	return files.map((f) => ({ file: f, content: fs.readFileSync(path.join(PRISMA_SCHEMAS_DIR, f), 'utf8') }));
}

function stripComments(str) {
	// remove /* ... */ and /// doc and // comments
	return str
		.replace(/\/\*[\s\S]*?\*\//g, '')
		.replace(/^\s*\/\/.*$/gm, '')
		.replace(/^\s*\/\/\/.*$/gm, '');
}

// ===== Helpers for in-place type updates in existing files =====

function parseGeneratedParts(generatedCode, typeName) {
	// Collect local import specs (excluding @prisma/client)
	const localImports = new Map(); // path -> Set(names)
	const importRx = /import\s+type\s*\{\s*([^}]+)\s*\}\s*from\s*['"]([^'"]+)['"];?/g;
	let m;
	while ((m = importRx.exec(generatedCode))) {
		const names = m[1]
			.split(',')
			.map((s) => s.trim())
			.filter(Boolean);
		const mod = m[2];
		if (mod === '@prisma/client') continue;
		if (!localImports.has(mod)) localImports.set(mod, new Set());
		const set = localImports.get(mod);
		names.forEach((n) => set.add(n));
	}

	// Prisma type imports
	const prismaTypeNames = new Set();
	const prismaValueNames = new Set();
	const prismaTypeRx = /import\s+type\s*\{\s*([^}]+)\s*\}\s*from\s*['"]@prisma\/client['"];?/gm;
	let ptm;
	while ((ptm = prismaTypeRx.exec(generatedCode))) {
		ptm[1]
			.split(',')
			.map((s) => s.trim())
			.filter(Boolean)
			.forEach((n) => prismaTypeNames.add(n));
	}
	const prismaValueRx = /import\s*\{\s*([^}]+)\s*\}\s*from\s*['"]@prisma\/client['"];?/gm;
	let pvm;
	while ((pvm = prismaValueRx.exec(generatedCode))) {
		pvm[1]
			.split(',')
			.map((s) => s.trim())
			.filter(Boolean)
			.forEach((n) => prismaValueNames.add(n));
	}

	// Type block
	const typeBlockRx = new RegExp(`export\\s+type\\s+${typeName}\\s*=\\s*\\{[\\s\\S]*?\\};`);
	const tb = generatedCode.match(typeBlockRx);
	const typeBlock = tb ? tb[0] : '';

	return { localImports, prismaTypeNames, prismaValueNames, typeBlock };
}

// (mergeNamedImportLine removed: no longer needed with replace strategy)

function insertImport(content, importBlock) {
	// Insert import block after the last full import statement (single or multi-line), or at the top
	const importStmtRx = /(\n|^)import[\s\S]*?;[\t ]*(?=\n|$)/g;
	let lastMatch = null;
	let m;
	while ((m = importStmtRx.exec(content))) {
		lastMatch = m;
	}
	if (lastMatch) {
		const insertPos = lastMatch.index + lastMatch[0].length;
		return content.slice(0, insertPos) + '\n' + importBlock + '\n' + content.slice(insertPos);
	}
	return importBlock + '\n' + content;
}

function stripTargetedImports(content) {
	// Remove any existing imports from @prisma/client and any relative path (./ or ../), including multi-line
	const importStmtRx = /(\n|^)import[\s\S]*?;[\t ]*(?=\n|$)/g;
	return content.replace(importStmtRx, (stmt) => {
		// Side-effect import: import 'module';
		let m = /import\s*['"]([^'"]+)['"]/m.exec(stmt);
		if (m) {
			const mod = m[1];
			if (mod === '@prisma/client' || mod.startsWith('./') || mod.startsWith('../')) return '';
			return stmt; // keep
		}
		// Named/namespace import
		m = /from\s*['"]([^'"]+)['"]/m.exec(stmt);
		if (!m) return stmt; // not recognized, keep
		const mod = m[1];
		if (mod === '@prisma/client' || mod.startsWith('./') || mod.startsWith('../')) return '';
		return stmt; // keep
	});
}

function ensureImports(content, parts) {
	// Replace any prior prisma/local type imports with freshly generated ones
	let updated = stripTargetedImports(content);
	const importLines = [];
	if (parts.localImports.size) {
		for (const [mod, namesSet] of parts.localImports.entries()) {
			const namesArr = Array.from(namesSet).sort();
			importLines.push(`import type { ${namesArr.join(', ')} } from '${mod}';`);
		}
	}
	if (parts.prismaTypeNames && parts.prismaTypeNames.size) {
		importLines.push(
			`import type { ${Array.from(parts.prismaTypeNames).sort().join(', ')} } from '@prisma/client';`
		);
	}
	if (parts.prismaValueNames && parts.prismaValueNames.size) {
		importLines.push(`import { ${Array.from(parts.prismaValueNames).sort().join(', ')} } from '@prisma/client';`);
	}
	if (importLines.length) {
		const toInsert = importLines.join('\n');
		updated = insertImport(updated, toInsert);
	}
	return updated;
}

function upsertTypeInFile(filePath, generatedCode, typeName) {
	let content = fs.readFileSync(filePath, 'utf8');
	const parts = parseGeneratedParts(generatedCode, typeName);
	if (!parts.typeBlock) return; // nothing to do
	// Ensure imports present
	content = ensureImports(content, parts);
	// Remove existing export type declarations for this name
	const blockTypeRx = new RegExp(`export\\s+type\\s+${typeName}\\s*=\\s*\\{[\\s\\S]*?\\};`, 'g');
	const aliasTypeRx = new RegExp(`export\\s+type\\s+${typeName}\\s*=\\s*[^;\n]+;`, 'g');
	content = content.replace(blockTypeRx, '');
	content = content.replace(aliasTypeRx, '');
	content = content.trimEnd() + `\n\n` + parts.typeBlock + `\n`;
	fs.writeFileSync(filePath, content);
}

function parseModels(schemas) {
	const enums = new Set();
	const models = new Map();

	for (const { content } of schemas) {
		const src = stripComments(content);
		// enums
		const enumRx = /enum\s+(\w+)\s*{([\s\S]*?)}/g;
		let em;
		while ((em = enumRx.exec(src))) {
			enums.add(em[1]);
		}
		// models
		const modelRx = /model\s+(\w+)\s*{([\s\S]*?)}/g;
		let mm;
		while ((mm = modelRx.exec(src))) {
			const name = mm[1];
			const body = mm[2];
			const lines = body
				.split(/\n/)
				.map((l) => l.trim())
				.filter((l) => l && !l.startsWith('@@') && !l.startsWith('}'));
			const fields = [];
			for (const line of lines) {
				const m = /^(\w+)\s+(\S+)(?:\s+([\s\S]*))?$/.exec(line);
				if (!m) continue;
				const [, fieldName, typeToken, attrStrRaw] = m;
				const isOptional = typeToken.endsWith('?');
				const isArray = typeToken.endsWith('[]');
				let baseType = typeToken.replace(/\?/g, '').replace(/\[/g, '').replace(/\]/g, '');
				const attrStr = attrStrRaw || '';
				fields.push({ name: fieldName, baseType, isOptional, isArray, attrs: attrStr });
			}
			models.set(name, { name, fields });
		}
	}
	return { enums, models };
}

function computeCreateKeys(model) {
	// find relation-bound foreign key fields referenced by @relation(fields: [...]) on relation object fields
	const fkReferenced = new Set();
	for (const f of model.fields) {
		if (f.attrs && /@relation\s*\(/.test(f.attrs)) {
			const m = /fields\s*:\s*\[([^\]]*)\]/.exec(f.attrs);
			if (m) {
				m[1]
					.split(',')
					.map((s) => s.trim())
					.filter(Boolean)
					.forEach((n) => fkReferenced.add(n));
			}
		}
	}

	const omitByAttr = new Set(['created_at', 'updated_at']);
	const createKeys = [];

	for (const f of model.fields) {
		// skip block attributes or computed
		if (f.name.startsWith('@@')) continue;
		// skip relation object fields or arrays
		const isRelationObject =
			!SCALARS.has(f.baseType) &&
			!f.baseType.match(/^Bytes|Json$/) &&
			!f.baseType.match(/^[A-Z0-9_]+$/) &&
			/@relation/.test(f.attrs);
		if (isRelationObject || f.isArray) continue;
		// skip id or timestamps
		if (/@id\b/.test(f.attrs)) continue;
		if (omitByAttr.has(f.name)) continue;
		// skip referenced foreign keys
		if (fkReferenced.has(f.name)) continue;
		createKeys.push(f.name);
	}
	return createKeys;
}

function generateDtoFile(modelName, model) {
	const createKeys = computeCreateKeys(model);
	const keysUnion = createKeys.map((k) => `'${k}'`).join(' | ');
	const keysArray = createKeys.map((k) => `\t'${k}'`).join(',\n');

	const out = [
		`// Auto-generated by scripts/generate-dtos.js. Do not edit manually.\n`,
		`// Source model: ${modelName}\n\n`,
		`import type { ${modelName} as ${modelName}Model } from '@prisma/client';\n\n`,
		`export type ${modelName}DTO = ${modelName}Model;\n\n`,
		`export type ${modelName}CreateDTO = Pick<${modelName}Model, ${createKeys.length ? keysUnion : 'never'}>;\n`,
		`export type ${modelName}UpdateDTO = Partial<${modelName}CreateDTO>;\n\n`,
		`export const ${modelName.charAt(0).toLowerCase() + modelName.slice(1)}CreateKeys = [\n${keysArray}\n] as const;\n`,
		`export type ${modelName}CreateKey = typeof ${modelName.charAt(0).toLowerCase() + modelName.slice(1)}CreateKeys[number];\n\n`,
		`export function pick${modelName}Create(input: Record<string, any>): ${modelName}CreateDTO {\n`,
		`\tconst out: any = {};\n`,
		`\tfor (const k of ${modelName.charAt(0).toLowerCase() + modelName.slice(1)}CreateKeys) { if (input[k] !== undefined) out[k] = input[k]; }\n`,
		`\treturn out as ${modelName}CreateDTO;\n`,
		`}\n\n`,
		`export function pick${modelName}Update(input: Record<string, any>): ${modelName}UpdateDTO {\n`,
		`\tconst out: any = {};\n`,
		`\tfor (const k of ${modelName.charAt(0).toLowerCase() + modelName.slice(1)}CreateKeys) { if (k in input) out[k] = input[k]; }\n`,
		`\treturn out as ${modelName}UpdateDTO;\n`,
		`}\n\n`,
		`export function to${modelName}DTO(entity: ${modelName}Model): ${modelName}DTO {\n`,
		`\treturn entity as ${modelName}DTO;\n`,
		`}\n`,
	].join('');

	if (!fs.existsSync(OUTPUT_DIR)) fs.mkdirSync(OUTPUT_DIR, { recursive: true });
	const outPath = path.join(OUTPUT_DIR, `${modelName}DTO.ts`);
	fs.writeFileSync(outPath, out);
	return outPath;
}
/**
 * Main entry point for generating DTOs.
 * @argument {string} target - The target model to generate DTOs for. Use 'all' to generate for all models.
 * @argument {string} folder - The output folder under types/ to place generated DTOs.
 * @argument {string} mode - The generation mode: 'dto' (default), 'shape', or 'map'.
 */
function main() {
	const target = process.argv[2] || 'all';
	const folder = process.argv[3] || 'general';
	const OUTPUT_DIR = path.join(ROOT, 'types', folder);
	const mode = process.argv[4] || 'shape'; // 'dto' | 'shape' | 'map'

	// Helper: read all prisma schemas (supports prisma/schemas or prisma root)
	const prismaRoot = path.join(ROOT, 'prisma');
	const prismaSchemasDir = path.join(prismaRoot, 'schemas');
	const schemaDir = fs.existsSync(prismaSchemasDir) ? prismaSchemasDir : prismaRoot;
	const allSchemaFiles = fs
		.readdirSync(schemaDir)
		.filter((f) => f.endsWith('.prisma'))
		.map((f) => path.join(schemaDir, f));
	const allSchemaContent = allSchemaFiles.map((p) => fs.readFileSync(p, 'utf8')).join('\n');

	function buildNamespaceMap(content) {
		// Capture leading triple-slash comment block before a model and extract @namespace lines
		const rx = /((?:^\s*\/\/\/.*\n)*)\s*model\s+(\w+)\s*\{/gm;
		const map = new Map();
		let m;
		while ((m = rx.exec(content))) {
			const comments = m[1] || '';
			const model = m[2];
			const namespaces = Array.from(comments.matchAll(/^\s*\/\/\/\s*@namespace\s+(\w+)/gm)).map((mm) => mm[1]);
			if (namespaces.length) map.set(model, namespaces[0]);
		}
		return map;
	}

	function buildHiddenSet(content) {
		// Capture leading triple-slash comment block before a model and detect @hidden tag
		const rx = /((?:^\s*\/\/\/.*\n)*)\s*model\s+(\w+)\s*\{/gm;
		const hidden = new Set();
		let m;
		while ((m = rx.exec(content))) {
			const comments = m[1] || '';
			const model = m[2];
			if (/^\s*\/\/\/\s*@hidden\b/m.test(comments)) hidden.add(model);
		}
		return hidden;
	}

	function normalizeNamespace(ns) {
		if (!ns) return null;
		return ns.charAt(0).toLowerCase() + ns.slice(1);
	}

	function findExistingTypePath(typeName) {
		const typesDir = path.join(ROOT, 'types');
		if (!fs.existsSync(typesDir)) return null;
		const queue = [typesDir];
		while (queue.length) {
			const dir = queue.shift();
			const ents = fs.readdirSync(dir, { withFileTypes: true });
			for (const ent of ents) {
				const full = path.join(dir, ent.name);
				if (ent.isDirectory()) queue.push(full);
				else if (ent.isFile()) {
					const base = path.basename(full).toLowerCase();
					const t1 = `${typeName}.ts`.toLowerCase();
					const t2 = `${typeName}.js`.toLowerCase();
					if (base === t1 || base === t2) return full;
				}
			}
		}
		return null;
	}

	function isJunctionModel(modelsMap, modelName) {
		const model = modelsMap.get(modelName);
		if (!model) return false;
		const relFields = model.fields.filter((f) => /@relation\b/.test(f.attrs) || modelsMap.has(f.baseType));
		if (relFields.length !== 2) return false;
		const distinct = Array.from(new Set(relFields.map((f) => f.baseType)));
		if (distinct.length !== 2) return false;
		// Exclude models that have meaningful non-relation fields (beyond ids and timestamps)
		const nonRel = model.fields.filter((f) => !(/@relation\b/.test(f.attrs) || modelsMap.has(f.baseType)));
		const allowed = new Set(['created_at', 'updated_at']);
		const hasMeaningful = nonRel.some((f) => {
			const name = (f.name || f.fieldName || '').toLowerCase();
			const looksLikeId = /(^|_)id$/.test(name);
			const isAllowed = allowed.has(name) || looksLikeId || /@id\b/.test(f.attrs || '');
			return !isAllowed;
		});
		return !hasMeaningful;
	}
	const schemas = readSchemas();
	const { models } = parseModels(schemas);
	const list = target === 'all' ? Array.from(models.keys()) : [target];

	if (mode === 'map') {
		// Parse comprehensive model map from all schema content for junction detection and namespaces
		const parsed = parseModelsAndEnums(allSchemaContent);
		const nsMap = buildNamespaceMap(allSchemaContent);
		const hiddenSet = buildHiddenSet(allSchemaContent);
		const allModels = Array.from(parsed.models.keys());
		for (const name of allModels) {
			// Skip explicitly hidden models (assumed junction or internal-only)
			if (hiddenSet.has(name)) continue;
			// Skip junction tables
			if (isJunctionModel(parsed.models, name)) continue;
			const typeName = modelNameToTypeName(name);
			// If a type already exists anywhere in types/, update it in place; otherwise write to derived namespace folder
			const existingPath = findExistingTypePath(typeName);
			let outPath;
			if (existingPath) {
				outPath = existingPath;
			} else {
				// Derive folder from first @namespace (fallback to 'dtos')
				const ns = nsMap.get(name);
				const normalizedNs = normalizeNamespace(ns);
				const outDir = normalizedNs ? path.join(ROOT, 'types', normalizedNs) : OUTPUT_DIR;
				if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
				outPath = path.join(outDir, `${typeName}.ts`);
			}
			const code = generateModelTypeFromSchemas({
				rootDir: ROOT,
				modelName: name,
				targetDir: path.dirname(outPath),
			});
			if (existingPath) {
				upsertTypeInFile(outPath, code, typeName);
				console.log(`Updated type ${typeName} in ${outPath}`);
			} else {
				const header = `// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.`;
				fs.writeFileSync(outPath, `${header}\n\n${code}`);
				console.log(`Mapped ${name} -> ${outPath}`);
			}
		}
		return;
	}
	for (const name of list) {
		const model = models.get(name);
		if (!model) {
			console.error(`Model not found: ${name}`);
			continue;
		}
		if (mode === 'shape') {
			const typeCode = generateModelTypeFromSchemas({ rootDir: ROOT, modelName: name, targetDir: OUTPUT_DIR });
			if (!fs.existsSync(OUTPUT_DIR)) fs.mkdirSync(OUTPUT_DIR, { recursive: true });
			const typeName = modelNameToTypeName(name);
			const outPath = path.join(OUTPUT_DIR, `${typeName}.ts`);
			const header = `// Auto-generated shape by scripts/generate-dtos.js (mode: shape). Do not edit manually.\n`;
			fs.writeFileSync(outPath, `${header}\n${typeCode}`);
			console.log(`Generated shape ${outPath}`);
			continue;
		}

		const outPath = generateDtoFile(name, model);
		console.log(`Generated ${outPath}`);
	}
}

main();
