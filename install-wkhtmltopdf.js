import os from 'os';
import fs from 'fs';
import https from 'https';
import path from 'path';
import { spawn } from 'child_process';
import { promisify } from 'util';
import { finished } from 'stream/promises';
import url from 'node:url';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
import * as tar from 'tar';
import unzipper from 'unzipper';
const mkdir = promisify(fs.mkdir);
const BIN_DIR = path.join(__dirname, 'bin');
const WKHTMLTOPDF_DIR = path.join(BIN_DIR, 'wkhtmltopdf');
const SEVEN_ZIP_EXE = path.join(BIN_DIR, '7za.exe');
const PLATFORM = os.platform();
const ARCH = os.arch();
const VERSION = '0.12.6-1';
const BASE_URL = `https://github.com/wkhtmltopdf/packaging/releases/download/${VERSION}`;
const DOWNLOADS = {
	win: {
		archive: `wkhtmltox-${VERSION}.mxe-cross-win64.7z`,
		sevenZipZip: 'https://www.7-zip.org/a/7za920.zip',
	},
};
async function download(url, dest) {
	const file = fs.createWriteStream(dest);
	return new Promise((resolve, reject) => {
		https
			.get(url, (res) => {
				if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
					file.close(); // Close current stream to avoid open handle
					return download(res.headers.location, dest).then(resolve).catch(reject);
				}
				if (res.statusCode !== 200) return reject(new Error(`Failed to download: ${res.statusCode} - ${url}`));
				res.pipe(file);
				finished(file)
					.then(() => {
						// Confirm file is closed and fully flushed
						file.close(() => resolve());
					})
					.catch((err) => reject(err));
			})
			.on('error', (err) => {
				fs.unlink(dest, () => reject(err));
			});
	});
}
function extract7z(archive, destination) {
	return new Promise((resolve, reject) => {
		const proc = spawn(SEVEN_ZIP_EXE, ['x', archive, `-o${destination}`, '-y'], { stdio: 'inherit' });
		proc.on('close', (code) => {
			if (code === 0) resolve();
			else reject(new Error(`7za exited with code ${code}`));
		});
	});
}
async function install7zaIfMissing() {
	if (fs.existsSync(SEVEN_ZIP_EXE)) return;
	const zipName = '7za920.zip';
	const zipPath = path.join(BIN_DIR, zipName);
	const downloadUrl = DOWNLOADS.win.sevenZipZip;
	console.log(`⬇ Downloading 7za.exe from: ${downloadUrl}`);
	await download(downloadUrl, zipPath);
	await fs
		.createReadStream(zipPath)
		.pipe(unzipper.Extract({ path: BIN_DIR }))
		.promise();
	fs.rmSync(zipPath);
	if (!fs.existsSync(SEVEN_ZIP_EXE)) throw new Error('❌ Failed to extract 7za.exe');
}
(async () => {
	try {
		if (ARCH !== 'x64') {
			console.log(`⚠️ Skipping wkhtmltopdf install: Unsupported architecture: ${ARCH}`);
			process.exit(0);
		}
		if (PLATFORM !== 'win32') {
			console.log(`ℹ️ Skipping wkhtmltopdf install: Only supported on Windows`);
			process.exit(0);
		}
		if (!fs.existsSync(BIN_DIR)) await mkdir(BIN_DIR, { recursive: true });
		const archiveName = DOWNLOADS.win.archive;
		const downloadUrl = `${BASE_URL}/${archiveName}`;
		await install7zaIfMissing();
		const archivePath = path.join(BIN_DIR, archiveName);
		console.log(`⬇ Downloading wkhtmltopdf from: ${downloadUrl}`);
		await download(downloadUrl, archivePath);
		console.log(`📦 Extracting to: ${WKHTMLTOPDF_DIR}`);
		if (!fs.existsSync(WKHTMLTOPDF_DIR)) fs.mkdirSync(WKHTMLTOPDF_DIR, { recursive: true });
		await extract7z(archivePath, WKHTMLTOPDF_DIR);
		fs.rmSync(archivePath);
		console.log('✅ wkhtmltopdf installed successfully');
		process.exit(0);
	} catch (err) {
		console.error('❌ wkhtmltopdf installation failed:', err.message);
		process.exit(1);
	}
})();
