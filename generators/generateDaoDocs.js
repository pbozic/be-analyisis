import fs from 'fs';
import path from 'path';

import * as recast from 'recast';
import * as parser from '@babel/parser';
import * as commentParser from 'comment-parser';

const DAO_DIR = path.join(process.cwd(), 'dao');
const DOCS_DIR = path.join(process.cwd(), 'docs', 'docs', 'daos');

function ensureDocsDir() {
	if (!fs.existsSync(DOCS_DIR)) fs.mkdirSync(DOCS_DIR, { recursive: true });
}

function parseJsFile(filePath) {
	const code = fs.readFileSync(filePath, 'utf-8');
	const ast = recast.parse(code, {
		parser: {
			parse: (src) =>
				parser.parse(src, {
					sourceType: 'module',
					plugins: [
						'jsx',
						'classProperties',
						'classPrivateProperties',
						'classPrivateMethods',
						'decorators-legacy',
						'exportDefaultFrom',
						'exportNamespaceFrom',
						'optionalChaining',
						'nullishCoalescingOperator',
						'dynamicImport',
						'importMeta',
						'topLevelAwait',
						'typescript',
					],
				}),
		},
	});

	const functions = [];
	recast.types.visit(ast, {
		visitFunctionDeclaration(path) {
			const name = path.node.id.name;
			const commentBlock = (path.node.leadingComments || []).map((c) => `/*${c.value}*/`).join('\n');
			const parsed = commentParser.parse(commentBlock)[0] || {};
			functions.push({ name, doc: parsed });
			this.traverse(path);
		},
		visitVariableDeclaration(path) {
			path.node.declarations.forEach((decl) => {
				if (decl.init?.type === 'FunctionExpression' || decl.init?.type === 'ArrowFunctionExpression') {
					const name = decl.id.name;
					const commentBlock = (path.node.leadingComments || []).map((c) => `/*${c.value}*/`).join('\n');
					const parsed = commentParser.parse(commentBlock)[0] || {};
					functions.push({ name, doc: parsed });
				}
			});
			this.traverse(path);
		},
	});
	return functions;
}

function formatDocBlock(name, doc) {
	const tags = doc.tags || [];
	const summaryTag = tags.find((t) => t.tag === 'summary');
	const descriptionTag = tags.find((t) => t.tag === 'description');

	const summaryText = ((summaryTag?.name || '') + ' ' + (summaryTag?.description || '')).trim();
	const descriptionText = ((descriptionTag?.name || '') + ' ' + (descriptionTag?.description || '')).trim();

	let block = `<!-- DOCGEN:START ${name} -->\n### ${name}\n\n`;
	if (summaryText) block += `**Summary**: ${summaryText}\n\n`;
	if (descriptionText) block += `**Description**: ${descriptionText}\n\n`;
	block += `<!-- DOCGEN:END ${name} -->\n`;

	return block;
}

function updateMarkdownDoc(fileName, functions) {
	const docFile = path.join(DOCS_DIR, `${fileName}.md`);
	let existingContent = fs.existsSync(docFile) ? fs.readFileSync(docFile, 'utf-8') : `# ${fileName} DAO\n\n`;

	functions.forEach((fn) => {
		// Escape literal text for use inside a RegExp
		const escapeRegExp = (str) => str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

		const startTag = `<!-- DOCGEN:START ${fn.name} -->`;
		const endTag = `<!-- DOCGEN:END ${fn.name} -->`;
		const block = formatDocBlock(fn.name, fn.doc);

		// Option A: dotAll + non-greedy
		// const regex = new RegExp(`${escapeRegExp(startTag)}.*?${escapeRegExp(endTag)}`, 'gs');

		// Option B: classic any-char trick (works everywhere)
		const regex = new RegExp(`${escapeRegExp(startTag)}[\\s\\S]*?${escapeRegExp(endTag)}`, 'g');

		// Log once without breaking the state. Use .test on a clone or just .includes
		const hasBlock = existingContent.includes(startTag);

		if (hasBlock) {
			// Replace ALL occurrences of that block
			existingContent = existingContent.replace(regex, block);
		} else {
			// Append if block not present; ensure clean separation
			if (!existingContent.endsWith('\n\n')) {
				existingContent += existingContent.endsWith('\n') ? '\n' : '\n\n';
			}
			existingContent += block;
		}
	});

	// Normalize whitespace: trim trailing spaces and collapse 3+ blank lines to 2
	existingContent = existingContent.replace(/[ \t]+$/gm, '');
	existingContent = existingContent.replace(/\n{3,}/g, '\n\n');
	// Ensure file ends with a single newline
	if (!existingContent.endsWith('\n')) existingContent += '\n';

	fs.writeFileSync(docFile, existingContent);
}

export default async function generateDaoDocs() {
	ensureDocsDir();
	const files = fs.readdirSync(DAO_DIR).filter((f) => f.endsWith('.js') || f.endsWith('.ts'));
	for (const file of files) {
		const filePath = path.join(DAO_DIR, file);
		const baseName = path.basename(file, path.extname(file));
		const functions = parseJsFile(filePath);
		updateMarkdownDoc(baseName, functions);
	}
}
