const fs = require('fs');
const path = require('path');

// Find all mapper test files
function findMapperTestFiles(dir, fileList = []) {
	try {
		const files = fs.readdirSync(dir);

		files.forEach(file => {
			const filePath = path.join(dir, file);
			const stat = fs.statSync(filePath);

			if (stat.isDirectory()) {
				findMapperTestFiles(filePath, fileList);
			} else if (file.includes('.mappers.') && file.endsWith('.test.ts')) {
				fileList.push(filePath);
			}
		});
	} catch (err) {
		// Ignore errors
	}

	return fileList;
}

// Main function
function main() {
	const sourceDir = path.join(__dirname, 'schemas', 'dto');
	const destDir = path.join(__dirname, 'tests', 'mappers');

	console.log('Starting script...');
	console.log('__dirname:', __dirname);
	console.log('Source dir:', sourceDir);
	console.log('Dest dir:', destDir);

	if (!fs.existsSync(sourceDir)) {
		console.error('Source directory not found:', sourceDir);
		process.exit(1);
	}

	if (!fs.existsSync(path.join(__dirname, 'tests'))) {
		console.error('Tests directory not found');
		process.exit(1);
	}

	const testFiles = findMapperTestFiles(sourceDir);

	console.log(`Found ${testFiles.length} mapper test files to move`);

	if (testFiles.length === 0) {
		console.log('No files to move. They may have already been moved.');
		return;
	}

	console.log(`First file: ${testFiles[0]}`);

	let moved = 0;
	let errors = 0;

	testFiles.forEach(testFile => {
		try {
			// Calculate destination path
			const relativePath = path.relative(sourceDir, testFile);
			const destPath = path.join(destDir, relativePath);

			// Create destination directory
			const destDirPath = path.dirname(destPath);
			if (!fs.existsSync(destDirPath)) {
				fs.mkdirSync(destDirPath, { recursive: true });
			}

			// Copy file to destination (read and write to preserve content)
			const content = fs.readFileSync(testFile, 'utf8');
			fs.writeFileSync(destPath, content, 'utf8');

			// Delete original file
			fs.unlinkSync(testFile);

			moved++;
			if (moved % 10 === 0) {
				console.log(`  Moved ${moved}/${testFiles.length} files...`);
			}
		} catch (error) {
			errors++;
			console.error(`✗ Error moving ${testFile}:`, error.message);
		}
	});

	console.log(`\nDone! Moved ${moved} files to tests/mappers/, ${errors} errors`);
	console.log('Note: You will need to update the import paths manually.');
}

main();

