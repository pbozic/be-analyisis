const fs = require('fs');
const path = require('path');

const DOCS_ROOT = path.join(process.cwd(), 'docs', 'docs');
const SIDEBAR_PATH = path.join(process.cwd(), 'docs', 'sidebars.js');

// Recursively walk and build a tree structure from folder contents
function buildTree(dir) {
	const tree = {};

	for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
		const fullPath = path.join(dir, entry.name);
		if (entry.isDirectory()) {
			const subTree = buildTree(fullPath);
			if (Object.keys(subTree).length > 0) {
				tree[entry.name] = subTree;
			}
		} else if (entry.isFile() && (entry.name.endsWith('.md') || entry.name.endsWith('.mdx'))) {
			const nameWithoutExt = entry.name.replace(/\.mdx?$/, '');
			const relativePath = path
				.relative(DOCS_ROOT, fullPath)
				.replace(/\\/g, '/')
				.replace(/\.mdx?$/, '');
			tree[nameWithoutExt] = relativePath;
		}
	}

	return tree;
}
function extractTitleFromMarkdown(filepath, filePathRelativeParts = []) {
	//console.log('extractTitleFromMarkdown', filepath, filePathRelativeParts);
	try {
		const content = fs.readFileSync(filepath, 'utf-8');
		const lines = content.split('\n');

		for (const line of lines) {
			const trimmed = line.trim();
			if (trimmed.startsWith('# [')) {
				const match = trimmed.match(/^# \[(GET|POST|PUT|DELETE|PATCH)\]\s+(\/.+)$/i);
				if (match) {
					const method = match[1].toUpperCase();
					const route = match[2];

					const routeParts = route.split('/').filter(Boolean);
					let fileParts = filePathRelativeParts.slice(0, -1); // exclude filename
					fileParts.shift();
					// Strip all matching leading segments
					let i = 0;
					while (i < fileParts.length && i < routeParts.length && routeParts[i] === fileParts[i]) {
						i++;
					}
					//console.log('i', i, fileParts, routeParts);
					const cleanedPath = '/' + routeParts.slice(i).join('/');
					return `[${method}] ${cleanedPath || '/'}`;
				}
			}

			if (trimmed.startsWith('# ')) {
				return trimmed.replace(/^# /, '').trim();
			}
		}
	} catch (err) {
		//console.warn(`⚠️ Failed to read or parse title in: ${filepath}`);
	}
	return null;
}

// Convert nested tree to Docusaurus sidebar format
function convertToSidebar(tree) {
	const items = [];

	for (const key of Object.keys(tree)) {
		const value = tree[key];
		if (typeof value === 'string') {
			const fullPath = path.join(DOCS_ROOT, `${value}.mdx`);
			const filePathRelativeParts = value.split('/');
			const title = extractTitleFromMarkdown(fullPath, filePathRelativeParts) || key;
			items.push({
				type: 'doc',
				id: value,
				label: title,
			});
		} else {
			items.push({
				type: 'category',
				label: key,
				collapsible: true,
				collapsed: true,
				items: convertToSidebar(value),
			});
		}
	}

	return items;
}

function generateSidebar() {
	if (!fs.existsSync(DOCS_ROOT)) {
		console.error(`❌ Docs root not found: ${DOCS_ROOT}`);
		return;
	}

	const tree = buildTree(DOCS_ROOT);
	const sidebar = {};

	for (const topLevel of Object.keys(tree)) {
		sidebar[topLevel] = convertToSidebar(tree[topLevel]);
		console.log(`✅ Added section: ${topLevel}`);
	}

	fs.writeFileSync(SIDEBAR_PATH, `module.exports = ${JSON.stringify(sidebar, null, 2)};\n`);
	console.log(`✅ Sidebar written to ${SIDEBAR_PATH}`);
	return sidebar;
}

module.exports = generateSidebar;
