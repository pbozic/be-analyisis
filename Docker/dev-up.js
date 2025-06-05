import { execSync } from 'child_process';
import os from 'os';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const isWin = os.platform() === 'win32';

const script = isWin ? path.join(__dirname, 'dev-up.bat') : path.join(__dirname, 'dev-up.sh');

try {
	execSync(`"${script}"`, { stdio: 'inherit', shell: true });
} catch (err) {
	console.error('❌ Failed to run dev script:', err.message);
	process.exit(1);
}
