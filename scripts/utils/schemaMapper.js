// Utilities to parse Prisma schemas and build relation-aware TypeScript type shapes
// This focuses on producing BlogPost-like object types, preferring existing local
// types when available and falling back to @prisma/client model/enum types.

import fs from 'node:fs';
import path from 'node:path';

// Basic prisma scalar to TS type mapping used in Blog types
const SCALAR_TS_MAP = {
	String: 'string',
	Int: 'number',
	Float: 'number',
	BigInt: 'string',
	Decimal: 'string',
	DateTime: 'string',
	Boolean: 'boolean',
	Json: 'unknown',
	Bytes: 'string',
};

const PRISMA_SCALARS = new Set(Object.keys(SCALAR_TS_MAP));

export function stripComments(content) {
	return content
		.replace(/\/\*[\s\S]*?\*\//g, '') // block comments
		.replace(/^\s*\/\/.*$/gm, ''); // line comments
}

export function parseModelsAndEnums(schemaContent) {
	const content = stripComments(schemaContent);
	const modelRegex = /model\s+(\w+)\s*\{([\s\S]*?)\}/g;
	const enumRegex = /enum\s+(\w+)\s*\{([\s\S]*?)\}/g;

	const models = new Map();
	const enums = new Set();

	let m;
	while ((m = modelRegex.exec(content)) !== null) {
		const [, name, body] = m;
		const fields = body
			.split(/\n+/)
			.map((l) => l.trim())
			.filter((l) => l && !l.startsWith('@@'))
			.map((line) => {
				const parts = line.split(/\s+/);
				const fieldName = parts[0];
				const rawType = parts[1] || '';
				const attrs = parts.slice(2).join(' ');
				const isArray = rawType.endsWith('[]');
				const baseType = isArray ? rawType.slice(0, -2) : rawType.replace(/[?]/g, '');
				const isOptional = /\?$/.test(rawType);
				const isRelation =
					/@relation\b/.test(attrs) ||
					(!PRISMA_SCALARS.has(baseType) && baseType !== '' && fieldName.toLowerCase() !== 'id');
				const isEnum = !PRISMA_SCALARS.has(baseType) && /@db\.Enum|enum\b/.test(line) ? true : false;
				return { fieldName, rawType, baseType, attrs, isArray, isOptional, isRelation, isEnum };
			});
		models.set(name, { name, fields });
	}

	let e;
	while ((e = enumRegex.exec(content)) !== null) {
		const [, enumName] = e;
		enums.add(enumName);
	}

	return { models, enums };
}

// Convert snake_case plural model name to PascalCase singular type name
export function modelNameToTypeName(modelName) {
	// If modelName already looks like PascalCase, keep it but singularize naive trailing 's'
	const isPascal = /^[A-Z][A-Za-z0-9]*$/.test(modelName);
	let core = modelName;
	if (!isPascal) {
		core = modelName
			.split('_')
			.filter(Boolean)
			.map((p) => p.charAt(0).toUpperCase() + p.slice(1))
			.join('');
	}
	// Improved naive singularization
	if (/ies$/.test(core)) {
		core = core.replace(/ies$/, 'y');
	} else if (/ses$/.test(core)) {
		core = core.replace(/es$/, '');
	} else if (core.endsWith('s') && !core.endsWith('SS')) {
		core = core.slice(0, -1);
	}
	return core;
}

// Locate a local type definition under the types/ directory, e.g. BlogCategory.ts/js
function findLocalType(rootDir, typeName) {
	const typesDir = path.join(rootDir, 'types');
	if (!fs.existsSync(typesDir)) return null;

	// Breadth-first search files under types looking for a file named <TypeName>.ts or .js
	const queue = [typesDir];
	while (queue.length) {
		const dir = queue.shift();
		const entries = fs.readdirSync(dir, { withFileTypes: true });
		for (const ent of entries) {
			const full = path.join(dir, ent.name);
			if (ent.isDirectory()) {
				queue.push(full);
			} else if (ent.isFile()) {
				const base = path.basename(ent.name);
				if (base === `${typeName}.ts` || base === `${typeName}.js`) {
					// Build an ESM-like import path from the eventual output folder 'types/dtos'
					// Prefer .js extension in import like existing Blog types
					const importPathFromDtos = path.relative(path.join(typesDir, 'dtos'), full).replace(/\\/g, '/');
					const withJsExt = importPathFromDtos.replace(/\.ts$/, '.js');
					// Ensure relative import starts with ./ or ../
					const rel = withJsExt.startsWith('.') ? withJsExt : `./${withJsExt}`;
					return { importPath: rel, typeName };
				}
			}
		}
	}
	return null;
}

function toTsScalarOrEnum({ baseType, enums }) {
	if (PRISMA_SCALARS.has(baseType)) return { ts: SCALAR_TS_MAP[baseType], prismaEnum: null };
	// Treat known enums and SCREAMING_SNAKE_CASE identifiers as enums
	if (enums.has(baseType) || /^[A-Z0-9_]+$/.test(baseType)) return { ts: baseType, prismaEnum: baseType };
	// Unknown -> fallback any
	return { ts: 'unknown', prismaEnum: null };
}

// Build a relation-aware field type
function relationFieldType({ rootDir, relatedModelName, models }) {
	const relatedTypeName = modelNameToTypeName(relatedModelName);
	const local = findLocalType(rootDir, relatedTypeName);
	if (local) {
		return { ts: relatedTypeName, localImport: local, prismaModelType: null };
	}
	// Fallback to Prisma model type (e.g., users, files)
	if (models.has(relatedModelName)) {
		return { ts: relatedModelName, localImport: null, prismaModelType: relatedModelName };
	}
	// If model is not found, fallback to unknown
	return { ts: 'unknown', localImport: null, prismaModelType: null };
}

// Detect if a model looks like a many-to-many junction between exactly two models
function getManyToManyOppositeModel({ models, joinModelName, currentModelName }) {
	const join = models.get(joinModelName);
	if (!join) return null;
	const relFields = join.fields.filter((f) => {
		const baseType = f.baseType;
		return (!PRISMA_SCALARS.has(baseType) && baseType && /@relation\b/.test(f.attrs)) || models.has(baseType);
	});
	// Strict: exactly two relation fields -> treat as join
	if (relFields.length !== 2) return null;
	const distinct = Array.from(new Set(relFields.map((f) => f.baseType)));
	if (distinct.length !== 2) return null;
	if (!distinct.includes(currentModelName)) return null;
	return distinct[0] === currentModelName ? distinct[1] : distinct[0];
}

export function buildModelTypeShape({
	rootDir,
	modelName, // e.g., blog_posts
	models,
	enums,
}) {
	const model = models.get(modelName);
	if (!model) throw new Error(`Model not found: ${modelName}`);

	const typeName = modelNameToTypeName(modelName);
	const prismaImports = new Set();
	const enumImports = new Set();
	const localImports = [];
	const fields = [];

	for (const f of model.fields) {
		const { fieldName, baseType, isArray, isOptional } = f;
		const isRelation = /@relation\b/.test(f.attrs) || models.has(baseType);

		if (isRelation) {
			// Handle potential many-to-many via junction models: map to the opposite model if detected
			let relatedModelName = baseType;
			// Only consider junction mapping for collection relations (arrays)
			if (isArray && models.has(baseType)) {
				const opposite = getManyToManyOppositeModel({
					models,
					joinModelName: baseType,
					currentModelName: modelName,
				});
				if (opposite) relatedModelName = opposite;
			}
			const { ts, localImport, prismaModelType } = relationFieldType({
				rootDir,
				relatedModelName,
				models,
			});
			if (localImport) localImports.push(localImport);
			if (prismaModelType) prismaImports.add(prismaModelType);
			const itemTs = ts;
			const typeTs = isArray ? `${itemTs}[]` : itemTs;
			const relOptional = isArray ? false : isOptional;
			const relNullable = isArray ? false : isOptional;
			fields.push({ name: fieldName, ts: typeTs, optional: relOptional, nullable: relNullable });
			continue;
		}

		// Non-relation field
		if (PRISMA_SCALARS.has(baseType) || enums.has(baseType) || /^[A-Z0-9_]+$/.test(baseType)) {
			const { ts, prismaEnum } = toTsScalarOrEnum({ baseType, enums });
			if (prismaEnum) enumImports.add(prismaEnum);
			const finalTs = ts;
			// For optional fields, add null union similar to Blog types
			const nullable = isOptional;
			fields.push({ name: fieldName, ts: finalTs, optional: isOptional, nullable });
		} else if (models.has(baseType)) {
			// This is likely a foreign key scalar (e.g., author_id: String), but if baseType references a model, be conservative
			const { ts, prismaModelType } = relationFieldType({ rootDir, relatedModelName: baseType, models });
			if (prismaModelType) prismaImports.add(prismaModelType);
			fields.push({ name: fieldName, ts, optional: isOptional, nullable: isOptional });
		} else {
			fields.push({ name: fieldName, ts: 'unknown', optional: isOptional, nullable: isOptional });
		}
	}

	return {
		typeName,
		prismaImports: Array.from(prismaImports),
		enumImports: Array.from(enumImports),
		localImports,
		fields,
	};
}

export function renderTypeFile({ typeName, prismaImports, enumImports, localImports, fields }) {
	const lines = [];
	// Import local types first (dedupe)
	const seenLocal = new Set();
	for (const imp of localImports) {
		const key = `${imp.typeName}|${imp.importPath}`;
		if (seenLocal.has(key)) continue;
		seenLocal.add(key);
		lines.push(`import type { ${imp.typeName} } from '${imp.importPath}';`);
	}
	if (prismaImports.length || enumImports.length) {
		const names = [...prismaImports, ...enumImports].sort();
		lines.push(`import type { ${names.join(', ')} } from '@prisma/client';`);
	}
	lines.push('');
	lines.push(`export type ${typeName} = {`);
	for (const f of fields) {
		const opt = f.optional ? '?' : '';
		const nullable = f.nullable ? ' | null' : '';
		lines.push(`\t${f.name}${opt}: ${f.ts}${nullable};`);
	}
	lines.push('};');
	lines.push('');
	return lines.join('\n');
}

// High-level convenience: read all prisma schema files, build a type, and return code
export function generateModelTypeFromSchemas({ rootDir, modelName }) {
	const prismaRoot = path.join(rootDir, 'prisma');
	const prismaSchemas = path.join(prismaRoot, 'schemas');
	let schemaDir = prismaRoot;
	if (fs.existsSync(prismaSchemas)) schemaDir = prismaSchemas;
	const schemaFiles = fs
		.readdirSync(schemaDir)
		.filter((f) => f.endsWith('.prisma'))
		.map((f) => path.join(schemaDir, f));

	const content = schemaFiles.map((p) => fs.readFileSync(p, 'utf8')).join('\n');
	const { models, enums } = parseModelsAndEnums(content);
	const shape = buildModelTypeShape({ rootDir, modelName, models, enums });
	return renderTypeFile(shape);
}
