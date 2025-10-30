import { Buffer } from 'node:buffer';

export const b64u = (buf: Uint8Array): string =>
	Buffer.from(buf).toString('base64').replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');

export const fromB64u = (s: string): Buffer => Buffer.from(s.replace(/-/g, '+').replace(/_/g, '/'), 'base64');
