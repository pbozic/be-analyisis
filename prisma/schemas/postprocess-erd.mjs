// Post-process ERD.md to add Mermaid many-to-many shortcut edges for hidden junction models
// Scans all .prisma files under prisma/schemas for models containing '@hidden'
// For each hidden model that looks like a junction (exactly 2 @relation fields),
// this script adds an idempotent erDiagram block with A }o--o{ B : via junction_table

import fs from 'fs/promises';
import path from 'path';

import fg from 'fast-glob';

const ROOT = path.resolve(process.cwd());
const SCHEMAS_DIR = path.join(ROOT, 'prisma', 'schemas');
const ERD_MD_PATH = path.join(SCHEMAS_DIR, 'ERD.md');

/**
 * Parse all Prisma models in given content.
 * Returns array of {
 *   name,
 *   tableName,
 *   body,
 *   isHidden,
 *   namespaces: string[],
 *   relations: Array<{ field, targetModel, namespaces?: string[] }>
 * }
 */
function parseModels(prismaContent) {
	const models = [];
	// Capture leading doc/comments before model and the model body
	const modelRegex = /((?:\s*(?:\/\/\/.*|\/\*[\s\S]*?\*\/|\/\/.*)\s*)*)model\s+(\w+)\s*\{([\s\S]*?)\}/g;
	let m;
	while ((m = modelRegex.exec(prismaContent)) !== null) {
		const leading = m[1] || '';
		const name = m[2];
		const body = m[3];
		const isHidden = leading.includes('@hidden') || body.includes('@hidden') || /\/\/[/*\s]*@hidden/.test(leading) || /\/\/[/*\s]*@hidden/.test(body);
		// model-level map
		let tableName = name;
		const mapMatch = body.match(/@@map\((['"])(.+?)\1\)/);
		if (mapMatch) tableName = mapMatch[2];

		// collect namespaces from leading doc/comments (allow multiple)
		const namespaces = [];
		const nsRegex = /@namespace\s+([A-Za-z0-9_]+)/g;
		let ns;
		while ((ns = nsRegex.exec(leading)) !== null) {
			namespaces.push(ns[1]);
		}

		// collect relation fields: <field> <TargetModel> @relation(...)
		const relations = [];
		const lines = body.split(/\r?\n/);
		for (const line of lines) {
			// ignore composite type definitions and comments
			if (/^\s*\//.test(line)) continue;
			const relMatch = line.match(/^\s*(\w+)\s+([A-Za-z_]\w*)\s*(\?|\[])?.*?@relation\b/);
			if (relMatch) {
				const field = relMatch[1];
				const targetModel = relMatch[2];
				// capture any inline @namespace annotations on this field line
				const inlineNs = [];
				const inlineNsRegex = /@namespace\s+([A-Za-z0-9_]+)/g;
				let mNs;
				while ((mNs = inlineNsRegex.exec(line)) !== null) inlineNs.push(mNs[1]);
				relations.push({ field, targetModel, namespaces: inlineNs });
			}
		}

		models.push({ name, tableName, body, isHidden, relations, namespaces });
	}
	return models;
}

/** Create Mermaid line for A }o--o{ B : via junction (no trailing newline) */
function makeEdgeLine(a, b, via) {
	return `"${a}" }o--o{ "${b}" : "via ${via.trim()}"`;
}

async function main() {
	// Discover prisma schema files
	const prismaFiles = await fg(['*.prisma'], { cwd: SCHEMAS_DIR, absolute: true });
	console.log('prismaFiles', prismaFiles);
	if (prismaFiles.length === 0) return;

	// Parse all models and build table map
	const allModels = [];
	for (const file of prismaFiles) {
		const content = await fs.readFile(file, 'utf8');
		allModels.push(...parseModels(content));
	}
	const modelToTable = new Map(allModels.map(m => [m.name, m.tableName]));
	const modelToNamespaces = new Map(allModels.map(m => [m.name, m.namespaces || []]));
	const modelNames = new Set(allModels.map(m => m.name));

	// Enrich relations to include implicit ones (field type references another model)
	for (const m of allModels) {
		const relSet = new Set(m.relations.map(r => `${r.field}:${r.targetModel}`));
		const lines = m.body.split(/\r?\n/);
		for (const line of lines) {
			if (/^\s*\//.test(line)) continue;
			const m2 = line.match(/^\s*(\w+)\s+([A-Za-z_]\w*)(?:\[\])?(?:\?|)\b/);
			if (m2) {
				const field = m2[1];
				const type = m2[2];
				if (modelNames.has(type)) {
					const key = `${field}:${type}`;
					if (!relSet.has(key)) {
						// capture any inline @namespace annotations on this field line
						const inlineNs = [];
						const inlineNsRegex = /@namespace\s+([A-Za-z0-9_]+)/g;
						let mNs;
						while ((mNs = inlineNsRegex.exec(line)) !== null) inlineNs.push(mNs[1]);
						m.relations.push({ field, targetModel: type, namespaces: inlineNs });
						relSet.add(key);
					}
				}
			}
		}
	}
	// Find hidden junction models with at least 2 distinct relation targets
	const junctions = allModels.filter(m => m.isHidden).map(m => {
		const targets = Array.from(new Set(m.relations.map(r => r.targetModel).filter(Boolean)));
		return { ...m, targets };
	}).filter(m => m.targets.length >= 2);

	if (junctions.length === 0) {
		// Nothing to do; ensure we don't leave stale block
		console.log('No hidden junction models found; skipping ERD.md update');
		return;
	}

	// Similarity helpers
	const normalize = (s) => (s || '').toString().toLowerCase().replace(/[_\-\s]+/g, '');
	const longestCommonSubstr = (a, b) => {
		a = normalize(a); b = normalize(b);
		const n = a.length, m = b.length;
		if (!n || !m) return 0;
		const dp = Array(n + 1).fill(0).map(() => Array(m + 1).fill(0));
		let best = 0;
		for (let i = 1; i <= n; i++) {
			for (let j2 = 1; j2 <= m; j2++) {
				if (a[i - 1] === b[j2 - 1]) {
					dp[i][j2] = dp[i - 1][j2 - 1] + 1;
					if (dp[i][j2] > best) best = dp[i][j2];
				}
			}
		}
		return best;
	};
	const similarity = (a, b) => {
		const lcs = longestCommonSubstr(a, b);
		return lcs / Math.max(normalize(a).length || 1, normalize(b).length || 1);
	};

	// Parse ERD namespaces
	let erd = await fs.readFile(ERD_MD_PATH, 'utf8');
	const nsHeadings = Array.from(erd.matchAll(/^##\s+(.+)$/gm)).map(m => m[1]);
	const hasNamespace = (ns) => nsHeadings.includes(ns);

	// Build per-namespace unique many-to-many edges
	const edgesByNamespace = new Map(); // namespace -> Set(lines)
	for (const j of junctions) {
		// Map target -> fields used in this junction
		const fieldsByTarget = new Map();
		const fieldNamespacesByTarget = new Map(); // target -> Set(namespaces)
		for (const r of j.relations) {
			if (!j.targets.includes(r.targetModel)) continue;
			if (!fieldsByTarget.has(r.targetModel)) fieldsByTarget.set(r.targetModel, new Set());
			fieldsByTarget.get(r.targetModel).add(r.field);
			if (r.namespaces && r.namespaces.length) {
				if (!fieldNamespacesByTarget.has(r.targetModel)) fieldNamespacesByTarget.set(r.targetModel, new Set());
				for (const ns of r.namespaces) fieldNamespacesByTarget.get(r.targetModel).add(ns);
			}
		}

		// Try separator-aware hub edges: pre (main) -> post (others)
		const lines = j.body.split(/\r?\n/);
		const sepIndex = lines.findIndex(l => /SEPARATOR/i.test(l));
		let pairs = [];
		if (sepIndex !== -1) {
			const preTargets = new Set();
			const postTargets = new Set();
			const collectTargets = (arr, set) => {
				for (const line of arr) {
					if (/^\s*\//.test(line)) continue;
					const m2 = line.match(/^\s*(\w+)\s+([A-Za-z_]\w*)(?:\[\])?(?:\?|)\b/);
					if (m2) {
						const type = m2[2];
						if (modelNames.has(type)) set.add(type);
					}
				}
			};
			collectTargets(lines.slice(0, sepIndex), preTargets);
			collectTargets(lines.slice(sepIndex + 1), postTargets);
			if (preTargets.size && postTargets.size) {
				for (const a of preTargets) for (const b of postTargets) pairs.push([a, b]);
			}
		}
		// Fallback to all unordered pairs when separator not applicable
		if (pairs.length === 0) {
			for (let i = 0; i < j.targets.length; i++) {
				for (let k = i + 1; k < j.targets.length; k++) {
					pairs.push([j.targets[i], j.targets[k]]);
				}
			}
		}

		for (const [mA, mB] of pairs) {
			const aTable = modelToTable.get(mA) || mA;
			const bTable = modelToTable.get(mB) || mB;
			const junctionTable = j.tableName || j.name;
			const line = makeEdgeLine(aTable, bTable, junctionTable);

			// Candidate namespaces: junction + each model's namespaces
			const candidateNS = new Set([...(j.namespaces || []), ...(modelToNamespaces.get(mA) || []), ...(modelToNamespaces.get(mB) || [])]);
			const candidates = Array.from(candidateNS).filter(hasNamespace);
			if (candidates.length === 0) continue;

			// If inline @namespace annotations are present on the junction fields referencing mA/mB,
			// prefer inserting into ALL of those annotated namespaces (idempotently)
			const annotatedNs = new Set([...(fieldNamespacesByTarget.get(mA) || []), ...(fieldNamespacesByTarget.get(mB) || [])]);
			const annotatedCandidates = Array.from(annotatedNs).filter(hasNamespace);
			if (annotatedCandidates.length > 0) {
				for (const ns of annotatedCandidates) {
					if (!edgesByNamespace.has(ns)) edgesByNamespace.set(ns, new Set());
					edgesByNamespace.get(ns).add(line);
				}
				continue; // handled via explicit annotations; skip similarity heuristic
			}

			const fieldAList = Array.from(fieldsByTarget.get(mA) || []);
			const fieldBList = Array.from(fieldsByTarget.get(mB) || []);
			let bestNs = candidates[0];
			let bestScore = -1;
			for (const ns of candidates) {
				const scores = [];
				for (const f of fieldAList) scores.push(similarity(ns, f));
				for (const f of fieldBList) scores.push(similarity(ns, f));
				scores.push(similarity(ns, mA));
				scores.push(similarity(ns, mB));
				const score = Math.max(...(scores.length ? scores : [0]));
				if (score > bestScore) {
					bestScore = score;
					bestNs = ns;
				}
			}

			if (!edgesByNamespace.has(bestNs)) edgesByNamespace.set(bestNs, new Set());
			edgesByNamespace.get(bestNs).add(line);
		}
	}

	if (edgesByNamespace.size === 0) {
		console.log('No eligible namespaces found for hidden junctions; skipping ERD.md update');
		return;
	}

	const insertIntoNamespace = (md, namespace, lines) => {
		const nsHeaderRe = new RegExp(`(^|\n)##\\s+${namespace.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\s*(?:\n|$)`, 'm');
		const headerMatch = md.match(nsHeaderRe);
		if (!headerMatch) return { md, inserted: 0, reason: 'no-section' };
		const startIdx = headerMatch.index + headerMatch[0].length;
		// Find the first mermaid erDiagram block after this header
		const afterHeader = md.slice(startIdx);
		const mermaidStart = afterHeader.search(/```\s*mermaid[\s\S]*?erDiagram/);
		if (mermaidStart === -1) return { md, inserted: 0, reason: 'no-mermaid' };
		// Find the closing ``` from the start of that block
		const blockStartAbs = startIdx + mermaidStart;
		const blockBodyStart = md.indexOf('erDiagram', blockStartAbs);
		const fenceClose = md.indexOf('```', blockBodyStart);
		if (fenceClose === -1) return { md, inserted: 0, reason: 'no-fence-close' };

		// Prepare insertion just before fenceClose; dedupe by checking presence
		const blockContent = md.slice(blockBodyStart, fenceClose);
		const toInsert = [];
		for (const line of lines) {
			if (!blockContent.includes(line)) {
				toInsert.push(line);
			}
		}
		if (toInsert.length === 0) return { md, inserted: 0, reason: 'deduped' };

		// Build insertion ensuring no unnecessary leading newline, and exactly one
		// newline between existing content and the first inserted line, and a trailing
		// newline before the closing fence for proper Mermaid formatting.
		const beforeFence = md.slice(0, fenceClose);
		const needsLeadingNewline = !beforeFence.endsWith('\n');
		const insertCore = toInsert.join('\n') + '\n';
		const insertText = (needsLeadingNewline ? '\n' : '') + insertCore;
		const newMd = md.slice(0, fenceClose) + insertText + md.slice(fenceClose);
		return { md: newMd, inserted: toInsert.length };
	};

	let totalInserted = 0;
	for (const [ns, set] of edgesByNamespace.entries()) {
		const lines = Array.from(set.values());
		const res = insertIntoNamespace(erd, ns, lines);
		if (res.inserted > 0) {
			erd = res.md;
			totalInserted += res.inserted;
		} else {
			// If we couldn't find the exact namespace section, try a fallback: if ns ends with 'Ads', try without suffix
			if (res.reason === 'no-section' && /Ads$/.test(ns)) {
				const alt = ns.replace(/Ads$/, '');
				const resAlt = insertIntoNamespace(erd, alt, lines);
				if (resAlt.inserted > 0) {
					erd = resAlt.md;
					totalInserted += resAlt.inserted;
					continue;
				}
			}
			// Otherwise, just log
			// console.warn(`Could not insert edges for namespace ${ns}: ${res.reason}`);
		}
	}

	if (totalInserted > 0) {
		await fs.writeFile(ERD_MD_PATH, erd, 'utf8');
	}

	console.log(`Inserted ${totalInserted} many-to-many shortcut edge(s) across ${edgesByNamespace.size} namespace(s).`);
}

main().catch(err => {
	console.error('postprocess-erd failed:', err);
	process.exitCode = 1;
});
