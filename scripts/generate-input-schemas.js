#!/usr/bin/env node
/**
 * Generate Create/Update input types and Zod schemas from existing type files in types/.
 * - Mirrors folder structure under schemas/<namespace>/<TypeName>.ts
 * - Skips if a schema file already exists
 * - Excludes relation object fields and timestamps (created_at, updated_at) from inputs
 * - Create<Input>: preserves field optionality/nullable per type shape
 * - Update<Input>: Partial<Create<Input>>
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { parseModelsAndEnums } from './utils/schemaMapper.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(path.join(__dirname, '..'));
const TYPES_DIR = path.join(ROOT, 'types');
// const SCHEMAS_DIR = path.join(ROOT, 'schemas'); // no longer used in in-place mode

function readAllSchemas() {
	const prismaRoot = path.join(ROOT, 'prisma');
	const prismaSchemasDir = path.join(prismaRoot, 'schemas');
	const dir = fs.existsSync(prismaSchemasDir) ? prismaSchemasDir : prismaRoot;
	const files = fs.readdirSync(dir).filter((f) => f.endsWith('.prisma'));
	const content = files.map((f) => fs.readFileSync(path.join(dir, f), 'utf8')).join('\n');
	return parseModelsAndEnums(content);
}

function walkTypes(dir) {
	const out = [];
	const entries = fs.readdirSync(dir, { withFileTypes: true });
	for (const ent of entries) {
		const full = path.join(dir, ent.name);
		if (ent.isDirectory()) {
			if (ent.name === 'zod') continue; // skip zod helpers
			out.push(...walkTypes(full));
		} else if (ent.isFile() && ent.name.endsWith('.ts')) {
			out.push(full);
		}
	}
	return out;
}

function parseTypeFile(filePath) {
	const src = fs.readFileSync(filePath, 'utf8');
	const baseName = path.basename(filePath, '.ts');
	const dirRel = path.relative(TYPES_DIR, path.dirname(filePath));
	// Skip known typo duplicates: if a sibling with baseName + 's' exists, prefer that one
	const siblingMaybe = path.join(path.dirname(filePath), `${baseName}s.ts`);
	if (fs.existsSync(siblingMaybe)) return null;
	// Parse imported local types
	const localTypeNames = new Set(
		Array.from(src.matchAll(/import\s+type\s*\{\s*([^}]+)\s*\}\s*from\s*['"](\.\.\/|\.\/)[^'"]+['"]/g)).flatMap(
			(m) =>
				m[1]
					.split(',')
					.map((s) => s.trim())
					.filter(Boolean)
		)
	);
	// Parse prisma imports (models + enums)
	const prismaImportSet = new Set(
		Array.from(src.matchAll(/import\s+type\s*\{\s*([^}]+)\s*\}\s*from\s*['"]@prisma\/client['"]/g)).flatMap((m) =>
			m[1]
				.split(',')
				.map((s) => s.trim())
				.filter(Boolean)
		)
	);

	// Find exported type matching file name only (do not fallback to first)
	const typeBlocks = Array.from(src.matchAll(/export\s+type\s+(\w+)\s*=\s*\{([\s\S]*?)\};/g));
	let typeName = null;
	let body = null;
	for (const [, name, b] of typeBlocks) {
		if (name === baseName) {
			typeName = name;
			body = b;
			break;
		}
	}
	// If no exported type exactly matching the filename, skip this file
	if (!typeName || !body) return null;

	// Parse fields
	const fields = [];
	for (const line of body.split('\n')) {
		const m = /^(\s*)(\w+)(\?)?\s*:\s*([^;]+);/.exec(line.trim());
		if (!m) continue;
		const name = m[2];
		const optional = !!m[3];
		const rawType = m[4].trim();
		const nullable = /\|\s*null\b/.test(rawType);
		const isArray = /\[\]$/.test(rawType.trim());
		// Extract base type for arrays/unions
		let baseTs = rawType.replace(/\|\s*null\b/g, '').trim();
		if (isArray) baseTs = baseTs.replace(/\[\]$/, '').trim();
		fields.push({ name, optional, nullable, isArray, rawType, baseTs });
	}
	return { filePath, dirRel, typeName, fields, localTypeNames, prismaImportSet };
}

function isRelationField(field, ctx) {
	const { baseTs, isArray } = field;
	const base = baseTs.replace(/^readonly\s+/, '').trim();
	// Consider local types as relations
	if (ctx.localTypeNames.has(base)) return true;
	// Consider prisma models as relations
	if (ctx.prismaModels.has(base)) return true;
	// Arrays of local/prisma types considered relations
	if (isArray && (ctx.localTypeNames.has(base) || ctx.prismaModels.has(base))) return true;
	return false;
}

function tsToZod(baseTs, { prismaEnums }) {
	const t = baseTs.trim();
	if (t === 'string') return 'z.string()';
	if (t === 'number') return 'z.number()';
	if (t === 'boolean') return 'z.boolean()';
	if (t === 'unknown' || t === 'any') return 'z.unknown()';
	if (prismaEnums.has(t) || /^[A-Z0-9_]+$/.test(t)) return `z.nativeEnum(${t})`;
	// Default fallback
	return 'z.unknown()';
}

function generateSchemasForType(parsed, prismaCtx) {
	const { typeName, fields, dirRel } = parsed;

	// Compute included fields: exclude timestamps and relation object fields
	const createFields = fields.filter((f) => !['created_at', 'updated_at'].includes(f.name));
	const filtered = createFields.filter((f) => !isRelationField(f, prismaCtx));

	// Build Zod schema and TS types
	const prismaEnumsUsed = new Set();
	const lines = [];
	// Track enums used to ensure we add missing @prisma/client value imports at file level
	for (const f of filtered) {
		const base = f.baseTs;
		if (prismaCtx.prismaEnums.has(base) || /^[A-Z0-9_]+$/.test(base)) prismaEnumsUsed.add(base);
	}

	// Create schema
	lines.push(`export const Create${typeName}Schema = z.object({`);
	for (const f of filtered) {
		let inner = tsToZod(f.baseTs, prismaCtx);
		// Heuristic: UUID typing for id-like string fields
		const looksLikeId = /(^|_)id$/i.test(f.name);
		if (!f.isArray && f.baseTs.trim() === 'string' && looksLikeId) inner = `${inner}.uuid()`;
		let zexpr = f.isArray ? `z.array(${inner})` : inner;
		if (f.nullable) zexpr += '.nullable()';
		if (f.optional) zexpr += '.optional()';
		lines.push(`\t${f.name}: ${zexpr},`);
	}
	lines.push('});');
	lines.push(`Create${typeName}Schema.openapi('Create${typeName}');`);
	lines.push('');
	lines.push(`export type Create${typeName}Input = z.infer<typeof Create${typeName}Schema>;`);
	lines.push('');
	// Update schema: all optional
	lines.push(`export const Update${typeName}Schema = Create${typeName}Schema.partial();`);
	lines.push(`Update${typeName}Schema.openapi('Update${typeName}');`);
	lines.push(`export type Update${typeName}Input = z.infer<typeof Update${typeName}Schema>;`);
	lines.push('');

	// Registration helper for OpenAPI
	lines.push(`export function register${typeName}InputSchemas(registry: OpenAPIRegistry) {`);
	lines.push(`\tregistry.register('Create${typeName}', Create${typeName}Schema);`);
	lines.push(`\tregistry.register('Update${typeName}', Update${typeName}Schema);`);
	lines.push(`}`);
	lines.push('');

	return { code: lines.join('\n'), dirRel, prismaEnumsUsed };
}

function insertAfterLastImport(src, block) {
	const importStmtRx = /(\n|^)import[\s\S]*?;[\t ]*(?=\n|$)/g;
	let last = null;
	let m;
	while ((m = importStmtRx.exec(src))) last = m;
	if (last) {
		const pos = last.index + last[0].length;
		return src.slice(0, pos) + '\n' + block + '\n' + src.slice(pos);
	}
	return block + '\n' + src;
}

function ensureImportZod(src) {
	if (/from\s*['"]zod['"]/.test(src)) return src;
	return insertAfterLastImport(src, `import { z } from 'zod';`);
}

function ensureImportZodOpenAPI(src) {
	if (/from\s*['"]@asteasolutions\/zod-to-openapi['"]/.test(src)) return src;
	return insertAfterLastImport(
		src,
		`import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';`
	);
}

function ensureExtendCall(src) {
	if (/extendZodWithOpenApi\(z\)/.test(src)) return src;
	return insertAfterLastImport(src, `extendZodWithOpenApi(z);`);
}

function getExistingPrismaValueNames(content) {
	const names = new Set();
	const rx = /import\s*\{\s*([^}]+)\s*\}\s*from\s*['"]@prisma\/client['"];?/gm;
	let m;
	while ((m = rx.exec(content))) {
		m[1]
			.split(',')
			.map((s) => s.trim())
			.filter(Boolean)
			.forEach((n) => names.add(n));
	}
	return names;
}

function ensurePrismaEnumImports(src, enumNames) {
	if (!enumNames || !enumNames.size) return src;
	const existing = getExistingPrismaValueNames(src);
	const missing = Array.from(enumNames).filter((n) => !existing.has(n));
	if (!missing.length) return src;
	return insertAfterLastImport(src, `import { ${missing.sort().join(', ')} } from '@prisma/client';`);
}

function main() {
	const { models, enums } = readAllSchemas();
	const prismaModels = new Set(models.keys());
	const prismaEnums = enums; // already Set
	const typeFiles = walkTypes(TYPES_DIR);

	let updatedCount = 0;
	for (const file of typeFiles) {
		const parsed = parseTypeFile(file);
		if (!parsed) continue;

		let src = fs.readFileSync(file, 'utf8');
		const createName = `Create${parsed.typeName}Schema`;
		if (new RegExp(`export\\s+const\\s+${createName}\\b`).test(src)) {
			continue; // do not overwrite if already present
		}

		const result = generateSchemasForType(parsed, {
			prismaModels,
			prismaEnums,
			localTypeNames: parsed.localTypeNames,
		});

		// Ensure imports and extend call
		src = ensureImportZod(src);
		src = ensureImportZodOpenAPI(src);
		src = ensurePrismaEnumImports(src, result.prismaEnumsUsed);
		src = ensureExtendCall(src);

		// Append schemas and registration
		src = src.trimEnd() + `\n\n` + result.code + `\n`;
		fs.writeFileSync(file, src);
		console.log(`Augmented ${path.relative(ROOT, file)} with input schemas`);
		updatedCount++;
	}
	console.log(`Done. Augmented ${updatedCount} type files with input schemas.`);
}

main();
