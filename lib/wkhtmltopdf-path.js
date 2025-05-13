const os = require('os');
const path = require('path');
const fs = require('fs');

const platform = os.platform();
let wkhtmltopdfPath;

switch (platform) {
  case 'win32':
    wkhtmltopdfPath = path.join(process.cwd(), 'bin', "wkhtmltopdf", 'wkhtmltox', 'bin', 'wkhtmltopdf.exe');
    break;

  case 'linux':
    wkhtmltopdfPath = path.join(process.cwd(), 'bin', 'wkhtmltox', 'bin', 'wkhtmltopdf');
    break;

  case 'darwin':
    // Optionally check for Homebrew install or fallback
    wkhtmltopdfPath = '/usr/local/bin/wkhtmltopdf';
    console.warn(
      '⚠️ macOS is not auto-supported. Ensure wkhtmltopdf is installed via Homebrew or manually.'
    );
    break;

  default:
    throw new Error(`Unsupported platform: ${platform}`);
}

if (!fs.existsSync(wkhtmltopdfPath)) {
  throw new Error(`❌ wkhtmltopdf binary not found at: ${wkhtmltopdfPath}`);
}

module.exports = wkhtmltopdfPath;
