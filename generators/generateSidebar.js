const fs = require('fs');
const path = require('path');

const DOCS_ROOT = path.join(process.cwd(), 'docs', 'docs'); // e.g. docs/docs/api/*
const SIDEBAR_PATH = path.join(process.cwd(), 'docs', 'sidebars.js');

function walk(dir) {
	const entries = fs.readdirSync(dir, { withFileTypes: true });

	const items = entries
		.filter((entry) => entry.isFile() && (entry.name.endsWith('.md') || entry.name.endsWith('.mdx')))
		.map((entry) => {
			const fullPath = path.join(dir, entry.name);
			const relativePath = path.relative(DOCS_ROOT, fullPath);
			return relativePath.replace(/\.mdx?$/, '').replace(/\\/g, '/'); // normalize slashes
		});

	return items;
}

function generateSidebar() {
	if (!fs.existsSync(DOCS_ROOT)) {
		console.error(`❌ Docs root not found: ${DOCS_ROOT}`);
		return;
	}

	const sidebar = {};

	for (const dir of fs.readdirSync(DOCS_ROOT, { withFileTypes: true })) {
		if (dir.isDirectory()) {
			const subDir = path.join(DOCS_ROOT, dir.name);
			const items = walk(subDir);

			// Even if empty, add it
			sidebar[dir.name] = {
				type: 'category',
				label: dir.name,
				collapsible: true,
				collapsed: true,
				items,
			};
		}
	}

	fs.writeFileSync(SIDEBAR_PATH, `module.exports = ${JSON.stringify(sidebar, null, 2)};\n`);
	console.log(`✅ Sidebar written to ${SIDEBAR_PATH}`);
	return sidebar;
}

module.exports = generateSidebar;
