const os = require('os');
const path = require('path');
const fs = require('fs');

const platform = os.platform();
let wkhtmltopdfPath;

switch (platform) {
	case 'win32':
		wkhtmltopdfPath = path.join(process.cwd(), 'bin', 'wkhtmltopdf', 'wkhtmltox', 'bin', 'wkhtmltopdf.exe');
		if (!fs.existsSync(wkhtmltopdfPath)) {
			throw new Error(`❌ wkhtmltopdf binary not found at: ${wkhtmltopdfPath}`);
		}
		break;

	case 'linux':
	case 'darwin':
		// Use system path — assume installed via package manager
		wkhtmltopdfPath = 'wkhtmltopdf';
		break;

	default:
		throw new Error(`Unsupported platform: ${platform}`);
}

module.exports = wkhtmltopdfPath;
