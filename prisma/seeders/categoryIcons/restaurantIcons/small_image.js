// resize-images.js
import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const __dirname = path.resolve();
const folder = __dirname;

async function processImages() {
	const files = fs.readdirSync(folder);

	for (const file of files) {
		const ext = path.extname(file).toLowerCase();
		if (!['.jpg', '.jpeg', '.png', '.webp'].includes(ext)) continue;

		const name = path.basename(file, ext);
		const originalBackup = path.join(folder, `${name}_org${ext}`);
		const filePath = path.join(folder, file);

		// Skip if we already created a backup
		if (!fs.existsSync(originalBackup)) {
			fs.copyFileSync(filePath, originalBackup);
			console.log(`Backup created: ${originalBackup}`);
		}

		// Resize and overwrite with original filename
		await sharp(originalBackup).resize(90, 90).toFile(filePath);

		console.log(`Resized: ${file}`);
	}
}

processImages()
	.then(() => console.log('✅ Done!'))
	.catch((err) => console.error('❌ Error:', err));
