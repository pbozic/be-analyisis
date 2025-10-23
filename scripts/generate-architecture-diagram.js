#!/usr/bin/env node
/**
 * generate-architecture-diagram.mjs — ESM, zero-config, module-aware
 * -------------------------------------------------------------------
 * Output shape (per module + unassigned):
 *   Route  -->  Controller (FILE)  -->  DAO (interface)  -->  Model (interface)
 *
 * Module tagging (JSDoc-style block immediately above a route or a `router.use`):
 *   /**
 *    * @module ride,delivery,
 *    *\/  // (commas / spaces / trailing comma OK)
 *
 * Rules
 * - `@module` on `router.use('/x', sub)` applies to all nested routes (inheritance).
 * - A route adds its own modules; effective modules = UNION(parent + route).
 * - We output **one diagram per module**, plus **one extra diagram for routes with NO module**.
 * - Controllers are **file-level components** (not per-method).
 * - Controller → DAO, DAO → Model (DAOs & Models render as `interface`).
 * - **Last-arg-is-controller** with fallback: we scan handler args **from right to left** and pick the
 *   first one that resolves to a controller import; middleware like `joi(schema)` is ignored.
 * - Labels are sanitized to avoid PlantUML breaking on newlines and Windows paths.
 *
 * Run:
 *   npm i -D fast-glob @babel/parser @babel/traverse
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
const ROUTES_GLOB = '../routes/**/*.{js,ts,tsx,jsx}';
const OUT_PATTERN = (mod) => path.resolve(ROOT, `diagrams/express-map.${slug(mod)}.puml`);
const UNASSIGNED_NAME = 'unassigned';

// How many lines after a comment the @module tag should apply to
const MODULE_LOOKAHEAD_LINES = 1;
// How many lines from the top counts as a file-level header window
const HEADER_WINDOW_LINES = 30;

const HTTP_METHODS = new Set(['get', 'post', 'put', 'delete', 'patch', 'options', 'head', 'all']);
const PRISMA_IDENTS = new Set(['prisma', 'tx']);
const PRISMA_IGNORE = new Set(['$transaction', '$queryRaw', '$executeRaw', '$on', '$connect', '$disconnect']);

// ------------------------- utils -------------------------
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
	String(s)
		.replace(/\\n/g, ' ') // literal \n sequences
		.replace(/\r?\n/g, ' ') // real newlines
		.replace(/\\/g, '/') // windows paths
		.replace(/"/g, '\\"'); // escape quotes

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
	const a = String(prefix || '').replace(/\/+$/g, ''); // trim trailing
	const b = String(segment || '').replace(/^\/+/g, ''); // trim leading
	const joined = [a, b].filter(Boolean).join('/');
	return ('/' + joined).replace(/\/+/g, '/'); // ensure single leading slash
};
function findMountedFiles(filePath, acc = new Set(), seen = new Set()) {
	if (seen.has(filePath)) return acc;
	seen.add(filePath);
	const code = readFile(filePath);
	if (!code) return acc;
	const ast = babelParse(code, filePath);
	const imports = collectImports(ast, filePath);

	traverse(ast, {
		CallExpression(p) {
			const callee = p.node.callee;
			if (callee.type !== 'MemberExpression') return;
			const obj = callee.object;
			const prop = callee.property;
			if (obj.type !== 'Identifier' || prop.type !== 'Identifier') return;
			if (prop.name.toLowerCase() !== 'use') return;

			const args = p.node.arguments || [];
			// same shape as your extractor
			const handler = args.length === 1 ? args[0] : args[1];
			const resolved = resolveUseHandlerToFile(handler, imports, filePath);
			if (resolved && !acc.has(resolved)) {
				acc.add(resolved);
				findMountedFiles(resolved, acc, seen);
			}
		},
	});
	return acc;
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

// union of all @module tags within MODULE_LOOKAHEAD_LINES above the node
function getNearbyModules(ast, node, lookaheadLines = MODULE_LOOKAHEAD_LINES) {
	if (!ast.comments || !ast.comments.length) return new Set();
	const mods = new Set();
	const nStart = node.start ?? node.loc?.start?.index ?? 0;
	const nLine = node.loc?.start?.line ?? Infinity;
	for (const c of ast.comments) {
		if (c.type !== 'CommentBlock' && c.type !== 'CommentLine') continue;
		const cEnd = c.end ?? 0;
		const cLine = c.loc?.end?.line ?? 0;
		if (cEnd <= nStart) {
			const delta = nLine - cLine;
			if (delta >= 0 && delta <= lookaheadLines) {
				for (const m of extractModulesFromText(c.value || '')) mods.add(m);
			}
		}
	}
	return mods;
}

// file-level header modules (first HEADER_WINDOW_LINES lines)
function getFileHeaderModules(ast, headerWindowLines = HEADER_WINDOW_LINES) {
	if (!ast.comments || !ast.comments.length) return new Set();
	const mods = new Set();
	for (const c of ast.comments) {
		if (c.type !== 'CommentBlock' && c.type !== 'CommentLine') continue;
		const cEndLine = c.loc?.end?.line ?? Infinity;
		if (cEndLine <= headerWindowLines) {
			for (const m of extractModulesFromText(c.value || '')) mods.add(m);
		}
	}
	return mods;
}

// ------------------------- extraction -------------------------
function extractRoutesAndNested(filePath, prefix, inheritedModules, visited) {
	const code = readFile(filePath);
	if (!code) return [];
	const ast = babelParse(code, filePath);
	const imports = collectImports(ast, filePath);
	const fileHeaderMods = getFileHeaderModules(ast);
	const routerIds = detectRouterLikeIds(ast);
	const foundMap = new Map(); // key: file|method|path -> route

	traverse(ast, {
		CallExpression(p) {
			const callee = p.node.callee;
			if (callee.type !== 'MemberExpression') return;
			const obj = callee.object;
			if (obj.type !== 'Identifier') return;
			const prop = callee.property;
			if (prop.type !== 'Identifier') return;
			if (!routerIds.has(obj.name)) return;

			const localMods = getNearbyModules(ast, p.node);
			const name = prop.name.toLowerCase();
			const args = p.node.arguments || [];

			if (name === 'use') {
				let subPath = null,
					handler = null;
				if (args.length === 1) handler = args[0];
				else if (args.length >= 2) {
					subPath = literalValue(args[0]);
					handler = args[1];
				}
				const resolved = resolveUseHandlerToFile(handler, imports, filePath);
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

			// collect ALL handler-like args; we'll decide the controller later (right-to-left)
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

			const key = `${filePath}|${name}|${fullPath}`;
			const data = {
				file: filePath,
				method: name,
				path: fullPath,
				line,
				handlers,
				imports,
				modules: Array.from(effectiveMods),
			};
			if (!foundMap.has(key)) foundMap.set(key, data);
			else {
				const existing = foundMap.get(key);
				existing.modules = Array.from(new Set([...(existing.modules || []), ...data.modules]));
				existing.handlers = Array.from(new Set([...(existing.handlers || []), ...handlers]));
				existing.line = existing.line && line ? Math.min(existing.line, line) : (existing.line ?? line);
				foundMap.set(key, existing);
			}
		},
	});

	return Array.from(foundMap.values());
}

function resolveUseHandlerToFile(handler, imports, fromFile) {
	if (!handler) return null;
	if (handler.type === 'Identifier') return imports[handler.name] || null;
	// import-only; ignore require() & inline middleware
	return null;
}

function resolveHandlerToController(handler, imports) {
	if (!handler) return null;
	if (handler.type === 'Identifier') {
		const src = imports[handler.name];
		if (src && isControllerPath(src)) return { controllerFile: src };
		return { controllerFile: src || null };
	}
	if (handler.type === 'MemberExpression' && handler.object.type === 'Identifier') {
		const src = imports[handler.object.name];
		if (src && isControllerPath(src)) return { controllerFile: src };
		return { controllerFile: src || null };
	}
	if (handler.type === 'CallExpression' && handler.callee.type === 'Identifier') {
		// middleware factory like joi(schema) — not a controller, skip
		return { controllerFile: null };
	}
	if (handler.type === 'FunctionExpression' || handler.type === 'ArrowFunctionExpression')
		return { controllerFile: null };
	return null;
}

// ------------------------- analysis -------------------------
const controllerAnalysisCache = new Map(); // file -> { daos:Set<string> }
const daoModelCache = new Map(); // file -> Set<string>

function analyzeControllerFile(controllerFile) {
	if (controllerAnalysisCache.has(controllerFile)) return controllerAnalysisCache.get(controllerFile);
	const code = readFile(controllerFile);
	if (!code) return { daos: new Set() };
	const ast = babelParse(code, controllerFile);
	const imports = collectImports(ast, controllerFile);
	const daoIdents = new Set(
		Object.entries(imports)
			.filter(([, src]) => src && isDaoPath(src))
			.map(([ident]) => ident)
	);
	const daos = new Set();
	traverse(ast, {
		CallExpression(pp) {
			const cal = pp.node.callee;
			if (cal.type === 'Identifier') {
				if (daoIdents.has(cal.name)) daos.add(imports[cal.name]);
			} else if (cal.type === 'MemberExpression' && cal.object.type === 'Identifier') {
				if (daoIdents.has(cal.object.name)) daos.add(imports[cal.object.name]);
			}
		},
	});
	const res = { daos };
	controllerAnalysisCache.set(controllerFile, res);
	return res;
}

function analyzeDaoFile(daoFile) {
	if (daoModelCache.has(daoFile)) return daoModelCache.get(daoFile);
	const code = readFile(daoFile);
	if (!code) return new Set();
	const ast = babelParse(code, daoFile);
	const models = new Set();
	traverse(ast, {
		MemberExpression(p) {
			const obj = p.node.object;
			const prop = p.node.property;
			if (prop && prop.type === 'Identifier') {
				if (obj.type === 'Identifier' && PRISMA_IDENTS.has(obj.name)) {
					const name = prop.name;
					if (!name.startsWith('$') && !PRISMA_IGNORE.has(name)) models.add(name);
				}
			}
		},
	});
	daoModelCache.set(daoFile, models);
	return models;
}

// ------------------------- output -------------------------
const makeId = (prefix, key) =>
	`${prefix}_${Buffer.from(key)
		.toString('base64')
		.replace(/[^a-zA-Z0-9]/g, '')}`;

function toPlantUML(graph) {
	const lines = [];
	lines.push('@startuml');
	lines.push('skinparam componentStyle rectangle');
	lines.push('left to right direction');
	lines.push('hide stereotype');

	lines.push('package "Routes" as Routes {');
	for (const r of graph.routes.values()) {
		lines.push(`  component "${sanitizeLabel(r.label)}" as ${r.id}`);
	}
	lines.push('}');

	lines.push('package "Controllers" as Controllers {');
	for (const c of graph.controllers.values()) {
		lines.push(`  component "${sanitizeLabel(c.label)}" as ${c.id}`);
	}
	lines.push('}');

	lines.push('package "DAOs" as DAOs {');
	for (const d of graph.daos.values()) {
		lines.push(`  interface "${sanitizeLabel(d.label)}" as ${d.id}`);
	}
	lines.push('}');

	lines.push('package "Prisma Models" as Models {');
	for (const m of graph.models.values()) {
		lines.push(`  interface "${sanitizeLabel(m.label)}" as ${m.id}`);
	}
	lines.push('}');

	for (const e of graph.edges) lines.push(`${e.from} --> ${e.to}`);
	lines.push('@enduml');
	return lines.join('\n');
}

function buildDiagram(routes, moduleName) {
	const controllers = new Map(); // file -> {id,label,file}
	const daos = new Map(); // file -> {id,label,file}
	const models = new Map(); // name -> {id,label}
	const routeNodes = new Map(); // key -> {id,label}
	const edges = []; // {from,to}
	const edgeSet = new Set();
	const addEdge = (from, to) => {
		const k = `${from}>${to}`;
		if (!edgeSet.has(k)) {
			edgeSet.add(k);
			edges.push({ from, to });
		}
	};

	for (let idx = 0; idx < routes.length; idx++) {
		const r = routes[idx];
		const routeKey = `${r.file}|${r.method}|${r.path}`;
		if (!routeNodes.has(routeKey)) {
			const routeId = makeId('route', `${moduleName || UNASSIGNED_NAME}|${r.method}:${r.path}:${r.file}`);
			const routeLabel = `${r.method.toUpperCase()} ${r.path} (${posixRel(ROOT, r.file)}:${r.line ?? '?'})`;
			routeNodes.set(routeKey, { id: routeId, label: routeLabel });
		}
		const routeId = routeNodes.get(routeKey).id;

		// Choose controller from handlers right-to-left (last-arg-wins semantics)
		let controllerFile = null;
		if (r.handlers && r.handlers.length) {
			for (let i = r.handlers.length - 1; i >= 0; i--) {
				const rc = resolveHandlerToController(r.handlers[i], r.imports);
				if (rc && rc.controllerFile) {
					controllerFile = rc.controllerFile;
					break;
				}
			}
		} else if (r.handler) {
			const rc = resolveHandlerToController(r.handler, r.imports);
			controllerFile = rc && rc.controllerFile;
		}

		let controllerId;
		if (controllerFile) {
			const ctrlKey = controllerFile;
			if (!controllers.has(ctrlKey)) {
				const label = posixRel(ROOT, controllerFile) || controllerFile;
				controllers.set(ctrlKey, {
					id: makeId('ctrl', `${moduleName || UNASSIGNED_NAME}|${ctrlKey}`),
					label,
					file: controllerFile,
				});
			}
			controllerId = controllers.get(ctrlKey).id;

			const { daos: ctrlDaos } = analyzeControllerFile(controllerFile);
			for (const daoFile of ctrlDaos) {
				if (!daos.has(daoFile))
					daos.set(daoFile, {
						id: makeId('dao', `${moduleName || UNASSIGNED_NAME}|${daoFile}`),
						label: posixRel(ROOT, daoFile),
						file: daoFile,
					});
				const daoNode = daos.get(daoFile);
				addEdge(controllerId, daoNode.id);

				const daoModels = analyzeDaoFile(daoFile);
				for (const modelName of daoModels) {
					if (!models.has(modelName))
						models.set(modelName, {
							id: makeId('model', `${moduleName || UNASSIGNED_NAME}|${modelName}`),
							label: modelName,
						});
					addEdge(daoNode.id, models.get(modelName).id);
				}
			}
		} else {
			// Inline or unresolved -> pseudo controller per route file (still de-duped)
			const pseudoKey = `${r.file}`;
			if (!controllers.has(pseudoKey))
				controllers.set(pseudoKey, {
					id: makeId('ctrl', `${moduleName || UNASSIGNED_NAME}|${pseudoKey}`),
					label: '(inline controller)',
					file: r.file,
				});
			controllerId = controllers.get(pseudoKey).id;
		}

		addEdge(routeId, controllerId); // Route -> Controller
	}

	const graph = { root: ROOT, routes: routeNodes, controllers, daos, models, edges };
	return toPlantUML(graph);
}

// ------------------------- main -------------------------
run();
async function run() {
	// Entry files:
	// 1) ENV: ENTRY_ROUTES="/abs/or/relative/a.js,/b.ts"
	// 2) CLI:  node script.mjs --entries=routes/api.routes.js,admin.routes.ts
	// 3) Fallback constant (edit to your taste)
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

	// Normalize to absolute paths and ensure they exist
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

	// Crawl only from the given entries. We do NOT glob everything.
	const routesMap = new Map();
	const visitedEntrypoints = new Set(); // avoid duplicate entry scans if someone passes same file twice

	for (const entry of entries) {
		if (visitedEntrypoints.has(entry)) continue;
		visitedEntrypoints.add(entry);

		// Build the full reachable set under this entry (not strictly required,
		// but useful if you want to print/debug). We won’t scan them separately;
		// extraction will descend as it finds router.use handlers.
		// Keeping this call lets us validate mounts early.
		findMountedFiles(entry); // populates nothing global; just sanity checking traversal

		// Extract everything reachable from this entry
		const found = extractRoutesAndNested(entry, '', new Set(), new Set());
		for (const r of found) {
			const key = `${r.file}|${r.method}|${r.path}`;
			if (!routesMap.has(key)) {
				routesMap.set(key, { ...r });
			} else {
				const ex = routesMap.get(key);
				ex.modules = Array.from(new Set([...(ex.modules || []), ...(r.modules || [])]));
				ex.handlers = Array.from(new Set([...(ex.handlers || []), ...(r.handlers || [])]));
				if (!ex.imports && r.imports) ex.imports = r.imports;
				ex.line = ex.line && r.line ? Math.min(ex.line, r.line) : (ex.line ?? r.line);
				routesMap.set(key, ex);
			}
		}
	}

	const allRoutes = Array.from(routesMap.values());

	// Group by module
	const moduleSet = new Set();
	const unassigned = [];
	for (const r of allRoutes) {
		if (r.modules && r.modules.length) r.modules.forEach((m) => moduleSet.add(m));
		else unassigned.push(r);
	}

	// Emit
	await fsp.mkdir(path.resolve(ROOT, 'diagrams'), { recursive: true });

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
