/**
 * Generator script to automatically create integration tests for all DAO → Mapper flows
 *
 * This script:
 * 1. Scans all DAO files to find exported functions
 * 2. Finds corresponding mapper files
 * 3. Matches DAO functions to mappers based on naming conventions
 * 4. Generates integration tests that:
 *    - Call DAO with test data
 *    - Pass result through mapper
 *    - Validate with Zod schema
 */

import * as fs from 'fs';
import * as path from 'path';

import glob from 'fast-glob';
import * as ts from 'typescript';

const DAO_DIR = path.join(process.cwd(), 'dao');
const SCHEMAS_DIR = path.join(process.cwd(), 'schemas', 'dto');
const OUTPUT_DIR = path.join(process.cwd(), 'tests', 'integration', 'dao-mapper');

interface DAOFunction {
	name: string;
	fileName: string;
	filePath: string;
	model: string; // e.g., 'Business', 'User'
}

interface MapperInfo {
	model: string;
	mapperFunctions: string[];
	mapperFilePath: string;
	schemaFilePath: string;
	schemas: string[];
}

async function main() {
	console.log('🔍 Scanning DAO files and mappers...\n');

	// 1. Scan DAO files
	const daoFunctions = await scanDAOFiles();
	console.log(`Found ${daoFunctions.length} DAO functions\n`);

	// 2. Scan mapper files
	const mappers = await scanMapperFiles();
	console.log(`Found ${mappers.length} mapper modules\n`);

	// 3. Generate integration tests
	await generateIntegrationTests(daoFunctions, mappers);

	console.log('\n✅ Integration tests generated!');
}

async function scanDAOFiles(): Promise<DAOFunction[]> {
	const daoFiles = await glob('*.ts', {
		cwd: DAO_DIR,
		absolute: true,
		ignore: ['**/index.ts'],
	});

	const functions: DAOFunction[] = [];

	for (const filePath of daoFiles) {
		const content = fs.readFileSync(filePath, 'utf-8');
		const sourceFile = ts.createSourceFile(filePath, content, ts.ScriptTarget.Latest, true);

		const fileName = path.basename(filePath, '.ts');
		const model = fileName; // e.g., 'Business.ts' → 'Business'

		ts.forEachChild(sourceFile, (node) => {
			// Find export function declarations
			if (
				ts.isFunctionDeclaration(node) &&
				node.modifiers?.some((m) => m.kind === ts.SyntaxKind.ExportKeyword) &&
				node.name
			) {
				functions.push({
					name: node.name.text,
					fileName,
					filePath,
					model,
				});
			}

			// Find export const arrow functions
			if (ts.isVariableStatement(node) && node.modifiers?.some((m) => m.kind === ts.SyntaxKind.ExportKeyword)) {
				node.declarationList.declarations.forEach((decl) => {
					if (ts.isIdentifier(decl.name) && decl.initializer && ts.isArrowFunction(decl.initializer)) {
						functions.push({
							name: decl.name.text,
							fileName,
							filePath,
							model,
						});
					}
				});
			}
		});
	}

	return functions;
}

async function scanMapperFiles(): Promise<MapperInfo[]> {
	const mapperFiles = await glob('**/*.mappers.ts', {
		cwd: SCHEMAS_DIR,
		absolute: true,
	});

	const mappers: MapperInfo[] = [];

	for (const filePath of mapperFiles) {
		const content = fs.readFileSync(filePath, 'utf-8');
		const sourceFile = ts.createSourceFile(filePath, content, ts.ScriptTarget.Latest, true);

		const relativePath = path.relative(SCHEMAS_DIR, filePath);
		const model = relativePath.split(path.sep)[0]; // e.g., 'Business/business.mappers.ts' → 'Business'

		const mapperFunctions: string[] = [];
		const schemas: string[] = [];

		// Find mapper dir and schema file
		const mapperDir = path.dirname(filePath);
		const schemaFiles = await glob('*.dto.ts', { cwd: mapperDir, absolute: true });
		const schemaFilePath = schemaFiles[0] || '';

		// Extract exported functions
		ts.forEachChild(sourceFile, (node) => {
			if (
				ts.isFunctionDeclaration(node) &&
				node.modifiers?.some((m) => m.kind === ts.SyntaxKind.ExportKeyword) &&
				node.name
			) {
				mapperFunctions.push(node.name.text);
			}

			if (ts.isVariableStatement(node) && node.modifiers?.some((m) => m.kind === ts.SyntaxKind.ExportKeyword)) {
				node.declarationList.declarations.forEach((decl) => {
					if (ts.isIdentifier(decl.name) && decl.initializer) {
						if (ts.isArrowFunction(decl.initializer)) {
							mapperFunctions.push(decl.name.text);
						}
					}
				});
			}
		});

		// Extract schema names from schema file if exists
		if (schemaFilePath && fs.existsSync(schemaFilePath)) {
			const schemaContent = fs.readFileSync(schemaFilePath, 'utf-8');
			const schemaSource = ts.createSourceFile(schemaFilePath, schemaContent, ts.ScriptTarget.Latest, true);

			ts.forEachChild(schemaSource, (node) => {
				if (
					ts.isVariableStatement(node) &&
					node.modifiers?.some((m) => m.kind === ts.SyntaxKind.ExportKeyword)
				) {
					node.declarationList.declarations.forEach((decl) => {
						if (ts.isIdentifier(decl.name) && decl.name.text.endsWith('Schema')) {
							schemas.push(decl.name.text);
						}
					});
				}
			});
		}

		mappers.push({
			model,
			mapperFunctions,
			mapperFilePath: filePath,
			schemaFilePath,
			schemas,
		});
	}

	return mappers;
}

async function generateIntegrationTests(daoFunctions: DAOFunction[], mappers: MapperInfo[]) {
	// Ensure output directory exists
	if (!fs.existsSync(OUTPUT_DIR)) {
		fs.mkdirSync(OUTPUT_DIR, { recursive: true });
	}

	// Group DAO functions by model
	const daoByModel = new Map<string, DAOFunction[]>();
	for (const fn of daoFunctions) {
		const existing = daoByModel.get(fn.model) || [];
		existing.push(fn);
		daoByModel.set(fn.model, existing);
	}

	// Generate test file per model
	for (const [model, daos] of daoByModel.entries()) {
		const mapper = mappers.find((m) => m.model.toLowerCase() === model.toLowerCase());
		if (!mapper) {
			console.warn(`⚠️ No mapper found for model: ${model}`);
			continue;
		}

		const testContent = generateModelTestFile(model, daos, mapper);
		const outputPath = path.join(OUTPUT_DIR, `${model.toLowerCase()}.test.ts`);
		fs.writeFileSync(outputPath, testContent, 'utf-8');
		console.log(`✅ Generated ${path.relative(process.cwd(), outputPath)}`);
	}
}

function generateModelTestFile(model: string, daoFunctions: DAOFunction[], mapper: MapperInfo): string {
	const prismaModel = getPrismaModelName(model);

	return `/**
 * Auto-generated integration tests for ${model} DAO → Mapper flow
 * Generated: ${new Date().toISOString()}
 */

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

describe('${model} DAO → Mapper Integration', () => {
	afterAll(async () => {
		await prisma.$disconnect();
	});

${daoFunctions
	.map(
		(dao) => `
	describe('${dao.name}', () => {
		it('should map DAO result through mapper and validate with Zod', async () => {
			const { ${dao.name} } = await import('../../dao/${model}');
			
			// Find corresponding mapper
			${generateMapperImport(dao, mapper)}
			
			// Get test data from DB
			const testData = await prisma.${prismaModel}.findFirst();
			if (!testData) {
				console.warn('⚠️ No ${model} data in DB, skipping test');
				return;
			}

			// Call DAO function (adjust parameters as needed)
			${generateDAOCall(dao, prismaModel)}
			expect(daoResult).toBeDefined();

			// Map the result
			let mapped: any;
			expect(() => {
				mapped = ${getMapperFunctionName(dao, mapper)}(daoResult);
			}).not.toThrow();
			expect(mapped).toBeDefined();

			// Validate with Zod schema
			${generateSchemaValidation(dao, mapper)}
		});
	});
`
	)
	.join('\n')}
});
`;
}

function getPrismaModelName(model: string): string {
	// Convert model name to Prisma model name (usually lowercase with underscores)
	// Business → business
	// BusinessUser → business_users
	const modelMap: Record<string, string> = {
		Business: 'business',
		User: 'users',
		BusinessUser: 'business_users',
		Driver: 'drivers',
		Vehicle: 'vehicles',
		DeliveryOrder: 'delivery_order',
		TaxiOrder: 'taxi_order',
		// Add more as needed
	};

	return modelMap[model] || model.toLowerCase();
}

function generateMapperImport(dao: DAOFunction, mapper: MapperInfo): string {
	// Try to match DAO function to mapper function
	const mapperFunc = findMatchingMapper(dao.name, mapper.mapperFunctions);
	const schema = findMatchingSchema(dao.name, mapper.schemas);

	if (!mapperFunc) {
		return `// TODO: Find matching mapper for ${dao.name}`;
	}

	const mapperPath = path.relative(OUTPUT_DIR, mapper.mapperFilePath).replace(/\\/g, '/').replace(/\.ts$/, '');
	const schemaPath = path.relative(OUTPUT_DIR, mapper.schemaFilePath).replace(/\\/g, '/').replace(/\.ts$/, '');

	return `const { ${mapperFunc} } = await import('${mapperPath}');
			${schema ? `const { ${schema} } = await import('${schemaPath}');` : '// TODO: Find matching schema'}`;
}

function generateDAOCall(dao: DAOFunction, prismaModel: string): string {
	// Detect function signature and generate appropriate call
	const lowerName = dao.name.toLowerCase();

	if (lowerName.includes('byid') || lowerName.includes('getone')) {
		return `const daoResult = await ${dao.name}(testData.${getIdField(prismaModel)});`;
	} else if (lowerName.includes('getall') || lowerName.includes('list')) {
		return `const daoResult = await ${dao.name}();
			// Use first result for testing
			const firstResult = Array.isArray(daoResult) ? daoResult[0] : daoResult;`;
	} else {
		return `// TODO: Adjust parameters for ${dao.name}
			const daoResult = await ${dao.name}(/* add params */);`;
	}
}

function getIdField(prismaModel: string): string {
	// Map Prisma model to ID field
	const idMap: Record<string, string> = {
		business: 'business_id',
		users: 'users_id',
		business_users: 'business_users_id',
		drivers: 'drivers_id',
		vehicles: 'vehicles_id',
		delivery_order: 'delivery_order_id',
		taxi_order: 'taxi_order_id',
	};

	return idMap[prismaModel] || `${prismaModel}_id`;
}

function findMatchingMapper(daoName: string, mappers: string[]): string | null {
	// Match patterns:
	// getBusinessById → toBusinessResponse
	// getAllBusinesses → toBusinessResponse
	// getBusinessWithModules → toBusinessWithModulesResponse

	const normalized = daoName.toLowerCase().replace(/^(get|fetch|find)/, '');

	for (const mapper of mappers) {
		const mapperNorm = mapper
			.toLowerCase()
			.replace(/^to/, '')
			.replace(/response$/, '');
		if (normalized.includes(mapperNorm) || mapperNorm.includes(normalized)) {
			return mapper;
		}
	}

	// Default: find first toXxxResponse mapper
	return mappers.find((m) => m.startsWith('to') && m.includes('Response')) || null;
}

function findMatchingSchema(daoName: string, schemas: string[]): string | null {
	const mapper = daoName.replace(/^(get|fetch|find)/, 'to');
	for (const schema of schemas) {
		if (mapper.toLowerCase().includes(schema.toLowerCase().replace('schema', ''))) {
			return schema;
		}
	}

	return schemas.find((s) => s.includes('Response')) || null;
}

function getMapperFunctionName(dao: DAOFunction, mapper: MapperInfo): string {
	return findMatchingMapper(dao.name, mapper.mapperFunctions) || 'toResponse';
}

function generateSchemaValidation(dao: DAOFunction, mapper: MapperInfo): string {
	const schema = findMatchingSchema(dao.name, mapper.schemas);

	if (!schema) {
		return `// TODO: Add Zod schema validation`;
	}

	return `const validated = ${schema}.parse(mapped);
			expect(validated).toBeDefined();`;
}

main().catch(console.error);
