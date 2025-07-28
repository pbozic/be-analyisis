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
import openapi from 'openapi-comment-parser';
import compression from 'compression';
import multer from 'multer';
import { v4 as uuidv4 } from 'uuid';

import prisma from './prisma/prisma.js';
import startCronJobs from './cron.js';
import mainRouter from './routes/index.routes.js';
import apiRouter from './routes/api.routes.js';
import BlogController from './controllers/BlogController.js';
import authMiddleware from './middleware/auth.js';

const upload = multer({ storage: multer.memoryStorage() });
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// app.js
config();
const isDev = process.env.NODE_ENV !== 'production';
const REST_API_ENDPOINT = '/api';
const app = express();
// ─── Cron Jobs ──────────────────────────────────────────────────────
if (process.env.NODE_ENV !== 'test') {
	startCronJobs();
}
// ─── Middleware Setup ───────────────────────────────────────────────
app.disable('etag');
const allowedOrigins = [
	'http://localhost:3000',
	'https://klikni-web.eu', // etc.
	'https://taxi.klikni.localhost', // etc.
	'https://transfer.klikni.localhost', // etc.
	'https://dostava.klikni.localhost', // etc.
	'https://rezervacije.klikni.localhost', // etc.
];

app.use(
	cors({
		origin: function (origin, callback) {
			if (!origin || allowedOrigins.includes(origin)) {
				callback(null, true);
			} else {
				callback(new Error('Not allowed by CORS: ' + origin));
			}
		},
		credentials: true,
		exposedHeaders: ['Content-Disposition'],
	})
);
app.use(cookieParser());
app.use((req, res, next) => {
	req.prisma = prisma;
	next();
});
app.use((req, res, next) => {
	if (!req.cookies.session_id) {
		const sessionId = uuidv4();
		const isProd = process.env.NODE_ENV === 'production';

		// In prod, set domain to your main domain
		// In dev, omit domain to default to host (safer)
		const cookieDomain = isProd ? '.klikni-web.eu' : undefined;

		// Adjust sameSite and secure depending on prod/dev
		// Use 'none' + secure=true if you do cross-site cookies (prod with HTTPS)
		const sameSite = 'none';
		const secure = true; // true in prod (HTTPS), false in dev (HTTP)

		res.cookie('session_id', sessionId, {
			path: '/',
			domain: cookieDomain,
			httpOnly: true,
			sameSite,
			secure,
		});
	}
	next();
});
app.post('/api/blog/upload/file', authMiddleware, upload.single('image'), (req, res) => {
	console.log('File upload request received:', req.file);
	BlogController.createBlogImageByFile(req, res);
});

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(logger('dev'));

app.use(express.urlencoded({ limit: '512mb', extended: false }));
app.use(
	compression({
		filter: (req, res) => {
			const contentType = req.headers['content-type'] || '';
			return !contentType.startsWith('multipart/form-data');
		},
		level: 6,
		threshold: 10 * 1024,
	})
);
//app.use(fileUploadLib());

app.use(express.static(path.join(__dirname, 'public')));
app.use((req, res, next) => {
	const contentType = req.headers['content-type'] || '';
	if (contentType.startsWith('multipart/form-data')) {
		return next(); // skip JSON parser for file uploads
	}
	return express.json({
		verify: function (req, res, buf) {
			req.rawBody = buf;
		},
		limit: '512mb',
	})(req, res, next);
});

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
	const isApi = req.originalUrl.startsWith('/api') || req.xhr || req.headers.accept?.includes('application/json');

	if (isApi) {
		res.status(err.status || 500).json({
			message: err.message,
			stack: isDev ? err.stack : undefined,
		});
	} else {
		res.locals.message = err.message;
		res.locals.error = isDev ? err : {};
		res.status(err.status || 500);
		res.render('error'); // Only for HTML routes
	}
});
export default app;
