// app.js
require('dotenv').config();

const path = require('path');

const express = require('express');
const createError = require('http-errors');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const swaggerUi = require('swagger-ui-express');
const cors = require('cors');
const fileUploadLib = require('express-fileupload');
const openapi = require('openapi-comment-parser');
const compression = require('compression');
const flatted = require('flatted');

const startCronJobs = require('./cron');
const mainRouter = require('./routes/index');
const apiRouter = require('./routes/api');
const { asyncLocalStorage, log } = require('./lib/logger');
const CustomConsole = require('./lib/logger');

const isDev = process.env.NODE_ENV !== 'production';
console.socket = console.log;

const REST_API_ENDPOINT = '/api';
const app = express();
// ─── Cron Jobs ──────────────────────────────────────────────────────
if (process.env.NODE_ENV !== 'test') {
	startCronJobs();
	console = {};
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
// const spec = openapi();
// app.use("/v1/api-docs", swaggerUi.serve, swaggerUi.setup(spec, { explorer: true }));

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

module.exports = app;
