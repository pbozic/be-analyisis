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

function resolveTargetPath(argPath) {
	if (!argPath) return null;
	// Absolute path?
	let p = argPath;
	if (!path.isAbsolute(p)) {
		// Try relative to repo root first
		p = path.resolve(ROOT, argPath);
		if (!fs.existsSync(p)) {
			// Try relative to types directory
			p = path.resolve(TYPES_DIR, argPath);
		}
	}
	return fs.existsSync(p) ? p : null;
}

function parseArgs(argv) {
	const args = { file: null, type: null, help: false };
	for (let i = 0; i < argv.length; i++) {
		const a = argv[i];
		if (a === '--help' || a === '-h') {
			args.help = true;
		} else if (a === '--file' || a === '-f') {
			args.file = argv[i + 1];
			i++;
		} else if (a === '--type' || a === '-t') {
			args.type = argv[i + 1];
			i++;
		} else if (!a.startsWith('-') && !args.file && !args.type) {
			// Positional convenience: treat as file path
			args.file = a;
		}
	}
	return args;
}

function parseTypeFile(filePath) {
	const src = fs.readFileSync(filePath, 'utf8');
	const baseName = path.basename(filePath, '.ts');
	const dirRel = path.relative(TYPES_DIR, path.dirname(filePath));
	// Skip known typo duplicates: if a sibling with baseName + 's' exists, prefer that one
	const siblingMaybe = path.join(path.dirname(filePath), `${baseName}s.ts`);
	if (fs.existsSync(siblingMaybe)) return null;
	// Parse imported local types
	const localTypeNames = new Set();
	const localTypeImportPathMap = new Map(); // name -> module import path as written in file
	for (const m of src.matchAll(/import\s+type\s*\{\s*([^}]+)\s*\}\s*from\s*['"]([^'"]+)['"];?/g)) {
		const names = m[1]
			.split(',')
			.map((s) => s.trim())
			.filter(Boolean);
		const mod = m[2];
		for (const n of names) {
			localTypeNames.add(n);
			localTypeImportPathMap.set(n, mod);
		}
	}
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
	return { filePath, dirRel, typeName, fields, localTypeNames, localTypeImportPathMap, prismaImportSet };
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
	if (t === 'bigint') return 'z.bigint()';
	if (t === 'Date') return 'z.string().datetime()';
	if (t === 'unknown' || t === 'any') return 'z.unknown()';
	if (prismaEnums.has(t) || /^[A-Z0-9_]+$/.test(t)) return `z.nativeEnum(${t})`;
	// Default fallback
	return 'z.unknown()';
}

function generateSchemasForType(parsed, prismaCtx) {
	const { typeName, fields, dirRel, localTypeImportPathMap } = parsed;

	// Compute included fields: exclude timestamps and relation object fields
	const createFields = fields.filter((f) => !['created_at', 'updated_at'].includes(f.name));
	const filtered = createFields.filter((f) => !isRelationField(f, prismaCtx));

	// Build Zod schema and TS types
	const prismaEnumsUsed = new Set();

	// Track enums used in Create/Update input
	for (const f of filtered) {
		const base = f.baseTs;
		if (prismaCtx.prismaEnums.has(base) || /^[A-Z0-9_]+$/.test(base)) prismaEnumsUsed.add(base);
	}

	// Track enums used in Response as well (all fields)
	for (const f of fields) {
		const base = f.baseTs;
		if (prismaCtx.prismaEnums.has(base) || /^[A-Z0-9_]+$/.test(base)) prismaEnumsUsed.add(base);
	}

	// Helper to build a zod expression for a field
	const fieldToZod = (f, { treatRelationsAsUnknown, relationResolver }) => {
		const base = f.baseTs.trim();
		const isRel = prismaCtx.prismaModels.has(base) || prismaCtx.localTypeNames.has(base);
		let resolvedRel = null;
		if (relationResolver && isRel) {
			resolvedRel = relationResolver(f, base);
		}
		let inner =
			treatRelationsAsUnknown && isRel && !resolvedRel ? 'z.unknown()' : resolvedRel || tsToZod(base, prismaCtx);
		// Heuristic: UUID typing for id-like string fields (only when base is string)
		const looksLikeId = /(^|_)id$/i.test(f.name);
		if (!f.isArray && base === 'string' && looksLikeId) inner = `${inner}.uuid()`;
		let zexpr = f.isArray ? `z.array(${inner})` : inner;
		if (f.nullable) zexpr += '.nullable()';
		if (f.optional) zexpr += '.optional()';
		return zexpr;
	};

	const inputs = [];
	inputs.push(`export const Create${typeName}Schema = z.object({`);
	for (const f of filtered) {
		inputs.push(`\t${f.name}: ${fieldToZod(f, { treatRelationsAsUnknown: false })},`);
	}
	inputs.push(`}).openapi('Create${typeName}');`);
	inputs.push('');
	inputs.push(`export type Create${typeName}Input = z.infer<typeof Create${typeName}Schema>;`);
	inputs.push('');
	inputs.push(
		`export const Update${typeName}Schema = Create${typeName}Schema.partial().openapi('Update${typeName}');`
	);
	inputs.push(`export type Update${typeName}Input = z.infer<typeof Update${typeName}Schema>;`);
	inputs.push('');

	const response = [];
	const relatedImports = new Map(); // modulePath(without .js) -> Set of names to import
	const ensureImport = (schemaName, modPath) => {
		if (!modPath) return;
		const withoutExt = modPath.replace(/\.js$/i, '');
		if (!relatedImports.has(withoutExt)) relatedImports.set(withoutExt, new Set());
		relatedImports.get(withoutExt).add(schemaName);
	};
	const responseName = `${typeName}ResponseSchema`;
	const baseResponseName = `base${typeName}ResponseSchema`;
	const recursiveAliasName = `${typeName}Res`;

	// Identify self-recursive fields
	const selfSingle = fields.filter((f) => f.baseTs.trim() === typeName && !f.isArray);
	const selfArrays = fields.filter((f) => f.baseTs.trim() === typeName && f.isArray);
	const hasSelf = selfSingle.length > 0 || selfArrays.length > 0;

	if (hasSelf) {
		// Build base response object without self-recursive fields
		const baseLines = [];
		baseLines.push(`export const ${baseResponseName} = z.object({`);
		for (const f of fields) {
			const isSelf = f.baseTs.trim() === typeName;
			if (isSelf) continue; // exclude recursive fields from base
			const zexpr = fieldToZod(f, {
				treatRelationsAsUnknown: false,
				relationResolver: (field, base) => {
					// local imported type -> import its ResponseSchema and reference
					if (parsed.localTypeNames.has(base)) {
						const schemaName = `${base}ResponseSchema`;
						const mod = localTypeImportPathMap.get(base);
						ensureImport(schemaName, mod);
						return schemaName;
					}
					// prisma model but not imported locally -> unknown here
					if (prismaCtx.prismaModels.has(base)) return null;
					return null;
				},
			});
			baseLines.push(`\t${f.name}: ${zexpr},`);
		}
		baseLines.push(`}).openapi('${typeName}Response');`);
		baseLines.push('');
		// Recursive type alias
		const aliasLines = [];
		if (selfArrays.length) {
			aliasLines.push(
				`type ${recursiveAliasName} = z.infer<typeof ${baseResponseName}> & {`,
				...selfArrays.map((f) => `\t${f.name}: ${recursiveAliasName}[];`),
				`};`
			);
		} else {
			aliasLines.push(`type ${recursiveAliasName} = z.infer<typeof ${baseResponseName}>;`);
		}
		aliasLines.push('');
		// Extended response schema with lazy recursion
		const extendLines = [];
		extendLines.push(
			`export const ${responseName}: z.ZodType<${recursiveAliasName}> = ${baseResponseName}.extend({`
		);
		for (const f of [...selfSingle, ...selfArrays]) {
			let inner = `z.lazy(() => ${responseName})`;
			if (f.isArray) inner = `z.array(${inner})`;
			if (f.nullable) inner += '.nullable()';
			if (f.optional) inner += '.optional()';
			extendLines.push(`\t${f.name}: ${inner},`);
		}
		extendLines.push(`}).openapi('${typeName}Response');`);
		extendLines.push('');
		// Final export type
		const typeLine = `export type ${typeName}Response = z.infer<typeof ${responseName}>;`;
		response.push(...baseLines, ...aliasLines, ...extendLines, typeLine, '');
		// Also return parts for potential in-place conversion
		var responseBasePlusExtend = [...baseLines, ...aliasLines, ...extendLines].join('\n');
	} else {
		// Non-recursive: old single-schema shape
		response.push(`export const ${responseName} = z.object({`);
		for (const f of fields) {
			const zexpr = fieldToZod(f, {
				treatRelationsAsUnknown: false,
				relationResolver: (field, base) => {
					// local imported type -> import its ResponseSchema and reference
					if (parsed.localTypeNames.has(base)) {
						const schemaName = `${base}ResponseSchema`;
						const mod = localTypeImportPathMap.get(base);
						ensureImport(schemaName, mod);
						return schemaName;
					}
					// prisma model but not imported locally -> unknown
					if (prismaCtx.prismaModels.has(base)) return null;
					return null;
				},
			});
			response.push(`\t${f.name}: ${zexpr},`);
		}
		response.push(`}).openapi('${typeName}Response');`);
		response.push('');
		response.push(`export type ${typeName}Response = z.infer<typeof ${responseName}>;`);
		response.push('');
	}

	// Unified registration function per file
	const register = [];
	register.push(`export function registerSchemas(registry: OpenAPIRegistry) {`);
	register.push(`\tregistry.register('Create${typeName}', Create${typeName}Schema);`);
	register.push(`\tregistry.register('Update${typeName}', Update${typeName}Schema);`);
	register.push(`\tregistry.register('${typeName}Response', ${typeName}ResponseSchema);`);
	register.push(`}`);
	register.push('');

	return {
		dirRel,
		prismaEnumsUsed,
		inputsCode: inputs.join('\n'),
		responseCode: response.join('\n'),
		registerCode: register.join('\n'),
		relatedImports,
		responseName,
		baseResponseName,
		recursiveAliasName,
		hasSelf,
		responseBasePlusExtend,
	};
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

function ensureRelatedResponseImports(src, relatedImports) {
	if (!relatedImports || !relatedImports.size) return src;
	// Collect existing value imports to avoid duplicates
	const existing = new Map(); // path -> Set(names)
	for (const m of src.matchAll(/import\s*\{\s*([^}]+)\s*\}\s*from\s*['"]([^'"]+)['"];?/g)) {
		const names = m[1]
			.split(',')
			.map((s) => s.trim())
			.filter(Boolean);
		const mod = m[2];
		if (!existing.has(mod)) existing.set(mod, new Set());
		for (const n of names) existing.get(mod).add(n);
	}
	const importLines = [];
	for (const [mod, namesSet] of relatedImports.entries()) {
		const names = Array.from(namesSet).sort();
		const already = existing.get(mod);
		const missing = already ? names.filter((n) => !already.has(n)) : names;
		if (missing.length) importLines.push(`import { ${missing.join(', ')} } from '${mod}';`);
	}
	if (!importLines.length) return src;
	return insertAfterLastImport(src, importLines.join('\n'));
}

function importPathFrom(fromFile, toFile) {
	let rel = path.relative(path.dirname(fromFile), toFile);
	rel = rel.replace(/\\/g, '/');
	if (!rel.startsWith('.')) rel = './' + rel;
	rel = rel.replace(/\.ts$/i, '');
	return rel;
}

function main() {
	const { models, enums } = readAllSchemas();
	const prismaModels = new Set(models.keys());
	const prismaEnums = enums; // already Set

	const argv = process.argv.slice(2);
	const { file, type, help } = parseArgs(argv);
	if (help) {
		console.log(`Usage: node scripts/generate-input-schemas.js [--file <path>|--type <TypeName>]

Options:
  -f, --file <path>   Generate only for a specific file (absolute, repo-relative, or relative to types/)
  -t, --type <name>   Generate only for a specific exported type name (matches <name>.ts across types/)
  -h, --help          Show this help
`);
		process.exit(0);
	}

	let typeFiles = [];
	if (file) {
		const target = resolveTargetPath(file);
		if (!target) {
			console.error(`File or directory not found: ${file}`);
			process.exit(1);
		}
		const stat = fs.statSync(target);
		if (stat.isDirectory()) {
			typeFiles = walkTypes(target);
		} else if (stat.isFile()) {
			typeFiles = [target];
		}
	} else if (type) {
		// Scan all and filter by base filename
		const all = walkTypes(TYPES_DIR);
		typeFiles = all.filter((p) => path.basename(p, '.ts') === type);
		if (!typeFiles.length) {
			console.error(`Type file not found for name: ${type}`);
			process.exit(1);
		}
	} else {
		typeFiles = walkTypes(TYPES_DIR);
	}

	// Build a type index: TypeName -> absolute file path
	const allTypeFiles = walkTypes(TYPES_DIR);
	const typeIndex = new Map();
	for (const tf of allTypeFiles) {
		try {
			const parsedTF = parseTypeFile(tf);
			if (parsedTF && parsedTF.typeName) typeIndex.set(parsedTF.typeName, tf);
		} catch {
			// ignore parse errors for non-type files
		}
	}

	let updatedCount = 0;
	for (const file of typeFiles) {
		const parsed = parseTypeFile(file);
		if (!parsed) continue;

		let src = fs.readFileSync(file, 'utf8');

		const createName = `Create${parsed.typeName}Schema`;
		const responseName = `${parsed.typeName}ResponseSchema`;
		const hasCreate = new RegExp(`export\\s+const\\s+${createName}\\b`).test(src);
		const hasResponse = new RegExp(`export\\s+const\\s+${responseName}\\b`).test(src);
		const hasRegister = /export\s+function\s+registerSchemas\s*\(/.test(src);

		const result = generateSchemasForType(parsed, {
			prismaModels,
			prismaEnums,
			localTypeNames: parsed.localTypeNames,
			typeIndex,
		});

		// Ensure imports and extend call (we may add registerSchemas or reformat openapi chaining)
		src = ensureImportZod(src);
		src = ensureImportZodOpenAPI(src);
		src = ensurePrismaEnumImports(src, result.prismaEnumsUsed);
		src = ensureExtendCall(src);
		// Ensure value imports for related ResponseSchemas (we may rewrite existing response fields)
		src = ensureRelatedResponseImports(src, result.relatedImports);

		// Append missing sections
		const chunks = [];
		if (!hasCreate) chunks.push(result.inputsCode);
		if (!hasResponse) chunks.push(result.responseCode);
		if (!hasRegister) chunks.push(result.registerCode);

		// Post-process: convert separate .openapi() calls into chained form (direct replacement)
		const chainOpenapiInline = (s, constName, label) => {
			const rx = new RegExp(`\\);\\s*${constName}\\.openapi\\(['"]${label}['"]\\);`, 'g');
			return s.replace(rx, `).openapi('${label}');`);
		};
		src = chainOpenapiInline(src, createName, `Create${parsed.typeName}`);
		src = chainOpenapiInline(src, `Update${parsed.typeName}Schema`, `Update${parsed.typeName}`);
		src = chainOpenapiInline(src, responseName, `${parsed.typeName}Response`);

		// If existing response schema and self-recursive model, convert to base+extend pattern
		if (hasResponse && result.hasSelf) {
			const baseExists = new RegExp(`export\\s+const\\s+${result.baseResponseName}\\b`).test(src);
			if (!baseExists) {
				const startMarker = `export const ${result.responseName}`;
				const start = src.indexOf(startMarker);
				if (start !== -1) {
					let end = src.indexOf('\nexport ', start + startMarker.length);
					if (end === -1) end = src.length;
					const before = src.slice(0, start);
					const after = src.slice(end);
					src = before + result.responseBasePlusExtend + after;
				}
			}
		}

		// Targeted minimal rewrite of existing Response schema fields: resolve relations and Date types
		const rewriteFieldsInBlock = (s, constName, buildLineForField) => {
			const startMarker = `export const ${constName}`;
			const start = s.indexOf(startMarker);
			if (start === -1) return s;
			let end = s.indexOf('\nexport ', start + startMarker.length);
			if (end === -1) end = s.length;
			let block = s.slice(start, end);
			for (const f of parsed.fields) {
				const desired = buildLineForField(f);
				if (!desired) continue;
				const propName = f.name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
				const rx = new RegExp(`(^[\t ]*${propName}\\s*:\\s*)([^,]+)(,?)`, 'm');
				block = block.replace(rx, (_m, p1, _p2, p3) => `${p1}${desired}${p3 || ','}`);
			}
			return s.slice(0, start) + block + s.slice(end);
		};

		if (hasResponse) {
			// Recompute desired expressions similar to generation
			src = rewriteFieldsInBlock(src, responseName, (f) => {
				const base = f.baseTs.trim();
				let innerExpr = null;
				if (base === parsed.typeName) {
					innerExpr = `z.lazy(() => ${parsed.typeName}ResponseSchema)`;
				} else if (parsed.localTypeNames.has(base)) {
					innerExpr = `${base}ResponseSchema`;
				} else if (prismaModels.has(base)) {
					const target = typeIndex.get(base);
					if (target) {
						const mod = importPathFrom(file, target);
						const schemaName = `${base}ResponseSchema`;
						// accumulate import
						if (!result.relatedImports.has(mod)) result.relatedImports.set(mod, new Set());
						result.relatedImports.get(mod).add(schemaName);
						innerExpr = schemaName;
					}
				}
				if (!innerExpr) {
					innerExpr = tsToZod(base, { prismaEnums });
				}
				let zexpr = f.isArray ? `z.array(${innerExpr})` : innerExpr;
				if (f.nullable) zexpr += '.nullable()';
				if (f.optional) zexpr += '.optional()';
				return zexpr;
			});
			// Ensure any new imports collected are present
			src = ensureRelatedResponseImports(src, result.relatedImports);
		}

		if (chunks.length) {
			src = src.trimEnd() + `\n\n` + chunks.join('\n') + `\n`;
		}

		// no targeted field-level rewrites

		fs.writeFileSync(file, src);
		let what;
		if (!hasCreate && !hasResponse && !hasRegister) what = 'input, response and register';
		else if (!hasCreate && !hasResponse) what = 'input and response';
		else if (!hasCreate) what = 'input';
		else if (!hasResponse) what = 'response';
		else if (!hasRegister) what = 'register';
		else what = 'formatting';
		console.log(`Augmented ${path.relative(ROOT, file)} with ${what}`);
		updatedCount++;
	}
	console.log(`Done. Augmented ${updatedCount} type files with input schemas.`);
}

main();
