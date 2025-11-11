import { Buffer } from 'node:buffer';

import { b64u, fromB64u } from './base64url';

export type Rs256SignFn = (data: Uint8Array) => Promise<Uint8Array>;

export type JwsHeader = {
	alg: 'RS256';
	subject_name: string;
	issuer_name: string;
	serial: string; // keep as string to avoid number overflow
	cty?: 'application/json';
	typ?: 'JOSE';
};
/** Build compact JWS
 * @param {JwsHeader} header
 * @param {unknown} payload
 * @param {Rs256SignFn} signFn
 * @returns {Promise<string>} - The compact JWS string.
 */
export const buildCompactJws = async (header: JwsHeader, payload: unknown, signFn: Rs256SignFn): Promise<string> => {
	const h = b64u(Buffer.from(JSON.stringify(header), 'utf8'));
	const p = b64u(Buffer.from(JSON.stringify(payload), 'utf8'));
	const signingInput = `${h}.${p}`;
	const sig = await signFn(new TextEncoder().encode(signingInput));
	const s = b64u(sig);
	return `${signingInput}.${s}`;
};

/** Decode compact JWS
 * @param {string} token
 * @returns {{ header: any; payload: any; signature: Buffer }} - The decoded JWS components.
 */

export const decodeCompactJws = (token: string): { header: any; payload: any; signature: Buffer } => {
	const [h, p, s] = token.split('.');
	if (!h || !p || !s) throw new Error('Invalid JWS');
	const header = JSON.parse(Buffer.from(h.replace(/-/g, '+').replace(/_/g, '/'), 'base64').toString('utf8'));
	const payload = JSON.parse(Buffer.from(p.replace(/-/g, '+').replace(/_/g, '/'), 'base64').toString('utf8'));
	const signature = fromB64u(s);
	return { header, payload, signature };
};
