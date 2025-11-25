import * as fs from 'fs';
import * as path from 'path';

import { glob } from 'glob';

interface MapperInfo {
	file: string;
	name: string;
	isListMapper: boolean;
	usageCount: number;
	usageFiles: string[];
}

async function findMapperFiles(): Promise<string[]> {
	const mapperFiles = await glob('schemas/dto/**/*.mappers.ts', { cwd: process.cwd() });
	return mapperFiles;
}

function extractMappers(filePath: string): { name: string; isList: boolean }[] {
	const content = fs.readFileSync(filePath, 'utf-8');
	const mappers: { name: string; isList: boolean }[] = [];

	// Find all exported functions
	const functionRegex = /^export function (to\w+)\(/gm;
	let match;
	while ((match = functionRegex.exec(content)) !== null) {
		const funcName = match[1];
		// Check if it's a list mapper (simple map wrapper)
		const funcBody = content.substring(content.indexOf(match[0]));
		const funcEnd = funcBody.indexOf('\n}', funcBody.indexOf('{'));
		const funcContent = funcBody.substring(0, funcEnd);

		// Simple list mapper pattern: return rows.map(...) or return (rows || []).map(...)
		const isList =
			/return\s+(\(rows\s*\|\|\s*\[\]\)|rows)\.map\(/.test(funcContent) &&
			!funcContent.includes('parse(') &&
			!funcContent.includes('Schema.parse');

		mappers.push({ name: funcName, isList });
	}

	return mappers;
}

function findMapperUsage(mapperName: string, excludeTests: boolean = true): { count: number; files: string[] } {
	const searchPattern = new RegExp(`\\b${mapperName}\\b`, 'g');
	const files: string[] = [];
	let count = 0;

	// Search in all TypeScript files
	const allFiles = [
		...glob.sync('**/*.ts', { cwd: process.cwd(), ignore: ['node_modules/**', '**/*.test.ts'] }),
		...glob.sync('**/*.js', { cwd: process.cwd(), ignore: ['node_modules/**', '**/*.test.js'] }),
	];

	for (const file of allFiles) {
		if (excludeTests && (file.includes('.test.') || file.includes('__tests__'))) {
			continue;
		}

		try {
			const content = fs.readFileSync(file, 'utf-8');
			const matches = content.match(searchPattern);
			if (matches) {
				// Check if it's an actual usage (import or call), not just in comments
				const lines = content.split('\n');
				for (let i = 0; i < lines.length; i++) {
					const line = lines[i];
					if (searchPattern.test(line) && !line.trim().startsWith('//') && !line.trim().startsWith('*')) {
						if (
							line.includes('import') ||
							line.includes(mapperName + '(') ||
							line.includes(mapperName + ' ')
						) {
							files.push(file);
							count += matches.length;
							break;
						}
					}
				}
			}
		} catch (err) {
			// Skip files that can't be read
		}
	}

	return { count, files };
}

async function main() {
	const mapperFiles = await findMapperFiles();
	const mapperInfos: MapperInfo[] = [];

	for (const file of mapperFiles) {
		const mappers = extractMappers(file);
		for (const mapper of mappers) {
			const usage = findMapperUsage(mapper.name);
			mapperInfos.push({
				file,
				name: mapper.name,
				isListMapper: mapper.isList,
				usageCount: usage.count,
				usageFiles: usage.files,
			});
		}
	}

	// Sort by usage count
	mapperInfos.sort((a, b) => a.usageCount - b.usageCount);

	console.log('=== UNUSED MAPPERS (not used anywhere except tests) ===\n');
	const unused = mapperInfos.filter((m) => m.usageCount === 0);
	for (const mapper of unused) {
		console.log(`❌ ${mapper.name}`);
		console.log(`   File: ${mapper.file}`);
		console.log(`   Is List Mapper: ${mapper.isListMapper ? 'Yes' : 'No'}\n`);
	}

	console.log('\n=== LIST MAPPERS (simple array wrappers) ===\n');
	const listMappers = mapperInfos.filter((m) => m.isListMapper);
	for (const mapper of listMappers) {
		console.log(`${mapper.usageCount > 0 ? '✅' : '❌'} ${mapper.name}`);
		console.log(`   File: ${mapper.file}`);
		console.log(`   Used: ${mapper.usageCount} times`);
		if (mapper.usageFiles.length > 0) {
			console.log(
				`   Usage: ${mapper.usageFiles.slice(0, 3).join(', ')}${mapper.usageFiles.length > 3 ? '...' : ''}`
			);
		}
		console.log('');
	}

	// Summary
	console.log('\n=== SUMMARY ===');
	console.log(`Total mappers: ${mapperInfos.length}`);
	console.log(`Unused mappers: ${unused.length}`);
	console.log(`List mappers: ${listMappers.length}`);
	console.log(`List mappers that are unused: ${listMappers.filter((m) => m.usageCount === 0).length}`);
}

main().catch(console.error);
