const { execSync } = require('child_process');
const os = require('os');
const path = require('path');

const isWin = os.platform() === 'win32';

const script = isWin
  ? path.join(__dirname, 'dev-up.bat')
  : path.join(__dirname, 'dev-up.sh');

try {
  execSync(script, { stdio: 'inherit', shell: true });
} catch (err) {
  console.error('❌ Failed to run dev script:', err.message);
  process.exit(1);
}
