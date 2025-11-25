import * as fs from 'fs';
import * as path from 'path';

interface MapperInfo {
	file: string;
	name: string;
	isListMapper: boolean;
	usedIn: string[];
}

const mapperFiles: MapperInfo[] = [];
const dtoDir = path.join(process.cwd(), 'schemas', 'dto');

// Find all mapper files
function findMapperFiles(dir: string) {
	const entries = fs.readdirSync(dir, { withFileTypes: true });

	for (const entry of entries) {
		const fullPath = path.join(dir, entry.name);

		if (entry.isDirectory()) {
			findMapperFiles(fullPath);
		} else if (entry.name.endsWith('.mappers.ts')) {
			const content = fs.readFileSync(fullPath, 'utf-8');
			const relativePath = path.relative(process.cwd(), fullPath);

			// Find all exported functions
			const functionMatches = content.matchAll(/export\s+(?:async\s+)?function\s+(\w+)/g);
			for (const match of functionMatches) {
				const funcName = match[1];
				const funcBody = extractFunctionBody(content, funcName);
				const isListMapper = isListMapperPattern(funcBody);

				mapperFiles.push({
					file: relativePath,
					name: funcName,
					isListMapper,
					usedIn: [],
				});
			}
		}
	}
}

function extractFunctionBody(content: string, funcName: string): string {
	const regex = new RegExp(`export\\s+(?:async\\s+)?function\\s+${funcName}[^{]*\\{([\\s\\S]*?)\\n\\s*\\}`, 'm');
	const match = content.match(regex);
	return match ? match[1] : '';
}

function isListMapperPattern(body: string): boolean {
	// Check if it's a simple list mapper: rows.map((r) => toXxxResponse(r)) or similar
	const patterns = [
		/\.map\s*\(\s*\([^)]*\)\s*=>\s*to\w+Response\s*\(/,
		/\.map\s*\(\s*\([^)]*\)\s*=>\s*to\w+\(/,
		/return\s+rows\.map/,
		/return\s+.*\.map/,
	];

	return patterns.some((pattern) => pattern.test(body)) && !body.includes('parse(') && !body.includes('Schema.parse');
}

// Check usage in non-test files
function checkUsage(mapperName: string): string[] {
	const usedIn: string[] = [];
	const excludeDirs = ['node_modules', '.git', 'schemas/dto', 'tests'];

	function searchDir(dir: string) {
		if (excludeDirs.some((exclude) => dir.includes(exclude))) return;

		const entries = fs.readdirSync(dir, { withFileTypes: true });

		for (const entry of entries) {
			const fullPath = path.join(dir, entry.name);

			if (entry.isDirectory()) {
				searchDir(fullPath);
			} else if (entry.name.endsWith('.ts') && !entry.name.endsWith('.test.ts')) {
				const content = fs.readFileSync(fullPath, 'utf-8');
				if (content.includes(mapperName)) {
					usedIn.push(path.relative(process.cwd(), fullPath));
				}
			}
		}
	}

	searchDir(process.cwd());
	return usedIn.filter((f) => !f.includes('.test.'));
}

findMapperFiles(dtoDir);

// Check usage for each mapper
for (const mapper of mapperFiles) {
	mapper.usedIn = checkUsage(mapper.name);
}

// Output results
console.log('=== LIST MAPPERS ===');
const listMappers = mapperFiles.filter((m) => m.isListMapper);
listMappers.forEach((m) => {
	console.log(`${m.name} (${m.file})`);
	console.log(`  Used in: ${m.usedIn.length > 0 ? m.usedIn.join(', ') : 'NOWHERE'}`);
});

console.log('\n=== UNUSED MAPPERS (not list mappers) ===');
const unusedMappers = mapperFiles.filter((m) => !m.isListMapper && m.usedIn.length === 0);
unusedMappers.forEach((m) => {
	console.log(`${m.name} (${m.file})`);
});

console.log('\n=== SUMMARY ===');
console.log(`Total mappers: ${mapperFiles.length}`);
console.log(`List mappers: ${listMappers.length}`);
console.log(`Unused list mappers: ${listMappers.filter((m) => m.usedIn.length === 0).length}`);
console.log(`Unused non-list mappers: ${unusedMappers.length}`);
