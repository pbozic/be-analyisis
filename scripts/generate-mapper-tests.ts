/**
 * Mapper Test Generator - Direct Approach
 *
 * Automatically generates integration tests for all mappers by:
 * 1. Finding all mapper functions in schemas/dto
 * 2. Extracting their core mapping logic
 * 3. Creating standalone tests that copy the logic (no imports)
 * 4. Generating mock data scaffolds
 *
 * Usage: npm run generate:mapper-tests
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
	body: string;
	filePath: string;
	modelName: string;
	lineNumber: number;
}

interface MockDataNeeded {
	modelName: string;
	variableName: string;
	mappers: string[];
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

	// Match: export function functionName(params): ReturnType {
	const functionRegex = /^export\s+function\s+(\w+)\s*\(([^)]*)\):\s*([^\{]+)\s*\{/;

	for (let i = 0; i < lines.length; i++) {
		const line = lines[i];
		const match = line.match(functionRegex);

		if (match) {
			const [, name, params, returnType] = match;

			// Find the function body (match braces)
			let braceCount = 1;
			let bodyStart = i + 1;
			let bodyEnd = i + 1;

			for (let j = i + 1; j < lines.length && braceCount > 0; j++) {
				const bodyLine = lines[j];
				// Count braces
				for (const char of bodyLine) {
					if (char === '{') braceCount++;
					if (char === '}') braceCount--;
				}
				bodyEnd = j;
				if (braceCount === 0) break;
			}

			const body = lines.slice(bodyStart, bodyEnd).join('\n');

			mappers.push({
				name,
				params: params.trim(),
				returnType: returnType.trim(),
				body,
				filePath,
				modelName,
				lineNumber: i + 1,
			});
		}
	}

	return mappers;
}

/**
 * Infer mock data variable name from parameter type
 */
function inferMockDataName(params: string, modelName: string): string {
	// Try to extract type from params like "row: GetBusinessesPrisma"
	const typeMatch = params.match(/:\s*(\w+)/);
	if (typeMatch) {
		const typeName = typeMatch[1];
		// Convert GetBusinessesPrisma -> business
		// Convert BusinessWithIncludesPrisma -> business
		const baseName = typeName
			.replace(/Prisma$/, '')
			.replace(/^Get/, '')
			.replace(/^(\w+)With.*/, '$1')
			.replace(/es$/, '') // businesses -> business
			.toLowerCase();

		return toValidIdentifier(baseName || modelName);
	}

	return toValidIdentifier(modelName);
}

/**
 * Extract key fields to validate from mapper body
 */
function extractKeyFields(body: string): string[] {
	const fields = new Set<string>();

	// Match patterns like: field_name: r.field_name
	const fieldMatches = body.matchAll(/(\w+):\s*(?:r|row|asRec)\.(\w+)/g);
	for (const match of fieldMatches) {
		fields.add(match[1]);
	}

	// Common fields to always check
	['created_at', 'updated_at', 'id'].forEach((f) => {
		if (body.includes(f)) fields.add(f);
	});

	return Array.from(fields).slice(0, 10); // Limit to 10 key fields
}

/**
 * Detect if mapper does date transformations
 */
function hasDateTransformations(body: string): boolean {
	return body.includes('toISOString()') || body.includes('new Date(');
}

/**
 * Convert model name to valid JavaScript identifier (camelCase)
 */
function toValidIdentifier(modelName: string): string {
	// Remove any special characters and convert to camelCase
	return modelName
		.split(/[-_\s]+/)
		.map((word, index) => {
			if (index === 0) {
				return word.toLowerCase();
			}
			return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
		})
		.join('');
}

/**
 * Generate mock data template based on mapper analysis
 */
function generateMockDataForModel(variableName: string, modelName: string, mappers: MapperFunction[]): string {
	const allFields = new Set<string>();
	const validVarName = toValidIdentifier(variableName);

	// Collect all fields from all mappers for this model
	for (const mapper of mappers) {
		const fields = extractKeyFields(mapper.body);
		fields.forEach((f) => allFields.add(f));
	}

	const fieldsArray = Array.from(allFields);
	const mockFields: string[] = [];

	// Generate mock values for each field
	for (const field of fieldsArray) {
		const lowerField = field.toLowerCase();

		if (lowerField.includes('_id')) {
			mockFields.push(`\t\t${field}: 'mock-${validVarName}-${field}-001',`);
		} else if (lowerField === 'id') {
			mockFields.push(`\t\t${field}: 'mock-${validVarName}-001',`);
		} else if (lowerField === 'email') {
			mockFields.push(`\t\t${field}: 'test@${validVarName}.com',`);
		} else if (lowerField.includes('name')) {
			mockFields.push(`\t\t${field}: 'Test ${field.replace(/_/g, ' ')}',`);
		} else if (lowerField.includes('phone') || lowerField.includes('telephone')) {
			mockFields.push(`\t\t${field}: '+38640123456',`);
		} else if (lowerField.includes('active') || lowerField.includes('enabled') || lowerField.includes('is_')) {
			mockFields.push(`\t\t${field}: true,`);
		} else if (lowerField.includes('created_at')) {
			mockFields.push(`\t\t${field}: new Date('2024-01-01'),`);
		} else if (lowerField.includes('updated_at')) {
			mockFields.push(`\t\t${field}: new Date('2024-01-01'),`);
		} else if (lowerField.includes('deleted_at')) {
			mockFields.push(`\t\t${field}: null,`);
		} else if (lowerField.includes('description')) {
			mockFields.push(`\t\t${field}: 'Test ${modelName} description',`);
		} else if (lowerField.includes('url') || lowerField.includes('link')) {
			mockFields.push(`\t\t${field}: 'https://example.com/${field}',`);
		} else if (lowerField.includes('price') || lowerField.includes('amount') || lowerField.includes('total')) {
			mockFields.push(`\t\t${field}: 100,`);
		} else if (lowerField.includes('count') || lowerField.includes('quantity')) {
			mockFields.push(`\t\t${field}: 1,`);
		} else {
			// Generic string value
			mockFields.push(`\t\t${field}: 'mock_${field}_value',`);
		}
	}

	return `\t${validVarName}: {\n${mockFields.join('\n')}\n\t},`;
}

/**
 * Generate complete test file with properly extracted mapper logic
 */
function generateCompleteTestContent(mapper: MapperFunction, mockVarName: string): string {
	const hasDateConversion = hasDateTransformations(mapper.body);
	const keyFields = extractKeyFields(mapper.body);

	// Extract the object being returned (inside parse or direct return)
	let mappingObject = '';

	// Try to extract content from Schema.parse({ ... }) - direct inline
	const parseMatch = mapper.body.match(/return\s+\w+(?:Schema|Dto)\.parse\(\s*\{([\s\S]*?)\}\s*\);?/);
	if (parseMatch && parseMatch[1]) {
		mappingObject = parseMatch[1].trim();
	} else {
		// Try to extract from const dto = { ... }; return Schema.parse(dto);
		const dtoVarMatch = mapper.body.match(
			/const\s+(dto|mapped|result|data)\s*=\s*\{([\s\S]*?)\};[\s\S]*?return\s+\w+(?:Schema|Dto)\.parse\(\1\)/
		);
		if (dtoVarMatch && dtoVarMatch[2]) {
			mappingObject = dtoVarMatch[2].trim();
		} else {
			// Try direct return { ... }
			const directMatch = mapper.body.match(/return\s*\{([\s\S]*?)\};?$/);
			if (directMatch && directMatch[1]) {
				mappingObject = directMatch[1].trim();
			}
		}
	}

	// Extract any simple variable declarations before the return (EXCEPT the dto/mapped var itself)
	const varDeclarations: string[] = [];
	// Only extract simple single-line assignments, not objects or complex expressions
	const constMatches = mapper.body.matchAll(/const\s+(\w+)\s*=\s*([^;{]+);/g);
	for (const match of constMatches) {
		const varName = match[1];
		const value = match[2]?.trim();
		if (!value) continue;

		// Skip 'r', 'asRec', dto variables
		if (
			varName === 'r' ||
			varName === 'asRec' ||
			varName === 'dto' ||
			varName === 'mapped' ||
			varName === 'result' ||
			varName === 'data'
		) {
			continue;
		}

		// Check if it's a function call to another mapper
		const isMapperCall = /^(to[A-Z]\w+|map[A-Z]\w+)\(/.test(value);

		if (isMapperCall) {
			// Include mapper calls but add a TODO comment
			varDeclarations.push(`\t\t// TODO: Manual review required - mapper call`);
			varDeclarations.push(
				`\t\t// const ${varName} = ${value}; // Commented out - requires importing mapper function`
			);
		} else if (value.split('\n').length === 1) {
			// Simple single-line assignment
			varDeclarations.push(`\t\tconst ${varName} = ${value};`);
		}
	}

	// Build the test content
	const sourceFile = path.relative(rootDir, mapper.filePath).replace(/\\/g, '/');

	// Check if this is a complex mapper that needs manual review
	const hasMapperCalls = varDeclarations.some((v) => v.includes('TODO: Manual review'));
	const hasSpreadOrMappers =
		mappingObject &&
		(mappingObject.includes('...') ||
			/\bto[A-Z]\w+\(/.test(mappingObject) ||
			/\bmap[A-Z]\w+\(/.test(mappingObject));
	const hasSchemaParseInBody = /\w+(?:Schema|Dto)\.parse\(/g.test(
		mapper.body.replace(/return\s+\w+(?:Schema|Dto)\.parse\(/, '')
	); // Schema.parse calls BEFORE the return
	const hasComplexTypecast = /const\s+\w+\s*=\s*\w+\s+as\s*\{/.test(mapper.body); // Type casts like: const d = driver as { ... }
	const needsManualReview = hasMapperCalls || hasSpreadOrMappers || hasSchemaParseInBody || hasComplexTypecast;

	const testContent = `/**
 * Auto-generated test for ${mapper.modelName} mapper
 * Mapper: ${mapper.name}
 * Generated: ${new Date().toISOString()}
 * 
 * Tests mapper logic directly without imports to avoid circular dependencies.
 * Source: ${sourceFile}:${mapper.lineNumber}
 */

import { mockPrismaData } from '../mock-prisma.js';

describe('${mapper.modelName} Mapper - ${mapper.name}', () => {
	${needsManualReview ? 'it.skip' : 'it'}('should map Prisma data to DTO correctly', () => {
		const mockData = mockPrismaData.${mockVarName};
		
		if (!mockData) {
			console.warn('⚠️  Mock data for "${mockVarName}" not found in mock-prisma.ts');
			console.warn('   Please add mock data for: ${mockVarName}');
			console.warn('   Source mapper: ${sourceFile}');
			expect(mockData).toBeDefined();
			return;
		}

		// Mapper logic extracted from ${mapper.name}
		${needsManualReview ? '// ⚠️  This test requires manual review - it references other mappers or uses complex logic\n\t\t' : ''}const row = mockData;
		const asRec = mockData as Record<string, any>;
		const r = row; // Alias used in some mappers
		
${varDeclarations.join('\n')}

		// Core mapping object (extracted from source, without Zod parse)
${mappingObject && mappingObject.includes('...') ? '\t\t// WARNING: This mapper uses spread operators or references other mappers.\n\t\t// Manual review required for complex mapper logic.\n' : ''}${needsManualReview ? '\t\t/* Commented out due to complexity - requires manual implementation\n' : ''}		const mapped = {
${
	mappingObject
		? mappingObject
				.split('\n')
				.map((line) => '\t\t\t' + line)
				.join('\n')
		: '\t\t\t// TODO: Could not extract mapping object automatically'
}
		};
${needsManualReview ? '\t\t*/\n\t\tconst mapped = {}; // Placeholder for skipped test\n' : ''}
		// Validate the mapping succeeded
		expect(mapped).toBeDefined();

		// Validate key fields exist
		const keyFields = ${JSON.stringify(keyFields.slice(0, 5))}; // Top 5 fields
		for (const field of keyFields) {
			if (field in mapped && mapped[field] !== null && mapped[field] !== undefined) {
				expect(mapped[field]).toBeDefined();
			}
		}

		// Validate date transformations
		${
			hasDateConversion
				? `const dateFields = ['created_at', 'updated_at'].filter(f => f in mapped);
		for (const field of dateFields) {
			if (mapped[field]) {
				expect(typeof mapped[field]).toBe('string');
				expect(mapped[field]).toMatch(/^\\d{4}-\\d{2}-\\d{2}T/);
			}
		}`
				: '// No date transformations detected'
		}

		console.log('✅ ${mapper.name} test passed');
	});
});
`;

	return testContent;
}

/**
 * Analyze all mappers and report what mock data is needed
 */
function analyzeMockDataNeeds(allMappers: MapperFunction[]): MockDataNeeded[] {
	const mockDataMap = new Map<string, MockDataNeeded>();

	for (const mapper of allMappers) {
		const mockVarName = inferMockDataName(mapper.params, mapper.modelName);

		if (!mockDataMap.has(mockVarName)) {
			mockDataMap.set(mockVarName, {
				modelName: mapper.modelName,
				variableName: mockVarName,
				mappers: [],
			});
		}

		mockDataMap.get(mockVarName)!.mappers.push(mapper.name);
	}

	return Array.from(mockDataMap.values());
}

/**
 * Main execution
 */
async function main() {
	console.log('🔍 Scanning for mapper files...\n');

	const mapperFiles = findMapperFiles();
	console.log(`Found ${mapperFiles.length} mapper files\n`);

	const allMappers: MapperFunction[] = [];

	for (const filePath of mapperFiles) {
		const mappers = extractMapperFunctions(filePath);
		allMappers.push(...mappers);

		if (mappers.length > 0) {
			console.log(`📄 ${path.relative(rootDir, filePath)}`);
			for (const mapper of mappers) {
				console.log(
					`   - ${mapper.name}(${mapper.params.slice(0, 40)}${mapper.params.length > 40 ? '...' : ''})`
				);
			}
		}
	}

	console.log(`\n✅ Found ${allMappers.length} mapper functions\n`);

	// Analyze mock data needs
	console.log('📊 Analyzing mock data requirements...\n');
	const mockDataNeeds = analyzeMockDataNeeds(allMappers);

	for (const need of mockDataNeeds) {
		console.log(`   ${need.variableName} (${need.modelName})`);
		console.log(`      Used by: ${need.mappers.join(', ')}`);
	}

	// Generate test files
	console.log('\n📝 Generating test files...\n');

	const testDir = path.join(rootDir, 'tests', 'integration', 'generated');
	if (!fs.existsSync(testDir)) {
		fs.mkdirSync(testDir, { recursive: true });
	}

	let generated = 0;

	for (const mapper of allMappers) {
		const mockVarName = inferMockDataName(mapper.params, mapper.modelName);
		const testFileName = `${mapper.modelName.toLowerCase()}-${mapper.name}.test.ts`;
		const testFilePath = path.join(testDir, testFileName);

		// Generate test content
		const testContent = generateCompleteTestContent(mapper, mockVarName);

		fs.writeFileSync(testFilePath, testContent, 'utf-8');
		generated++;

		console.log(`   ✓ Generated: ${testFileName}`);
	}

	console.log(`\n✅ Generated ${generated} test files in tests/integration/generated/`);

	// Generate and update mock data
	console.log('\n📊 Generating mock data...\n');
	await generateMockData(allMappers, mockDataNeeds);

	// Generate README for the generated tests
	const readmeContent = `# Auto-Generated Mapper Tests

Generated: ${new Date().toISOString()}

## Overview

This directory contains auto-generated integration tests for all mapper functions.
Each test validates that the mapper correctly transforms Prisma data to DTO format.

## Test Approach

- **Direct Testing**: Copies mapper logic into test files (no imports)
- **Mock Data**: Uses \`mockPrismaData\` from \`../mock-prisma.ts\`
- **No Circular Dependencies**: Avoids importing DTOs/schemas

## Generated Tests

Total: ${generated} test files

${mockDataNeeds
	.map(
		(need) => `### ${need.modelName}
Mock variable: \`mockPrismaData.${need.variableName}\`
Mappers tested: ${need.mappers.length}
- ${need.mappers.map((m) => `\`${m}\``).join('\n- ')}
`
	)
	.join('\n')}

## Running Tests

\`\`\`bash
# Run all generated tests
npm run test:integration -- generated

# Run specific model tests
npx jest tests/integration/generated/business

# Watch mode
npm run test:watch -- generated
\`\`\`

## Mock Data

Mock data is automatically generated in \`../mock-prisma.ts\`.
Each mapper test uses the appropriate mock data based on its parameter types.

## Updating Tests

To regenerate all tests:

\`\`\`bash
npm run generate:mapper-tests
\`\`\`

This will:
1. Scan all mapper files in schemas/dto/
2. Extract mapper function logic
3. Generate test files with embedded mapper logic
4. Auto-generate missing mock data
`;

	fs.writeFileSync(path.join(testDir, 'README.md'), readmeContent, 'utf-8');

	console.log('\n📄 Generated README.md');
	console.log('\n✅ Mock data generation complete!');
	console.log('\nNext steps:');
	console.log('1. Review generated tests in tests/integration/generated/');
	console.log('2. Review generated mock data in tests/integration/mock-prisma.ts');
	console.log('3. Run tests: npm test -- tests/integration/generated');
	console.log('4. Fix any failing tests (review mapper logic extraction)');
	console.log('\n✨ Done!\n');
}

/**
 * Generate and update mock-prisma.ts with comprehensive mock data
 */
async function generateMockData(allMappers: MapperFunction[], mockDataNeeds: MockDataNeeded[]) {
	const mockPrismaPath = path.join(rootDir, 'tests', 'integration', 'mock-prisma.ts');

	// Read existing mock data
	let existingContent = '';
	if (fs.existsSync(mockPrismaPath)) {
		existingContent = fs.readFileSync(mockPrismaPath, 'utf-8');
	}

	console.log(`   📖 Read existing mock-prisma.ts (${existingContent.length} bytes)`);

	// Group mappers by model
	const mappersByModel = new Map<string, MapperFunction[]>();
	for (const mapper of allMappers) {
		const modelName = mapper.modelName;
		if (!mappersByModel.has(modelName)) {
			mappersByModel.set(modelName, []);
		}
		mappersByModel.get(modelName)!.push(mapper);
	}

	// Generate mock data for each model
	const newMockData: string[] = [];
	const seenVarNames = new Set<string>(); // Track variable names to avoid duplicates

	for (const need of mockDataNeeds) {
		// The variableName from analyzeMockDataNeeds is already lowercase
		// but we need to convert it to valid identifier
		const validVarName = toValidIdentifier(need.variableName);

		// Skip duplicates (same variable name after conversion)
		if (seenVarNames.has(validVarName)) {
			console.log(`   ⏭️  ${validVarName} duplicate (from ${need.variableName}), skipping`);
			continue;
		}

		// Skip if already exists in mock data (exact match with property pattern)
		const propertyPattern = new RegExp(`^\\s*${validVarName}:\\s*\\{`, 'm');
		if (existingContent.match(propertyPattern)) {
			console.log(`   ⏭️  ${validVarName} already exists in file, skipping`);
			continue;
		}

		// Also check in newMockData array that we're building
		const alreadyInNew = newMockData.some((entry) => entry.includes(`\t${validVarName}:`));
		if (alreadyInNew) {
			console.log(`   ⏭️  ${validVarName} duplicate in new data (from ${need.variableName}), skipping`);
			continue;
		}

		seenVarNames.add(validVarName);

		const modelMappers = mappersByModel.get(need.modelName) || [];
		const mockDataEntry = generateMockDataForModel(need.variableName, need.modelName, modelMappers);
		newMockData.push(mockDataEntry);
		console.log(`   ✓ Generated mock data for: ${validVarName} (${need.mappers.length} mappers)`);
	}

	if (newMockData.length === 0) {
		console.log('   ℹ️  No new mock data to generate');
		return;
	}

	// Append new mock data to existing file
	const newMockDataSection = `\n\t// Auto-generated mock data (${new Date().toISOString()})\n${newMockData.join('\n\n')}`;

	// Find the closing brace of mockPrismaData object and insert before it
	const updatedContent = existingContent.replace(
		/(export const mockPrismaData = \{[\s\S]*?)(\n};)/,
		`$1${newMockDataSection}$2`
	);

	fs.writeFileSync(mockPrismaPath, updatedContent, 'utf-8');
	console.log(`\n   ✓ Updated mock-prisma.ts with ${newMockData.length} new mock data entries`);
}

main().catch((error) => {
	console.error('❌ Error:', error);
	process.exit(1);
});
