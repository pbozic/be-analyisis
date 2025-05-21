const fs = require('fs');
const path = require('path');

const recast = require('recast');
const parser = require('@babel/parser');
const commentParser = require('comment-parser');

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
					plugins: ['jsx', 'classProperties', 'optionalChaining'],
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
	const summary = tags.find((t) => t.tag === 'summary')?.name || '';
	const description = tags.find((t) => t.tag === 'description')?.name || '';
	const operationId = tags.find((t) => t.tag === 'operationId')?.name;
	const params = tags.filter((t) => t.tag === 'pathParam');
	const responses = tags.filter((t) => t.tag === 'response');
	const responseContent = tags.filter((t) => t.tag === 'responseContent');
	const bodyContent = tags.find((t) => t.tag === 'bodyContent');
	const bodyRequired = tags.some((t) => t.tag === 'bodyRequired');

	let block = `\n<!-- DOCGEN:START ${name} -->\n### ${name}\n\n`;

	if (summary) block += `**Summary**: ${summary}\n\n`;
	if (description) block += `**Description**: ${description}\n\n`;

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
			block += `- ${r.name}\n`;
		}
		block += '\n';
	}

	if (responseContent.length) {
		block += '**Response Content:**\n\n';
		for (const rc of responseContent) {
			const match = rc.name.match(/^{(.+)}\s+([0-9]+)\.([\w/-]+)\s+(.*)$/);
			if (match) {
				const [, type, status, mime, example] = match;
				const safeExample = example.replace(/`/g, '\\`').replace(/{/g, '&#123;').replace(/}/g, '&#125;');
				block += `- Status: ${status}, Type: \`${type.trim()}\`, Content-Type: \`${mime.trim()}\`, Example: \`${safeExample}\`\n`;
			} else {
				block += `- ⚠️ Could not parse: \`${rc.name}\`\n`;
			}
		}
		block += '\n';
	}

	if (operationId) {
		block += `🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/${operationId})\n\n`;
	}

	block += `<!-- DOCGEN:END ${name} -->\n`;
	return block;
}

function updateMarkdownDoc(fileName, functions) {
	const docFile = path.join(DOCS_DIR, `${fileName}.md`);
	let existingContent = fs.existsSync(docFile) ? fs.readFileSync(docFile, 'utf-8') : `# ${fileName} Controller\n\n`;

	functions.forEach((fn) => {
		const startTag = `<!-- DOCGEN:START ${fn.name} -->`;
		const endTag = `<!-- DOCGEN:END ${fn.name} -->`;
		const block = formatDocBlock(fn.name, fn.doc);

		// eslint-disable-next-line no-useless-escape
		const regex = new RegExp(`${startTag}[\s\S]*?${endTag}`, 'gm');
		if (regex.test(existingContent)) {
			existingContent = existingContent.replace(regex, block);
		} else {
			existingContent += block;
		}
	});

	fs.writeFileSync(docFile, existingContent);
}

async function generateControllerDocs() {
	ensureDocsDir();

	const files = fs.readdirSync(CONTROLLER_DIR).filter((f) => f.endsWith('.js') || f.endsWith('.ts'));

	for (const file of files) {
		const filePath = path.join(CONTROLLER_DIR, file);
		const baseName = path.basename(file, path.extname(file));
		const functions = parseJsFile(filePath);
		updateMarkdownDoc(baseName, functions);
	}
}

module.exports = generateControllerDocs;
