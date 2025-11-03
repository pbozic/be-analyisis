import fs from 'fs';
import path from 'path';

import * as recast from 'recast';
import * as parser from '@babel/parser';
import * as commentParser from 'comment-parser';

const CONTROLLER_DIR = path.join(process.cwd(), 'controllers');
const DOCS_DIR = path.join(process.cwd(), 'docs', 'docs', 'controllers');

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

	// Helper: find the closest JSDoc-looking block on the node or its Export wrapper
	function getJSDocBlock(path) {
		const parent = path.parent && path.parent.node;
		const fromNode = path.node.leadingComments || [];
		const fromParent = (parent && parent.leadingComments) || [];
		const fromNodeComments = path.node.comments || [];
		const all = [...fromNode, ...fromParent, ...fromNodeComments];

		// Prefer CommentBlock entries; pick the closest one that has any of the tags we care about
		const blocks = all.filter((c) => c.type === 'CommentBlock');
		const preferred =
			blocks.find((b) => /@summary|@description|@operationId|@tag/.test(b.value)) || blocks[blocks.length - 1];

		// Rebuild a JSDoc style block for comment-parser
		let rebuilt = '';
		if (preferred) {
			const val = preferred.value || '';
			// If the inner value already starts with '*', avoid creating '/***' and use '/*' instead
			rebuilt = /^\s*\*/.test(val) ? `/*${val}*/` : `/**${val}*/`;
		}

		// Fallback: scan the original source for the nearest /** ... */ above the node
		if (!rebuilt) {
			const searchStart =
				(parent && (parent.start ?? parent.range?.[0])) ?? path.node.start ?? path.node.range?.[0] ?? 0;
			const before = code.slice(0, searchStart);
			const openIdx = before.lastIndexOf('/**');
			if (openIdx !== -1) {
				const closeIdx = code.indexOf('*/', openIdx);
				if (closeIdx !== -1 && closeIdx <= searchStart) {
					const raw = code.slice(openIdx, closeIdx + 2);
					rebuilt = raw;
				}
			}
		}

		// Sanitize common formatting issues so comment-parser recognizes tags
		if (rebuilt) {
			// Normalize line endings
			rebuilt = rebuilt.replace(/\r\n?/g, '\n');
			// Convert lines like "* - @tag" or '* "@tag' into '* @tag'
			rebuilt = rebuilt.replace(/^(\s*\*)\s*-\s*@/gm, '$1 @');
			rebuilt = rebuilt.replace(/^(\s*\*)\s*"\s*@/gm, '$1 @');
			// Remove stray leading quotes that sometimes appear before text
			rebuilt = rebuilt.replace(/^(\s*\*)\s*"/gm, '$1 ');
		}

		// No debug logging in production
		return rebuilt;
	}

	// Track by name to avoid duplicates; prefer richer docs (more tags)
	const byName = new Map();

	function shouldInclude(doc) {
		const tags = doc?.tags || [];
		// Only include endpoints that look documented (avoid helpers)
		return tags.some((t) =>
			['operationId', 'summary', 'tag', 'response', 'responseContent', 'bodyContent'].includes(t.tag)
		);
	}

	function isTopLevel(path) {
		// Accept Program body or Export* wrappers as top-level
		const parent = path.parent && path.parent.node;
		if (!parent) return false;
		const t = parent.type;
		return t === 'Program' || t === 'ExportNamedDeclaration' || t === 'ExportDefaultDeclaration';
	}

	function addFunction(name, doc, path) {
		if (!name) return;
		if (!isTopLevel(path)) return; // avoid nested helpers creating duplicates
		if (!shouldInclude(doc)) return;

		const curr = byName.get(name);
		const currTags = curr?.doc?.tags?.length || 0;
		const nextTags = doc?.tags?.length || 0;
		if (!curr || nextTags > currTags) {
			byName.set(name, { name, doc });
		}
	}
	recast.types.visit(ast, {
		visitFunctionDeclaration(path) {
			const name = path.node.id?.name || '(anonymous)';
			const commentBlock = getJSDocBlock(path);

			let parsed = {};
			try {
				const parsedArr = commentParser.parse(commentBlock || '');
				parsed = parsedArr[0] || {};
				// No debug/warn noise; proceed silently
			} catch {
				// Fail softly on parse errors
			}

			addFunction(name, parsed, path);
			this.traverse(path);
		},
		visitVariableDeclaration(path) {
			// Handles: export const fn = () => {}   (comments live on ExportNamedDeclaration)
			path.node.declarations.forEach((decl) => {
				if (decl.init?.type === 'FunctionExpression' || decl.init?.type === 'ArrowFunctionExpression') {
					const name = decl.id?.name || '(anonymous)';
					const commentBlock = getJSDocBlock(path);

					let parsed = {};
					try {
						const parsedArr = commentParser.parse(commentBlock || '');
						parsed = parsedArr[0] || {};
						// No debug/warn noise; proceed silently
					} catch {
						// Fail softly on parse errors
					}

					addFunction(name, parsed, path);
				}
			});
			this.traverse(path);
		},
	});
	return Array.from(byName.values());
}

function formatDocBlock(name, doc) {
	const tags = doc.tags || [];
	const summary = tags.find((t) => t.tag === 'summary');
	const description = tags.find((t) => t.tag === 'description');
	const operationId = tags.find((t) => t.tag === 'operationId');

	const summaryText = (summary?.name || '') + ' ' + (summary?.description || '');
	const descriptionText = (description?.name || '') + ' ' + (description?.description || '');
	const operationIdText = (operationId?.name || '') + ' ' + (operationId?.description || '');
	const params = tags.filter((t) => t.tag === 'pathParam');
	const responses = tags.filter((t) => t.tag === 'response');
	const responseContent = tags.filter((t) => t.tag === 'responseContent');
	const bodyContent = tags.find((t) => t.tag === 'bodyContent');
	const bodyRequired = tags.some((t) => t.tag === 'bodyRequired');

	let block = `<!-- DOCGEN:START ${name} -->\n### ${name}\n\n`;

	if (summaryText) block += `**Summary**: ${summaryText}\n\n`;
	if (descriptionText) block += `**Description**: ${descriptionText}\n\n`;

	if (params.length) {
		block += '**Parameters:**\n\n| Name | In | Type | Description |\n|------|----|------|-------------|\n';
		for (const p of params) {
			const [type, paramName, ...desc] = p.name.split(' - ');
			block += `| ${paramName} | path | ${type} | ${desc.join(' - ')} |\n`;
		}
		block += '\n';
	}

	if (bodyContent) {
		block += `**Request Body:** ${bodyRequired ? '(required)' : '(optional)'}\n`;
		block += `Type: \`${bodyContent.name}\`\n`;
		block += `Content-Type: \`${bodyContent.description || 'application/json'}\`\n\n`;
	}

	if (responses.length) {
		block += '**Responses:**\n';
		for (const r of responses) {
			block += `- ${r.name} ${r.description}\n`;
		}
		block += '\n';
	}

	if (responseContent.length) {
		block += '**Response Content:**\n\n';
		for (const rc of responseContent) {
			// Accept variants like:
			// {Model} 200 application/json <example>
			// {Model} 200.application/json <example>
			// 200 application/json <example>
			// default application/json <example>
			// Also allow multi-line JSON examples.
			const combined = `${rc.name || ''} ${rc.description || ''}`.trim();
			const regex = /^\s*(?:\{([^}]+)\})?\s*(\d{3}|default)\s*[.\s]?\s*([^\s]+)(?:\s+([\s\S]*))?$/m;
			const match = combined.match(regex);
			if (match) {
				const [, typeRaw, status, mimeRaw, exampleRaw] = match;
				const type = (typeRaw || '').trim();
				const mime = (mimeRaw || '').trim();
				const example = (exampleRaw || '').trim();
				if (example) {
					const safeExample = example.replace(/`/g, '\\`').replace(/</g, '&lt;').replace(/>/g, '&gt;');
					block += `- Status: ${status}, Type: \`${type || 'unknown'}\`, Content-Type: \`${mime}\`, Example: \`${safeExample}\`\n`;
				} else {
					block += `- Status: ${status}, Type: \`${type || 'unknown'}\`, Content-Type: \`${mime}\`\n`;
				}
			} else {
				block += `- ⚠️ Could not parse: \`${combined}\`\n`;
			}
		}
		block += '\n';
	}

	if (operationIdText) {
		block += `🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/${operationIdText})\n\n`;
	}

	block += `<!-- DOCGEN:END ${name} -->\n`;
	return block;
}

function updateMarkdownDoc(fileName, functions) {
	const docFile = path.join(DOCS_DIR, `${fileName}.md`);
	let existingContent = fs.existsSync(docFile) ? fs.readFileSync(docFile, 'utf-8') : `# ${fileName} Controller\n\n`;

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

export default async function generateControllerDocs() {
	ensureDocsDir();

	const files = fs.readdirSync(CONTROLLER_DIR).filter((f) => f.endsWith('.js') || f.endsWith('.ts'));

	for (const file of files) {
		const filePath = path.join(CONTROLLER_DIR, file);
		const baseName = path.basename(file, path.extname(file));
		const functions = parseJsFile(filePath);
		updateMarkdownDoc(baseName, functions);
	}
}

generateControllerDocs().catch((err) => {
	console.error('Error generating controller docs:', err);
	process.exit(1);
});
