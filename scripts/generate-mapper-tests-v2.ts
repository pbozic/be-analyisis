/**
 * Mapper Test Generator V2 - Integration Test Approach
 *
 * Generates tests that:
 * 1. Import the actual mapper function
 * 2. Call it with mock Prisma data
 * 3. Validate the output matches the expected Zod schema
 *
 * This catches schema mismatches (like user_roles/business_users issues)
 */

import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.join(__dirname, '..');

interface MapperFunction {
	name: string;
	params: string;
	returnType: string;
	filePath: string;
	modelName: string;
	lineNumber: number;
	schemaName?: string; // e.g., "UserLoginResponseSchema"
}

/**
 * Find all mapper files
 */
function findMapperFiles(): string[] {
	const dtoDir = path.join(rootDir, 'schemas', 'dto');
	const mapperFiles: string[] = [];

	function walk(dir: string) {
		const files = fs.readdirSync(dir);
		for (const file of files) {
			const filePath = path.join(dir, file);
			const stat = fs.statSync(filePath);

			if (stat.isDirectory()) {
				walk(filePath);
			} else if (file.endsWith('.mappers.ts')) {
				mapperFiles.push(filePath);
			}
		}
	}

	walk(dtoDir);
	return mapperFiles;
}

/**
 * Extract mapper functions from a file
 */
function extractMapperFunctions(filePath: string): MapperFunction[] {
	const content = fs.readFileSync(filePath, 'utf-8');
	const lines = content.split('\n');
	const modelName = path.basename(path.dirname(filePath));
	const mappers: MapperFunction[] = [];

	const functionRegex = /^export\s+function\s+(\w+)\s*\(([^)]*)\):\s*([^\{]+)\s*\{/;

	for (let i = 0; i < lines.length; i++) {
		const line = lines[i];
		const match = line.match(functionRegex);

		if (match) {
			const [, name, params, returnType] = match;

			// Find schema name in body (look for .parse calls)
			let schemaName: string | undefined;
			for (let j = i + 1; j < Math.min(i + 200, lines.length); j++) {
				const schemaMatch = lines[j].match(/(\w+(?:Schema|Dto))\.parse\(/);
				if (schemaMatch) {
					schemaName = schemaMatch[1];
					break;
				}
			}

			mappers.push({
				name,
				params: params.trim(),
				returnType: returnType.trim(),
				filePath,
				modelName,
				lineNumber: i + 1,
				schemaName,
			});
		}
	}

	return mappers;
}

/**
 * Extract parameter type from mapper signature and convert to mock data key
 */
function extractParamType(params: string): string {
	// Example: "row: UserLoginPrisma" -> "UserLoginPrisma"
	// Example: "driver: unknown | null | undefined" -> "unknown"
	const match = params.match(/:\s*([^\s,|]+)/);
	const type = match ? match[1] : 'any';

	// Convert type to likely mock data key
	// UserLoginPrisma -> userlogin
	// VehicleDetailPrisma -> vehicledetail
	// Just lowercase and remove "Prisma" suffix
	return type.replace(/Prisma$/i, '').toLowerCase();
}

/**
 * Generate test file for a mapper
 */
function generateTestFile(mapper: MapperFunction): string {
	const sourceFile = path.relative(rootDir, mapper.filePath).replace(/\\/g, '/');
	const paramType = extractParamType(mapper.params);
	const paramName = mapper.params.split(':')[0]?.trim() || 'data';

	// Calculate relative path from test file location to mock-prisma.ts
	const testDir = path.dirname(mapper.filePath);
	const mockDataPath = path
		.relative(testDir, path.join(rootDir, 'tests', 'integration', 'mock-prisma.ts'))
		.replace(/\\/g, '/');

	// Schema import - relative to mapper file
	const schemaImport = mapper.schemaName ? findSchemaImportRelative(mapper) : '';

	return `/**
 * Integration test for ${mapper.modelName} mapper: ${mapper.name}
 * 
 * This test validates that the mapper correctly transforms Prisma data
 * and that the output matches the expected Zod schema.
 * 
 * Source: ${sourceFile}:${mapper.lineNumber}
 * Generated: ${new Date().toISOString()}
 */

import { describe, it, expect } from '@jest/globals';
import { ${mapper.name} } from './${path.basename(mapper.filePath, '.ts')}.js';
${mapper.schemaName ? `import { ${mapper.schemaName} } from '${schemaImport}';` : ''}
import { mockPrismaData } from '${mockDataPath.replace('.ts', '.js')}';

describe('${mapper.modelName} Mapper - ${mapper.name}', () => {
	it('should map Prisma data to DTO and validate against schema', () => {
		// Get mock data
		const mockData = mockPrismaData.${paramType.toLowerCase()}${paramType === 'unknown' ? ' || {}' : ''};
		
		if (!mockData) {
			console.warn('⚠️  Mock data for "${paramType}" not found');
			console.warn('   Add mock data to tests/integration/mock-prisma.ts');
			expect(mockData).toBeDefined();
			return;
		}

		// Call the actual mapper
		const result = ${mapper.name}(mockData as ${paramType});

		// Validate the result is defined
		expect(result).toBeDefined();
		${
			mapper.schemaName
				? `
		// Validate against Zod schema - this will catch mismatches
		// If this throws, there's a mismatch between mapper output and schema
		const validated = ${mapper.schemaName}.safeParse(result);
		
		if (!validated.success) {
			console.error('Schema validation failed for ${mapper.name}:');
			console.error(JSON.stringify(validated.error.format(), null, 2));
			expect(validated.success).toBe(true);
		}
		
		// If we got here, the mapper output matches the schema
		expect(validated.data).toEqual(result);
		`
				: `
		// No schema found - basic validation only
		expect(typeof result).toBe('object');
		`
		}
		console.log('✅ ${mapper.name} passed schema validation');
	});
});
`;
}

/**
 * Find the import path for a schema (relative to mapper file)
 */
function findSchemaImportRelative(mapper: MapperFunction): string {
	if (!mapper.schemaName) return '';

	const content = fs.readFileSync(mapper.filePath, 'utf-8');
	const importMatch = content.match(
		new RegExp(`import\\s+{[^}]*${mapper.schemaName}[^}]*}\\s+from\\s+['"](.*?)['"]`)
	);

	if (importMatch && importMatch[1]) {
		return importMatch[1].replace('.ts', '.js');
	}

	// Default: assume it's in index file in same directory
	return './index.js';
}

/**
 * Find the import path for a schema
 */
function findSchemaImport(mapper: MapperFunction): string {
	if (!mapper.schemaName) return '';

	const content = fs.readFileSync(mapper.filePath, 'utf-8');
	const importMatch = content.match(
		new RegExp(`import\\s+{[^}]*${mapper.schemaName}[^}]*}\\s+from\\s+['"](.*?)['"]`)
	);

	if (importMatch && importMatch[1]) {
		const importPath = importMatch[1];
		const mapperDir = path.dirname(mapper.filePath);
		const schemaPath = path.resolve(mapperDir, importPath);
		return path.relative(rootDir, schemaPath).replace(/\\/g, '/').replace('.ts', '.js');
	}

	// Default: assume it's in the same directory
	const mapperDir = path.dirname(mapper.filePath);
	return path.relative(rootDir, path.join(mapperDir, 'index.js')).replace(/\\/g, '/');
}

/**
 * Main execution
 */
function main() {
	console.log('🔍 Finding all mappers in schemas/dto/');

	const mapperFiles = findMapperFiles();
	console.log(`📁 Found ${mapperFiles.length} mapper files\n`);

	const allMappers: MapperFunction[] = [];
	for (const file of mapperFiles) {
		const mappers = extractMapperFunctions(file);
		allMappers.push(...mappers);
		console.log(`   ${path.relative(rootDir, file)}: ${mappers.length} mappers`);
	}

	console.log(`\n📊 Total mappers found: ${allMappers.length}\n`);

	console.log('✨ Generating test files next to mappers...\n');
	let generated = 0;

	for (const mapper of allMappers) {
		// Place test file next to the mapper file
		const mapperDir = path.dirname(mapper.filePath);
		const testFileName = `${path.basename(mapper.filePath, '.ts')}.${mapper.name}.test.ts`;
		const testFilePath = path.join(mapperDir, testFileName);
		const testContent = generateTestFile(mapper);

		fs.writeFileSync(testFilePath, testContent, 'utf-8');
		generated++;

		if (generated % 20 === 0) {
			console.log(`   Generated ${generated}/${allMappers.length} tests...`);
		}
	}

	console.log(`\n✅ Generated ${generated} test files (co-located with mappers)`);
	console.log(`\n📝 Next steps:`);
	console.log(`   1. Review mock data in tests/integration/mock-prisma.ts`);
	console.log(`   2. Run tests: npm test -- "schemas/dto/**/*.test.ts"`);
	console.log(`   3. Fix any schema validation errors`);
	console.log(`\n✨ Done!`);
}

main();
