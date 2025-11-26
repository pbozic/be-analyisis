#!/usr/bin/env tsx

/**
 * Script to identify and fix circular dependencies in DTO schemas
 * by wrapping external schema references in z.lazy()
 */

import * as fs from 'fs';
import * as path from 'path';

function findDtoFiles(dir: string, fileList: string[] = []): string[] {
	const files = fs.readdirSync(dir);

	for (const file of files) {
		const filePath = path.join(dir, file);
		const stat = fs.statSync(filePath);

		if (stat.isDirectory() && file !== 'node_modules') {
			findDtoFiles(filePath, fileList);
		} else if (file.endsWith('.dto.ts') && file !== 'index.ts') {
			fileList.push(filePath);
		}
	}

	return fileList;
}

const DTO_DIR = path.join(process.cwd(), 'schemas', 'dto');

interface SchemaImport {
	schemaName: string;
	importPath: string | undefined;
	fromModel: string | undefined;
}

interface FileAnalysis {
	filePath: string;
	imports: SchemaImport[];
	usesExternalSchemas: boolean;
	needsLazy: string[]; // Schema names that need z.lazy()
}

async function analyzeFile(filePath: string): Promise<FileAnalysis> {
	const content = fs.readFileSync(filePath, 'utf8');
	const imports: SchemaImport[] = [];
	const needsLazy: string[] = [];

	// Extract model name from path (e.g., schemas/dto/User/user.dto.ts → User)
	const modelDir = path.dirname(filePath);
	const currentModel = path.basename(modelDir);

	// Find imports of schemas from other models
	const importRegex = /import\s+{([^}]+)}\s+from\s+['"]\.\.\/([^'"]+)['"]/g;
	let match;

	while ((match = importRegex.exec(content)) !== null) {
		const importedItems = match[1]?.split(',').map((s) => s.trim()) || [];
		const importPath = match[2];
		if (!importPath) continue;
		const fromModel = importPath.split('/')[0];

		// Filter for Schema imports (not types)
		const schemaImports = importedItems.filter(
			(item) => item.endsWith('Schema') && !item.startsWith('type ') && fromModel !== currentModel // Exclude same-model imports
		);

		for (const schemaName of schemaImports) {
			imports.push({ schemaName, importPath, fromModel });
		}
	}

	// Find usages of imported schemas that might need z.lazy()
	for (const imp of imports) {
		// Look for direct usage without z.lazy()
		// Pattern: schemaName.nullable(), schemaName.optional(), z.array(schemaName)
		const directUsageRegex = new RegExp(
			`(?<!z\\.lazy\\(\\(\\)\\s*=>\\s*)${imp.schemaName}\\s*(?:\\.nullable\\(\\)|\\.optional\\(\\)|\\)(?=\\s*[,;]))`,
			'g'
		);

		if (directUsageRegex.test(content)) {
			needsLazy.push(imp.schemaName);
		}
	}

	return {
		filePath,
		imports,
		usesExternalSchemas: imports.length > 0,
		needsLazy: [...new Set(needsLazy)],
	};
}

async function main() {
	console.log('🔍 Analyzing DTO files for circular dependencies...\n');

	// Find all .dto.ts files
	const dtoFiles = findDtoFiles(DTO_DIR);

	console.log(`Found ${dtoFiles.length} DTO files\n`);

	const analyses: FileAnalysis[] = [];

	for (const file of dtoFiles) {
		const analysis = await analyzeFile(file);
		if (analysis.needsLazy.length > 0) {
			analyses.push(analysis);
		}
	}

	console.log(`\n📊 Files with circular dependency risks: ${analyses.length}\n`);

	// Group by model
	const byModel = new Map<string, FileAnalysis[]>();
	for (const analysis of analyses) {
		const modelDir = path.basename(path.dirname(analysis.filePath));
		if (!byModel.has(modelDir)) {
			byModel.set(modelDir, []);
		}
		byModel.get(modelDir)!.push(analysis);
	}

	// Report findings
	for (const [model, files] of byModel.entries()) {
		console.log(`\n📁 ${model}/`);
		for (const file of files) {
			const fileName = path.basename(file.filePath);
			console.log(`  ${fileName}`);
			console.log(`    Needs z.lazy() for: ${file.needsLazy.join(', ')}`);
		}
	}

	console.log('\n\n💡 To fix these issues:');
	console.log('   1. Wrap external schema references in z.lazy(() => SchemaName)');
	console.log('   2. Example: CategoryRefSchema.nullable() → z.lazy(() => CategoryRefSchema).nullable()');
	console.log('   3. Apply to Response schemas that embed other model schemas');
}

main().catch(console.error);
