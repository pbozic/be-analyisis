import path from 'path';
import fs from 'fs';
import url from 'node:url';

import { config } from 'dotenv';
import express from 'express';
import createError from 'http-errors';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import swaggerUi from 'swagger-ui-express';
import YAML from 'js-yaml';
import merge from 'lodash.merge';
import cors from 'cors';
import fileUploadLib from 'express-fileupload';
import openapi from 'openapi-comment-parser';
import compression from 'compression';
import * as flatted from 'flatted';

import startCronJobs from './cron.js';
import mainRouter from './routes/index.js';
import apiRouter from './routes/api.js';
import { asyncLocalStorage, log } from './lib/logger.js';
import CustomConsole from './lib/logger.js';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// app.js
config();
const isDev = process.env.NODE_ENV !== 'production';
console.socket = console.log;
const REST_API_ENDPOINT = '/api';
const app = express();
// ─── Cron Jobs ──────────────────────────────────────────────────────
if (process.env.NODE_ENV !== 'test') {
	startCronJobs();
}
if (process.env.NODE_ENV === 'test') {
	console = {
		log: () => {},
		error: () => {},
		warn: () => {},
		info: () => {},
		debug: () => {},
		socket: () => {},
	};
}
// ─── Logging override ───────────────────────────────────────────────
function formatArg(arg) {
	if (typeof arg === 'string') return arg;
	if (typeof arg === 'object') return isDev ? flatted.stringify(arg, null, 2) : JSON.stringify(arg);
	return String(arg);
}
function makeConsoleOverride(level = 'info') {
	return (...args) => {
		const formattedArgs = args.map(formatArg);
		if (isDev) {
			log[level](...args);
		} else {
			const structuredLog = {};
			args.forEach((arg) => {
				if (typeof arg === 'object' && arg !== null) {
					Object.assign(structuredLog, arg);
				}
			});
			log[level](structuredLog);
		}
	};
}
// ─── Middleware Setup ───────────────────────────────────────────────
app.use(
	compression({
		level: 6,
		threshold: 10 * 1024,
	})
);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(logger('dev'));
app.disable('etag');
app.use(
	express.json({
		verify: function (req, res, buf) {
			req.rawBody = buf;
		},
		limit: '512mb',
	})
);
app.use(express.urlencoded({ limit: '512mb', extended: false }));
app.use(cors({ exposedHeaders: ['Content-Disposition'] }));
app.use(fileUploadLib());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// ─── Routes ─────────────────────────────────────────────────────────
app.use(mainRouter);
app.use(REST_API_ENDPOINT, apiRouter);
// Uncomment if you want Swagger from comments
let spec;
let finalSpec;
try {
	if (process.env.ENVIRONMENT !== 'production') {
		const baseYamlPath = path.join(__dirname, 'swagger', 'openApiConfig.yaml');
		const baseSpec = YAML.load(fs.readFileSync(baseYamlPath, 'utf8'));
		// This triggers parsing of comments
		spec = openapi({
			include: ['./routes/**/*.js', './controllers/**/*.js', './middlewares/**/*.js'],
		});
		finalSpec = merge({}, baseSpec, spec);
		if (!finalSpec.openapi) finalSpec.openapi = '3.0.3';
	}
} catch (err) {
	console.error('❌ Failed to parse OpenAPI comments:', err.message);
	console.error(err.stack);
	process.exit(1); // or continue without Swagger if desired
}
app.use('/v1/api-docs', swaggerUi.serve, swaggerUi.setup(finalSpec, { explorer: true }));
// ─── Error Handling ─────────────────────────────────────────────────
app.use((req, res, next) => {
	next(createError(404));
});
app.use((err, req, res, next) => {
	res.locals.message = err.message;
	res.locals.error = isDev ? err : {};
	res.status(err.status || 500);
	res.render('error');
});
export default app;
