#!/usr/bin/env node
/**
 * generate-architecture-diagram.mjs — ESM, module-aware, per-route precise graph
 * ------------------------------------------------------------------------------
 * Output per module (+ unassigned):
 *   Route (component) --> Controller (class) [vertical list of used functions]
 *                     --> DAO (class) [vertical list of used methods]
 *                     --> Prisma Models (interface) actually used by those DAO methods
 *
 * Module tagging:
 *   A JSDoc-style block with @module immediately preceding a route or router.use is attached
 *   only if the gap between comment end and node start contains ONLY whitespace, semicolons,
 *   or more comments. File-header tags apply only to comments that end before the first real
 *   statement in the file with no code between.
 *
 * Router mounting:
 *   router.use([path?], ...middlewares, subRouter)
 *   We pick the last non-array/object/call expression argument (Identifier/MemberExpression)
 *   as the subRouter and resolve it via imports. Works with ns.default too.
 *
 * Run:
 *   npm i -D @babel/parser @babel/traverse
 *   node ./generate-architecture-diagram.mjs
 */

import fs from 'node:fs';
import fsp from 'node:fs/promises';
import path from 'node:path';

import { parse } from '@babel/parser';
import traverseModule from '@babel/traverse';
const traverse = typeof traverseModule === 'function' ? traverseModule : traverseModule.default;

// ------------------------- config -------------------------
const ROOT = process.cwd();
const OUT_PATTERN = (mod) => path.resolve(ROOT, `diagrams/express-map.${slug(mod)}.puml`);
const UNASSIGNED_NAME = 'unassigned';

// presentation toggles
const SHOW_CONTROLLER_FUNCTIONS = true;
const SHOW_PATH_NOTES = false; // show small note with file path near classes
const TITLE_FROM_BASENAME = true; // use filename (no extension) for visible titles
const ADD_STEREOTYPES = false; // <<controller>>, <<dao>>, <<model>>
const STRICT_CONTROLLER_METHOD_ONLY = true; // if controller method can't be found, don't scan whole file

// ------------------------- constants -------------------------
const HTTP_METHODS = new Set(['get', 'post', 'put', 'delete', 'patch', 'options', 'head', 'all']);
const PRISMA_IDENTS = new Set(['prisma', 'tx']);
const PRISMA_IGNORE = new Set(['$transaction', '$queryRaw', '$executeRaw', '$on', '$connect', '$disconnect']);

// ------------------------- utils -------------------------
function prettyTitleFromFile(file, fallback, suffix = '') {
	if (!file) return (fallback || 'Item') + suffix;
	const base = path.basename(file).replace(/\.[a-zA-Z0-9]+$/, '');
	return (base || fallback || 'Item') + suffix;
}
const readFile = (f) => {
	try {
		return fs.readFileSync(f, 'utf8');
	} catch {
		return null;
	}
};
const slug = (s) =>
	String(s)
		.trim()
		.toLowerCase()
		.replace(/[^a-z0-9]+/g, '-')
		.replace(/^-+|-+$/g, '') || 'default';
const posixRel = (root, f) => path.relative(root, f).split(path.sep).join('/');
const sanitizeLabel = (s) =>
	String(s).replace(/\\n/g, ' ').replace(/\r?\n/g, ' ').replace(/\\/g, '/').replace(/"/g, '\\"');

function babelParse(code, filePath) {
	return parse(code, {
		sourceType: 'unambiguous',
		plugins: [
			'jsx',
			'typescript',
			'classProperties',
			'objectRestSpread',
			'dynamicImport',
			'decorators-legacy',
			'optionalChaining',
			'nullishCoalescingOperator',
			'topLevelAwait',
		],
		comments: true,
		tokens: false,
		ranges: true, // .start/.end on nodes and comments
		sourceFilename: filePath,
	});
}

function resolveImportPath(importSource, fromFile) {
	if (!importSource) return null;
	if (importSource.startsWith('.') || importSource.startsWith('/')) {
		const abs = path.resolve(path.dirname(fromFile), importSource);
		const candidates = [
			abs,
			abs + '.js',
			abs + '.ts',
			abs + '.tsx',
			abs + '.jsx',
			path.join(abs, 'index.js'),
			path.join(abs, 'index.ts'),
			path.join(abs, 'index.tsx'),
			path.join(abs, 'index.jsx'),
		];
		for (const c of candidates) if (fs.existsSync(c)) return c;
	}
	return null; // ignore bare specifiers
}

const isInAnyDir = (file, variants) => !!file && variants.some((v) => path.normalize(file).split(path.sep).includes(v));
const isControllerPath = (file) => isInAnyDir(file, ['controller', 'controllers']);
const isDaoPath = (file) => isInAnyDir(file, ['dao', 'daos']);

function collectImports(ast, filePath) {
	const bindings = {}; // localIdent -> resolvedAbsoluteFile
	traverse(ast, {
		ImportDeclaration(p) {
			const src = p.node.source.value;
			const resolved = resolveImportPath(src, filePath);
			if (!resolved) return;
			p.node.specifiers.forEach((sp) => {
				if (sp.local && sp.local.name) bindings[sp.local.name] = resolved;
			});
		},
	});
	return bindings;
}

function detectRouterLikeIds(ast) {
	const ids = new Set();
	traverse(ast, {
		VariableDeclarator(p) {
			const init = p.node.init;
			if (!init) return;
			if (init.type === 'CallExpression') {
				const cal = init.callee;
				if (
					cal.type === 'MemberExpression' &&
					cal.property.type === 'Identifier' &&
					cal.property.name.toLowerCase() === 'router'
				) {
					if (p.node.id.type === 'Identifier') ids.add(p.node.id.name);
				}
				if (cal.type === 'Identifier' && (cal.name === 'Router' || cal.name === 'express')) {
					if (p.node.id.type === 'Identifier') ids.add(p.node.id.name);
				}
			}
		},
		Identifier(p) {
			if (p.node.name === 'app') ids.add('app');
		},
	});
	return ids;
}

const literalValue = (node) =>
	node &&
	(node.type === 'StringLiteral'
		? node.value
		: node.type === 'TemplateLiteral' && node.quasis.length === 1
			? node.quasis[0].value.cooked
			: null);

const getStartLine = (node) =>
	node && node.loc && node.loc.start && Number.isInteger(node.loc.start.line) ? node.loc.start.line : null;

const normalizePath = (prefix, segment) => {
	const a = String(prefix || '').replace(/\/+$/g, '');
	const b = String(segment || '').replace(/^\/+/g, '');
	const joined = [a, b].filter(Boolean).join('/');
	return ('/' + joined).replace(/\/+/g, '/');
};

function stripComments(text) {
	return text.replace(/\/\*[\s\S]*?\*\//g, '').replace(/(^|[^:])\/\/.*$/gm, '$1');
}

// ------------------------- module tags -------------------------
function extractModulesFromText(text) {
	const cleaned = text
		.split('\n')
		.map((s) => s.replace(/^\s*\*?\s?/, ''))
		.join('\n');
	const mods = new Set();
	const re = /@module\s+([^\n]+)/gi;
	let m;
	while ((m = re.exec(cleaned)) !== null) {
		const list = m[1]
			.split(',')
			.map((x) => x.trim())
			.filter(Boolean);
		for (const item of list) mods.add(item.toLowerCase());
	}
	return mods;
}

function getNearbyModules(ast, node, code) {
	if (!ast.comments || !ast.comments.length) return new Set();
	const mods = new Set();
	const nStart = Number.isInteger(node.start) ? node.start : 0;
	for (const c of ast.comments) {
		if (c.type !== 'CommentBlock' && c.type !== 'CommentLine') continue;
		const cEnd = Number.isInteger(c.end) ? c.end : -1;
		if (cEnd < 0 || cEnd > nStart) continue;
		const betweenRaw = code.slice(cEnd, nStart);
		const between = stripComments(betweenRaw);
		if (!/^[\s;]*$/.test(between)) continue;
		for (const m of extractModulesFromText(c.value || '')) mods.add(m);
	}
	return mods;
}

function getFileHeaderModules(ast, code) {
	if (!ast.comments || !ast.comments.length) return new Set();
	const firstStmtStart = (() => {
		const body = ast.program?.body || [];
		if (!body.length) return Infinity;
		const first = body[0];
		return Number.isInteger(first.start) ? first.start : Infinity;
	})();
	const mods = new Set();
	for (const c of ast.comments) {
		if (c.type !== 'CommentBlock' && c.type !== 'CommentLine') continue;
		const cEnd = Number.isInteger(c.end) ? c.end : -1;
		if (cEnd < 0 || cEnd > firstStmtStart) continue;
		const betweenRaw = code.slice(cEnd, firstStmtStart);
		void 0;
		const between = stripComments(betweenRaw);
		if (!/^[\s;]*$/.test(between)) continue;
		for (const m of extractModulesFromText(c.value || '')) mods.add(m);
	}
	return mods;
}

// ------------------------- route extraction -------------------------
function extractRoutesAndNested(filePath, prefix, inheritedModules, visited) {
	const code = readFile(filePath);
	if (!code) return [];
	const ast = babelParse(code, filePath);
	const imports = collectImports(ast, filePath);
	const fileHeaderMods = getFileHeaderModules(ast, code);
	const routerIds = detectRouterLikeIds(ast);
	const foundMap = new Map();

	traverse(ast, {
		CallExpression(p) {
			const callee = p.node.callee;
			if (callee.type !== 'MemberExpression') return;
			const obj = callee.object;
			if (obj.type !== 'Identifier') return;
			const prop = callee.property;
			if (prop.type !== 'Identifier') return;
			if (!routerIds.has(obj.name)) return;

			const localMods = getNearbyModules(ast, p.node, code);
			const name = prop.name.toLowerCase();
			const args = p.node.arguments || [];

			if (name === 'use') {
				// router.use([path?], ...middlewares, subRouter)
				let subPath = null;
				let startIdx = 0;
				if (args.length && literalValue(args[0]) != null) {
					subPath = literalValue(args[0]);
					startIdx = 1;
				}
				let handler = null;
				for (let i = args.length - 1; i >= startIdx; i--) {
					const a = args[i];
					if (!a) continue;
					if (a.type === 'CallExpression') continue; // factory middleware
					if (a.type === 'ArrayExpression' || a.type === 'ObjectExpression') continue;
					if (a.type === 'Identifier' || a.type === 'MemberExpression') {
						handler = a;
						break;
					}
				}
				const resolved = resolveUseHandlerToFile(handler, imports);
				const nextMods = new Set([...(inheritedModules || []), ...fileHeaderMods, ...localMods]);
				if (resolved) {
					const nextPrefix = subPath ? normalizePath(prefix, subPath) : prefix;
					const localVisited = new Set(visited);
					if (!localVisited.has(filePath)) localVisited.add(filePath);
					extractRoutesAndNested(resolved, nextPrefix, nextMods, localVisited).forEach((r) => {
						const key = `${r.file}|${r.method}|${r.path}`;
						if (!foundMap.has(key)) foundMap.set(key, r);
						else {
							const existing = foundMap.get(key);
							existing.modules = Array.from(new Set([...(existing.modules || []), ...(r.modules || [])]));
							existing.handlers = Array.from(
								new Set([...(existing.handlers || []), ...(r.handlers || [])])
							);
							existing.line =
								existing.line && r.line ? Math.min(existing.line, r.line) : (existing.line ?? r.line);
							foundMap.set(key, existing);
						}
					});
				}
				return;
			}

			if (!HTTP_METHODS.has(name)) return;
			const routePath = literalValue(args[0]) || '(dynamic)';
			const fullPath = normalizePath(prefix, routePath);
			const effectiveMods = new Set([...(inheritedModules || []), ...fileHeaderMods, ...localMods]);
			const line = getStartLine(p.node);

			const handlers = args
				.slice(1)
				.filter(
					(a) =>
						a.type === 'Identifier' ||
						a.type === 'MemberExpression' ||
						a.type === 'FunctionExpression' ||
						a.type === 'ArrowFunctionExpression' ||
						(a.type === 'CallExpression' && a.callee && a.callee.type === 'Identifier')
				);

			let controllerMethod = null;
			for (let i = handlers.length - 1; i >= 0; i--) {
				const h = handlers[i];
				if (h.type === 'MemberExpression' && h.property?.type === 'Identifier') {
					controllerMethod = h.property.name;
					break;
				}
			}

			const key = `${filePath}|${name}|${fullPath}`;
			const data = {
				file: filePath,
				method: name,
				path: fullPath,
				line,
				handlers,
				imports,
				modules: Array.from(effectiveMods),
				controllerMethod,
			};
			if (!foundMap.has(key)) foundMap.set(key, data);
			else {
				const existing = foundMap.get(key);
				existing.modules = Array.from(new Set([...(existing.modules || []), ...data.modules]));
				existing.handlers = Array.from(new Set([...(existing.handlers || []), ...handlers]));
				if (!existing.controllerMethod && controllerMethod) existing.controllerMethod = controllerMethod;
				existing.line = existing.line && line ? Math.min(existing.line, line) : (existing.line ?? line);
				foundMap.set(key, existing);
			}
		},
	});

	return Array.from(foundMap.values());
}

function resolveUseHandlerToFile(handler, imports) {
	if (!handler) return null;
	if (handler.type === 'Identifier') return imports[handler.name] || null;
	if (handler.type === 'MemberExpression' && handler.object?.type === 'Identifier') {
		return imports[handler.object.name] || null; // ns.default or ns.router
	}
	return null;
}

function resolveHandlerToControllerInfo(handler, imports) {
	if (!handler) return { controllerFile: null, controllerMethod: null };
	if (handler.type === 'Identifier') {
		const src = imports[handler.name];
		return { controllerFile: src || null, controllerMethod: null };
	}
	if (handler.type === 'MemberExpression' && handler.object.type === 'Identifier') {
		const src = imports[handler.object.name];
		const method = handler.property && handler.property.type === 'Identifier' ? handler.property.name : null;
		return { controllerFile: src || null, controllerMethod: method };
	}
	if (handler.type === 'CallExpression' && handler.callee.type === 'Identifier') {
		return { controllerFile: null, controllerMethod: null };
	}
	if (handler.type === 'FunctionExpression' || handler.type === 'ArrowFunctionExpression')
		return { controllerFile: null, controllerMethod: null };
	return { controllerFile: null, controllerMethod: null };
}

// ------------------------- targeted analysis -------------------------
const controllerFnCache = new Map(); // file|fnName -> { daos: Array<{daoFile, methodName}> }

function findControllerFunctionNode(ast, fnName) {
	let found = null;

	traverse(ast, {
		ExportDefaultDeclaration(p) {
			const d = p.node.declaration;
			if (d && d.type === 'ObjectExpression') {
				for (const prop of d.properties) {
					if (prop.type === 'ObjectProperty' || prop.type === 'ObjectMethod') {
						const key = prop.key;
						const keyName =
							key.type === 'Identifier' ? key.name : key.type === 'StringLiteral' ? key.value : null;
						if (keyName === fnName) {
							if (prop.type === 'ObjectMethod') found = prop;
							else if (
								prop.value &&
								(prop.value.type === 'FunctionExpression' ||
									prop.value.type === 'ArrowFunctionExpression')
							) {
								found = prop.value;
							}
						}
					}
				}
			}
		},
	});
	if (found) return found;

	traverse(ast, {
		ExportNamedDeclaration(p) {
			const d = p.node.declaration;
			if (!d) return;
			if (d.type === 'FunctionDeclaration') {
				if (d.id?.name === fnName) found = d;
			} else if (d.type === 'VariableDeclaration') {
				for (const decl of d.declarations) {
					if (decl.id?.type === 'Identifier' && decl.id.name === fnName) {
						const init = decl.init;
						if (init && (init.type === 'FunctionExpression' || init.type === 'ArrowFunctionExpression'))
							found = init;
					}
				}
			}
		},
		FunctionDeclaration(p) {
			if (p.node.id?.name === fnName) found = p.node;
		},
		VariableDeclarator(p) {
			if (p.node.id?.type === 'Identifier' && p.node.id.name === fnName) {
				const init = p.node.init;
				if (init && (init.type === 'FunctionExpression' || init.type === 'ArrowFunctionExpression'))
					found = init;
			}
		},
	});

	return found;
}

function analyzeControllerFunction(controllerFile, fnName) {
	const cacheKey = `${controllerFile}|${fnName || '(unknown)'}`;
	if (controllerFnCache.has(cacheKey)) return controllerFnCache.get(cacheKey);

	const code = readFile(controllerFile);
	if (!code) {
		const res = { daos: [] };
		controllerFnCache.set(cacheKey, res);
		return res;
	}
	const ast = babelParse(code, controllerFile);
	const imports = collectImports(ast, controllerFile);

	const daoIdents = new Map(
		Object.entries(imports)
			.filter(([, src]) => src && isDaoPath(src))
			.map(([ident, src]) => [ident, src])
	);

	let fnNode = null;
	if (fnName) fnNode = findControllerFunctionNode(ast, fnName);

	const calls = []; // { daoFile, methodName }
	const visit = (node) => {
		traverse(
			ast,
			{
				CallExpression(p) {
					const cal = p.node.callee;
					if (
						cal.type === 'MemberExpression' &&
						cal.object.type === 'Identifier' &&
						cal.property.type === 'Identifier'
					) {
						const obj = cal.object.name;
						const method = cal.property.name;
						const daoFile = daoIdents.get(obj);
						if (daoFile) calls.push({ daoFile, methodName: method });
					}
				},
			},
			undefined,
			undefined,
			node || undefined
		);
	};

	if (fnNode) {
		visit(fnNode); // precise: only the route’s controller function body
	} else if (!STRICT_CONTROLLER_METHOD_ONLY) {
		visit(null); // permissive fallback: whole file scan
	}

	const res = { daos: dedupeBy(calls, (x) => `${x.daoFile}|${x.methodName}`) };
	controllerFnCache.set(cacheKey, res);
	return res;
}

function analyzeDaoMethodsForModels(daoFile, methodNames) {
	const results = new Map(); // methodName -> Set<model>
	const code = readFile(daoFile);
	if (!code) {
		for (const m of methodNames) results.set(m, new Set());
		return results;
	}
	const ast = babelParse(code, daoFile);

	const methodNodes = new Map();
	traverse(ast, {
		ExportDefaultDeclaration(p) {
			const d = p.node.declaration;
			if (d && d.type === 'ObjectExpression') {
				for (const prop of d.properties) {
					if (prop.type === 'ObjectProperty' || prop.type === 'ObjectMethod') {
						const key = prop.key;
						const keyName =
							key.type === 'Identifier' ? key.name : key.type === 'StringLiteral' ? key.value : null;
						if (keyName && methodNames.includes(keyName)) {
							if (prop.type === 'ObjectMethod') methodNodes.set(keyName, prop);
							else if (
								prop.value &&
								(prop.value.type === 'FunctionExpression' ||
									prop.value.type === 'ArrowFunctionExpression')
							) {
								methodNodes.set(keyName, prop.value);
							}
						}
					}
				}
			}
		},
		ExportNamedDeclaration(p) {
			const d = p.node.declaration;
			if (!d) return;
			if (d.type === 'FunctionDeclaration') {
				const name = d.id?.name;
				if (name && methodNames.includes(name)) methodNodes.set(name, d);
			} else if (d.type === 'VariableDeclaration') {
				for (const decl of d.declarations) {
					const name = decl.id?.name;
					if (name && methodNames.includes(name)) {
						const init = decl.init;
						if (init && (init.type === 'FunctionExpression' || init.type === 'ArrowFunctionExpression')) {
							methodNodes.set(name, init);
						}
					}
				}
			}
		},
		FunctionDeclaration(p) {
			const name = p.node.id?.name;
			if (name && methodNames.includes(name)) methodNodes.set(name, p.node);
		},
		VariableDeclarator(p) {
			const name = p.node.id?.name;
			if (name && methodNames.includes(name)) {
				const init = p.node.init;
				if (init && (init.type === 'FunctionExpression' || init.type === 'ArrowFunctionExpression')) {
					methodNodes.set(name, init);
				}
			}
		},
	});

	for (const m of methodNames) {
		const node = methodNodes.get(m);
		const models = new Set();
		if (node) {
			traverse(
				ast,
				{
					MemberExpression(pp) {
						const obj = pp.node.object;
						const prop = pp.node.property;
						if (!prop || prop.type !== 'Identifier') return;
						if (obj.type === 'Identifier' && PRISMA_IDENTS.has(obj.name)) {
							const name = prop.name;
							if (!name.startsWith('$') && !PRISMA_IGNORE.has(name)) models.add(name);
						}
					},
				},
				undefined,
				undefined,
				node
			);
		}
		results.set(m, models);
	}
	return results;
}

function dedupeBy(arr, keyFn) {
	const seen = new Set();
	const out = [];
	for (const x of arr) {
		const k = keyFn(x);
		if (!seen.has(k)) {
			seen.add(k);
			out.push(x);
		}
	}
	return out;
}

// ------------------------- alias helpers -------------------------
// Alias must be [A-Za-z_][A-Za-z0-9_]* and unique per diagram.
function makeAlias(kind, base, used) {
	const raw = String(base || kind || 'X');
	const nameFromPath =
		raw.includes('/') || raw.includes('\\')
			? raw
					.split(/[\\/]/)
					.pop()
					.replace(/\.[a-zA-Z0-9]+$/, '')
			: raw;
	let alias = `${kind}_${nameFromPath}`.replace(/[^A-Za-z0-9_]/g, '_');
	if (!/^[A-Za-z_]/.test(alias)) alias = `n_${alias}`;
	let final = alias,
		i = 1;
	while (used.has(final)) final = `${alias}_${i++}`;
	used.add(final);
	return final;
}

// ------------------------- output -------------------------
function esc(s) {
	return sanitizeLabel(String(s || ''));
}

function toPlantUML(graph, showFunctions) {
	const lines = [];
	lines.push('@startuml');
	lines.push('allowmixing');
	lines.push('left to right direction');
	lines.push('hide stereotype');

	// ROUTES as components (alias-only, nice label in quotes)
	lines.push('package "Routes" as Routes {');
	for (const r of graph.routes.values()) {
		lines.push(`  component "${esc(r.label)}" as ${r.alias}`);
	}
	lines.push('}');

	// CONTROLLERS as classes with vertical method list
	lines.push('package "Controllers" as Controllers {');
	for (const c of graph.controllers.values()) {
		const title = TITLE_FROM_BASENAME ? prettyTitleFromFile(c.file, c.label, '') : c.label;
		const maybeStereo = ADD_STEREOTYPES ? ' <<controller>>' : '';
		lines.push(`  class "${esc(title)}"${maybeStereo} as ${c.alias} {`);
		if (showFunctions && c.functions && c.functions.size) {
			lines.push('    --');
			for (const fn of Array.from(c.functions).sort()) {
				lines.push(`    ${esc(fn)}()`);
			}
		}
		lines.push('  }');
		if (SHOW_PATH_NOTES && c.file) {
			lines.push(`  note right of ${c.alias} : ${esc(posixRel(ROOT, c.file))}`);
		}
	}
	lines.push('}');

	// DAOs as classes with vertical methods
	lines.push('package "DAOs" as DAOs {');
	for (const d of graph.daos.values()) {
		const title = TITLE_FROM_BASENAME ? prettyTitleFromFile(d.file, d.label, 'Dao') : (d.label || '') + 'Dao';
		const maybeStereo = ADD_STEREOTYPES ? ' <<dao>>' : '';
		lines.push(`  class "${esc(title)}"${maybeStereo} as ${d.alias} {`);
		if (d.functions && d.functions.size) {
			lines.push('    --');
			for (const fn of Array.from(d.functions).sort()) {
				lines.push(`    ${esc(fn)}()`);
			}
		}
		lines.push('  }');
		if (SHOW_PATH_NOTES && d.file) {
			lines.push(`  note right of ${d.alias} : ${esc(posixRel(ROOT, d.file))}`);
		}
	}
	lines.push('}');

	// MODELS as interfaces, clean names
	lines.push('package "Prisma Models" as Models {');
	for (const m of graph.models.values()) {
		const title = String(m.label);
		const maybeStereo = ADD_STEREOTYPES ? ' <<model>>' : '';
		lines.push(`  interface "${esc(title)}"${maybeStereo} as ${m.alias}`);
	}
	lines.push('}');

	// Edges use aliases (internal, safe)
	for (const e of graph.edges) lines.push(`${e.from} --> ${e.to}`);

	lines.push('@enduml');
	return lines.join('\n');
}

// ------------------------- build diagram -------------------------
function buildDiagram(routes, moduleName) {
	const controllers = new Map(); // file -> {alias,label,file,functions:Set<string>}
	const daos = new Map(); // file -> {alias,label,file,functions:Set<string>}
	const models = new Map(); // name -> {alias,label}
	const routeNodes = new Map(); // key -> {alias,label}
	const edges = [];
	const edgeSet = new Set();
	const usedAliases = new Set();

	const addEdge = (from, to) => {
		const k = `${from}>${to}`;
		if (!edgeSet.has(k)) {
			edgeSet.add(k);
			edges.push({ from, to });
		}
	};

	for (const r of routes) {
		const routeKey = `${r.file}|${r.method}|${r.path}`;
		if (!routeNodes.has(routeKey)) {
			const alias = makeAlias('route', `${r.method}_${r.path}`, usedAliases);
			const routeLabel = `${r.method.toUpperCase()} ${r.path} (${posixRel(ROOT, r.file)}:${r.line ?? '?'})`;
			routeNodes.set(routeKey, { alias, label: routeLabel });
		}
		const routeAlias = routeNodes.get(routeKey).alias;

		// Choose controller from handlers right-to-left
		let ctrlInfo = { controllerFile: null, controllerMethod: r.controllerMethod || null };
		if (r.handlers && r.handlers.length) {
			for (let i = r.handlers.length - 1; i >= 0; i--) {
				const rc = resolveHandlerToControllerInfo(r.handlers[i], r.imports);
				if (rc && rc.controllerFile) {
					ctrlInfo = rc;
					break;
				}
			}
		}

		let controllerAlias;
		if (ctrlInfo.controllerFile) {
			const ctrlKey = ctrlInfo.controllerFile;
			if (!controllers.has(ctrlKey)) {
				const display = posixRel(ROOT, ctrlKey) || ctrlKey;
				controllers.set(ctrlKey, {
					alias: makeAlias('ctrl', display, usedAliases),
					label: display,
					file: ctrlKey,
					functions: new Set(),
				});
			}
			const ctrlNode = controllers.get(ctrlKey);
			if (ctrlInfo.controllerMethod) ctrlNode.functions.add(ctrlInfo.controllerMethod);
			controllerAlias = ctrlNode.alias;

			// analyze only the specific controller function
			const { daos: daoCalls } = analyzeControllerFunction(ctrlKey, ctrlInfo.controllerMethod);

			if (!STRICT_CONTROLLER_METHOD_ONLY && (!ctrlInfo.controllerMethod || daoCalls.length === 0)) {
				// permissive: nothing special, continue with whatever we found
			}

			for (const call of daoCalls) {
				// DAO node
				if (!daos.has(call.daoFile)) {
					const display = posixRel(ROOT, call.daoFile);
					daos.set(call.daoFile, {
						alias: makeAlias('dao', display, usedAliases),
						label: display,
						file: call.daoFile,
						functions: new Set(),
					});
				}
				const daoNode = daos.get(call.daoFile);
				if (call.methodName) daoNode.functions.add(call.methodName);
				addEdge(controllerAlias, daoNode.alias);

				// models used by that specific DAO method
				const modelMap = analyzeDaoMethodsForModels(call.daoFile, [call.methodName]);
				const modelsForMethod = modelMap.get(call.methodName) || new Set();
				for (const modelName of modelsForMethod) {
					if (!models.has(modelName)) {
						models.set(modelName, {
							alias: makeAlias('model', modelName, usedAliases),
							label: modelName,
						});
					}
					addEdge(daoNode.alias, models.get(modelName).alias);
				}
			}
		} else {
			// inline / unresolved controller fallback
			const pseudoKey = `${r.file}`;
			if (!controllers.has(pseudoKey)) {
				controllers.set(pseudoKey, {
					alias: makeAlias('ctrl', '(inline)', usedAliases),
					label: '(inline controller)',
					file: r.file,
					functions: new Set(),
				});
			}
			controllerAlias = controllers.get(pseudoKey).alias;
		}

		addEdge(routeAlias, controllerAlias);
	}

	const graph = {
		root: ROOT,
		routes: routeNodes,
		controllers,
		daos,
		models,
		edges,
	};
	return toPlantUML(graph, SHOW_CONTROLLER_FUNCTIONS);
}

// ------------------------- main -------------------------
run().catch((e) => {
	console.error(e);
	process.exit(1);
});
async function run() {
	const fallbackEntries = ['../routes/api.routes.js', '../routes/index.routes.js'];

	const cliArg = process.argv.find((a) => a.startsWith('--entries='));
	const cliEntries = cliArg
		? cliArg
				.replace('--entries=', '')
				.split(',')
				.map((s) => s.trim())
				.filter(Boolean)
		: [];
	const envEntries = (process.env.ENTRY_ROUTES || '')
		.split(',')
		.map((s) => s.trim())
		.filter(Boolean);
	const entriesRaw = envEntries.length ? envEntries : cliEntries.length ? cliEntries : fallbackEntries;

	const entries = entriesRaw
		.map((p) => path.resolve(ROOT, p))
		.filter((p) => {
			const ok = fs.existsSync(p);
			if (!ok) console.warn(`[warn] entry not found: ${p}`);
			return ok;
		});
	if (!entries.length) {
		console.error('[error] No valid entry files. Set ENTRY_ROUTES env or --entries=...');
		process.exit(1);
	}

	await fsp.mkdir(path.resolve(ROOT, 'diagrams'), { recursive: true });

	const routesMap = new Map();
	const visitedEntrypoints = new Set();

	for (const entry of entries) {
		if (visitedEntrypoints.has(entry)) continue;
		visitedEntrypoints.add(entry);

		const found = extractRoutesAndNested(entry, '', new Set(), new Set());
		for (const r of found) {
			const key = `${r.file}|${r.method}|${r.path}`;
			if (!routesMap.has(key)) routesMap.set(key, { ...r });
			else {
				const ex = routesMap.get(key);
				ex.modules = Array.from(new Set([...(ex.modules || []), ...(r.modules || [])]));
				ex.handlers = Array.from(new Set([...(ex.handlers || []), ...(r.handlers || [])]));
				if (!ex.imports && r.imports) ex.imports = r.imports;
				if (!ex.controllerMethod && r.controllerMethod) ex.controllerMethod = r.controllerMethod;
				ex.line = ex.line && r.line ? Math.min(ex.line, r.line) : (ex.line ?? r.line);
				routesMap.set(key, ex);
			}
		}
	}

	const allRoutes = Array.from(routesMap.values());

	// group by module
	const moduleSet = new Set();
	const unassigned = [];
	for (const r of allRoutes) {
		if (r.modules && r.modules.length) r.modules.forEach((m) => moduleSet.add(m));
		else unassigned.push(r);
	}

	// emit
	for (const mod of moduleSet) {
		const moduleRoutes = allRoutes.filter((r) => r.modules && r.modules.includes(mod));
		const puml = buildDiagram(moduleRoutes, mod);
		const outFile = OUT_PATTERN(mod);
		await fsp.writeFile(outFile, puml, 'utf8');
		console.log(`[module:${mod}] -> ${outFile}`);
	}

	if (unassigned.length) {
		const puml = buildDiagram(unassigned, UNASSIGNED_NAME);
		const outFile = OUT_PATTERN(UNASSIGNED_NAME);
		await fsp.writeFile(outFile, puml, 'utf8');
		console.log(`[${UNASSIGNED_NAME}] -> ${outFile}`);
	} else {
		console.log('[unassigned] none');
	}
}
