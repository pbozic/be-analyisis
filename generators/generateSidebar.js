const fs = require('fs');
const path = require('path');

const DOCS_ROOT = path.join(process.cwd(), 'docs', 'docs'); // the folder that contains [api, dao, controllers]
const SIDEBAR_PATH = path.join(process.cwd(), 'docs', 'sidebars.js');

function walk(dir, prefix = '') {
	const entries = fs.readdirSync(dir, { withFileTypes: true });

	return entries.flatMap((entry) => {
		const fullPath = path.join(dir, entry.name);
		const relativePath = path.relative(DOCS_ROOT, fullPath);
		const docId = relativePath.replace(/\.mdx?$/, '').replace(/\\/g, '/'); // normalize Windows slashes

		if (entry.isDirectory()) {
			return {
				type: 'category',
				label: entry.name,
				collapsible: true,
				collapsed: true,
				items: walk(fullPath, path.join(prefix, entry.name)),
			};
		}

		if (entry.isFile() && (entry.name.endsWith('.md') || entry.name.endsWith('.mdx'))) {
			return docId;
		}

		return [];
	});
}

function generateSidebar() {
	if (!fs.existsSync(DOCS_ROOT)) {
		console.error(`❌ Docs root not found: ${DOCS_ROOT}`);
		return;
	}

	const sidebar = {};

	for (const dir of fs.readdirSync(DOCS_ROOT, { withFileTypes: true })) {
		if (dir.isDirectory()) {
			sidebar[dir.name] = walk(path.join(DOCS_ROOT, dir.name), dir.name);
		}
	}

	fs.writeFileSync(SIDEBAR_PATH, `module.exports = ${JSON.stringify(sidebar, null, 2)};\n`);
	console.log(`✅ Sidebar written to ${SIDEBAR_PATH}`);
	return sidebar;
}

module.exports = generateSidebar;
