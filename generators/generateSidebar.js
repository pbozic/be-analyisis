const fs = require('fs');
const path = require('path');

const DOCS_ROOT = path.join(process.cwd(), 'docs', 'docs'); // e.g. docs/docs/api/*
const SIDEBAR_PATH = path.join(process.cwd(), 'docs', 'sidebars.js');

// Recursively walk a directory and return all .md/.mdx files as relative paths
function walkRecursive(dir) {
	let results = [];

	for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
		const fullPath = path.join(dir, entry.name);
		if (entry.isDirectory()) {
			results = results.concat(walkRecursive(fullPath));
		} else if (entry.isFile() && (entry.name.endsWith('.md') || entry.name.endsWith('.mdx'))) {
			const relativePath = path.relative(DOCS_ROOT, fullPath);
			results.push(relativePath.replace(/\.mdx?$/, '').replace(/\\/g, '/')); // Normalize for Docusaurus
		}
	}

	return results;
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
			const items = walkRecursive(subDir);

			if (items.length > 0) {
				sidebar[dir.name] = {
					type: 'category',
					label: dir.name,
					collapsible: true,
					collapsed: true,
					items,
				};
				console.log(`✅ Added category: ${dir.name} (${items.length} items)`);
			} else {
				console.warn(`⚠️ Skipping empty category: ${dir.name}`);
			}
		}
	}

	if (Object.keys(sidebar).length === 0) {
		console.warn(`⚠️ No categories found. Sidebar not written.`);
		return;
	}

	fs.writeFileSync(SIDEBAR_PATH, `module.exports = ${JSON.stringify(sidebar, null, 2)};\n`);
	console.log(`✅ Sidebar written to ${SIDEBAR_PATH}`);
	return sidebar;
}

module.exports = generateSidebar;
