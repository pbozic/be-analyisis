import { AsyncLocalStorage } from 'async_hooks';
import path from 'path';
import url from 'node:url';

import pino from 'pino';
import { multistream } from 'pino';
import pinoCaller$0 from 'pino-caller';
import * as flatted from 'flatted';
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const { pinoCaller } = pinoCaller$0;
const asyncLocalStorage = new AsyncLocalStorage();
const isDev = process.env.ENVIRONMENT !== 'production';
// PROD: dual stream: pretty logs + JSON logs
const prettyStream = pino.transport({
	target: 'pino-pretty',
	options: {
		colorize: true,
		translateTime: 'SYS:standard',
		singleLine: false,
		ignore: 'pid,hostname',
	},
});
const jsonStream = pino.destination(1); // stdout for Docker/Logstash
const baseLogger = pino(
	{
		level: 'info',
		timestamp: pino.stdTimeFunctions.isoTime,
		formatters: {
			level: (label) => ({ level: label }),
		},
	},
	multistream([{ stream: prettyStream }, { stream: jsonStream }])
);
const logger = pinoCaller(baseLogger, { relativeTo: path.join(__dirname, '../') });
// Reusable log wrapper
function makeLogWrapper(logger) {
	return {
		info: (msg, ...meta) => logWithContext('info', msg, meta, logger),
		error: (msg, ...meta) => logWithContext('error', msg, meta, logger),
		warn: (msg, ...meta) => logWithContext('warn', msg, meta, logger),
		debug: (msg, ...meta) => logWithContext('debug', msg, meta, logger),
	};
}
// Function to add context to logs and handle multi-argument logs
function logWithContext(level, msg, meta, logger) {
	const store = asyncLocalStorage.getStore();
	const context = {};
	// Adding context from AsyncLocalStorage
	if (store?.userId) context.userId = store.userId;
	if (store?.routePath) context.routePath = store.routePath;
	const sanitizedMeta = sanitizeCircularReferences(meta);
	const prettyMeta = JSON.stringify(sanitizedMeta, null, 2);
	// Call logger with context and sanitized metadata
	logger[level]({ ...context, ...meta }, msg);
}
// Function to remove circular references using flatted
function sanitizeCircularReferences(meta) {
	try {
		// If it's in DEV mode, ensure pretty print of complex objects
		return isDev ? flatted.stringify(meta, null, 4) : meta;
	} catch (error) {
		// Fallback to just returning the original meta if there's an error
		return meta;
	}
}
export const log = makeLogWrapper(baseLogger);
export { logger };
export { asyncLocalStorage };
export default {
	logger,
	asyncLocalStorage,
	log,
};
