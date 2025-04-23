// Docker/setup-aliases.js
const fs = require("fs");
const os = require("os");
const path = require("path");

console.log("🔧 Setting up Docker CLI aliases...");

const aliases = {
  bash: `
# 🚀 Docker Dev Aliases
alias d="npm run d --"
alias dnpm="npm run d -- npm"
alias dnpx="npm run d -- npx"
`,

  powershell: `
# 🚀 Docker Dev Aliases
function d { npm run d -- $args }
function dnpm { npm run d -- npm $args }
function dnpx { npm run d -- npx $args }
`
};

function appendIfMissing(filePath, content, identifier) {
  console.log(`🔍 Checking: ${filePath}`);
  if (!fs.existsSync(filePath)) {
    console.log(`⛔️ File does not exist: ${filePath}`);
    return false;
  }

  const current = fs.readFileSync(filePath, "utf8");
  if (!current.includes(identifier)) {
    fs.appendFileSync(filePath, `\n${content.trim()}\n`);
    console.log(`✅ Added Docker aliases to ${filePath}`);
    return true;
  } else {
    console.log(`ℹ️ Aliases already exist in ${filePath}`);
    return false;
  }
}

const home = os.homedir();
let modifiedFile = null;

if (process.platform === "win32") {
  const profile = path.join(home, "Documents", "WindowsPowerShell", "Microsoft.PowerShell_profile.ps1");
  fs.mkdirSync(path.dirname(profile), { recursive: true });

  // Ensure file exists
  if (!fs.existsSync(profile)) {
    fs.writeFileSync(profile, "", "utf8");
  }

  if (appendIfMissing(profile, aliases.powershell, "function d {")) {
    modifiedFile = "$PROFILE (PowerShell)";
  }

  // 🧠 Add WSL config if missing
  const wslconfigPath = path.join(home, ".wslconfig");
  if (!fs.existsSync(wslconfigPath)) {
    const wslConfigContent = `
[wsl2]
memory=4GB
processors=4
swap=2GB
localhostForwarding=true
    `.trim();

    fs.writeFileSync(wslconfigPath, wslConfigContent, "utf8");
    console.log(`✅ Created .wslconfig at ${wslconfigPath}`);
    console.log(`🌀 Run 'wsl --shutdown' to apply new WSL limits.`);
  } else {
    console.log(`ℹ️ .wslconfig already exists at ${wslconfigPath}`);
  }

} else {
  const shellFiles = [".bashrc", ".zshrc"];
  for (const file of shellFiles) {
    const fullPath = path.join(home, file);
    if (appendIfMissing(fullPath, aliases.bash, "alias d=")) {
      modifiedFile = fullPath;
      break;
    }
  }
}

if (modifiedFile) {
  console.log(`\n✨ Almost done! Please run:\n`);
  if (process.platform === "win32") {
    console.log(`  . $PROFILE`);
  } else {
    const shellType = modifiedFile.includes("zshrc") ? "zshrc" : "bashrc";
    console.log(`  source ~/.${shellType}`);
  }
} else {
  console.log(`🚫 Could not find or write to any shell profile.`);
}
