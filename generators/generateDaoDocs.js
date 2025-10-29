import fs from 'fs';
import path from 'path';

import * as recast from 'recast';
import * as parser from '@babel/parser';
import * as commentParser from 'comment-parser';

function ensureDocsDir(dir) {
	if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

function parseJsFile(filePath) {
	const code = fs.readFileSync(filePath, 'utf-8');
	const ast = recast.parse(code, {
		parser: {
			parse: (src) =>
				parser.parse(src, {
					sourceType: 'module',
					sourceFilename: filePath,
					allowReturnOutsideFunction: true,
					comments: true,
					tokens: true,
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

	// Helper: extract the closest JSDoc-style block comment (/** ... */)
	const extractJsDoc = (node, fallbackNode) => {
		const pickFrom = (n) => {
			const comments = (n && n.leadingComments) || [];
			// Prefer the last preceding block comment that looks like JSDoc (starts with '*')
			const block = [...comments]
				.reverse()
				.find((c) => c.type === 'CommentBlock' && (c.value || '').trim().startsWith('*'));
			if (!block) return null;
			// Reconstruct as a proper JSDoc string for the parser
			const val = block.value || '';
			const normalized = val.startsWith('*') ? val.slice(1) : val;
			const text = `/**${normalized}*/`;
			try {
				const parsed = commentParser.parse(text, {
					// Preserve spacing; tolerate imperfect blocks
					spacing: 'preserve',
					trim: true,
				});
				return parsed && parsed[0] ? parsed[0] : null;
			} catch {
				return null;
			}
		};
		return pickFrom(node) || (fallbackNode ? pickFrom(fallbackNode) : null) || {};
	};

	recast.types.visit(ast, {
		visitFunctionDeclaration(path) {
			const name = path.node.id.name;
			const parsed = extractJsDoc(path.node);
			const startLine = path.node.loc?.start?.line || 0;
			functions.push({ name, doc: parsed, startLine });
			this.traverse(path);
		},
		visitVariableDeclaration(path) {
			path.node.declarations.forEach((decl) => {
				if (decl.init?.type === 'FunctionExpression' || decl.init?.type === 'ArrowFunctionExpression') {
					if (decl.id?.type !== 'Identifier') return;
					const name = decl.id.name;
					// Try comments on the declarator first, then on the declaration
					const parsed = extractJsDoc(decl, path.node);
					const startLine = decl.loc?.start?.line || path.node.loc?.start?.line || 0;
					functions.push({ name, doc: parsed, startLine });
				}
			});
			this.traverse(path);
		},
	});

	// Fallback: find nearest preceding JSDoc block from global comments if none attached
	const allComments = (ast.comments || []).filter(
		(c) => c.type === 'CommentBlock' && (c.value || '').trim().startsWith('*')
	);
	const parsedBlocks = allComments.map((c) => {
		const val = c.value || '';
		const normalized = val.startsWith('*') ? val.slice(1) : val;
		return {
			endLine: c.loc?.end?.line || 0,
			text: `/**${normalized}*/`,
		};
	});

	for (const fn of functions) {
		const hasDoc = fn.doc && (fn.doc.description || (fn.doc.tags && fn.doc.tags.length));
		if (hasDoc) continue;
		if (!fn.startLine) continue;
		const before = parsedBlocks.filter((b) => b.endLine && b.endLine < fn.startLine);
		if (!before.length) continue;
		const nearest = before.sort((a, b) => b.endLine - a.endLine)[0];
		try {
			const parsed = commentParser.parse(nearest.text, { spacing: 'preserve', trim: true });
			if (parsed && parsed[0]) fn.doc = parsed[0];
		} catch {
			/* ignore */
		}
	}

	return functions.map(({ name, doc }) => ({ name, doc }));
}

function formatDocBlock(name, doc) {
	const tags = doc?.tags || [];

	// Prefer the top-level description if present; fall back to a @summary/@description tag
	const summaryTag = tags.find((t) => t.tag === 'summary');
	const descriptionTag = tags.find((t) => t.tag === 'description');
	const headerDescription = (doc?.description || '').trim();
	const summaryText = ((summaryTag?.name || '') + ' ' + (summaryTag?.description || '')).trim();
	const descTagText = ((descriptionTag?.name || '') + ' ' + (descriptionTag?.description || '')).trim();
	const descriptionText = headerDescription || descTagText;

	const paramTags = tags.filter((t) => t.tag === 'param');
	const returnTag = tags.find((t) => t.tag === 'returns' || t.tag === 'return');

	let block = `<!-- DOCGEN:START ${name} -->\n### ${name}\n\n`;
	if (summaryText) block += `**Summary**: ${summaryText}\n\n`;
	if (descriptionText) block += `**Description**: ${descriptionText}\n\n`;

	if (paramTags.length) {
		block += `**Parameters**:\n`;
		for (const p of paramTags) {
			const type = p.type ? `{${p.type}}` : '';
			const opt = p.optional ? '?' : '';
			const namePart = [p.name || 'param', opt].join('');
			const descRaw = (p.description || '').trim();
			const desc = descRaw.replace(/^-+\s*/, '');
			const pieces = [];
			if (type) pieces.push(type);
			if (desc) pieces.push(desc);
			const tail = pieces.join(' - ');
			block += `- ${namePart}${tail ? `: ${tail}` : ''}\n`;
		}
		block += `\n`;
	}

	if (returnTag) {
		const type = returnTag.type ? `{${returnTag.type}}` : '';
		const nameDesc = [returnTag.name, returnTag.description].filter(Boolean).join(' ').trim();
		const tail = [type, nameDesc].filter(Boolean).join(' - ');
		block += `**Returns**: ${tail || '—'}\n\n`;
	}

	block += `<!-- DOCGEN:END ${name} -->\n`;
	return block;
}

function updateMarkdownDoc(docDir, fileName, functions) {
	const docFile = path.join(docDir, `${fileName}.md`);
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

export default async function generateDaoDocs(options = {}) {
	const basePath = options.basePath || process.cwd();
	const DAO_DIR = path.join(basePath, 'dao');
	const DOCS_DIR = path.join(basePath, 'docs', 'docs', 'daos');

	ensureDocsDir(DOCS_DIR);
	const files = fs
		.readdirSync(DAO_DIR)
		.filter((f) => (f.endsWith('.js') || f.endsWith('.ts')) && !f.endsWith('.d.ts'));
	for (const file of files) {
		const filePath = path.join(DAO_DIR, file);
		const baseName = path.basename(file, path.extname(file));
		const functions = parseJsFile(filePath);
		updateMarkdownDoc(DOCS_DIR, baseName, functions);
	}
}
