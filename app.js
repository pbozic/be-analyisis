require("dotenv").config();
const REST_API_ENDPOINT = "/api";

const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const swaggerUi = require("swagger-ui-express");
const cors = require("cors");
const startCronJobs = require("./cron");
const mainRouter = require("./routes/index");
const apiRouter = require("./routes/api");
const fileUploadLib = require("express-fileupload");
const openapi = require("openapi-comment-parser");
const { app, server } = require('./server');
const { io } = require('./socket'); // This initializes the socket.io server even if the io variable is not used in this file
const CustomConsole = require('./lib/logger');
const compression = require('compression');
const { asyncLocalStorage, log } = require('./lib/logger');
const util = require('util');
// const apm = require('elastic-apm-node').start({
// 	serviceName: 'Klikni Server',
// 	serverUrl: 'http://localhost:8200',  // APM Server URL
// 	environment: process.env.NODE_ENV || 'development',
// });

const isDev = process.env.NODE_ENV !== 'production';
function formatArg(arg) {
	if (typeof arg === 'string') return arg;
	if (typeof arg === 'object') return isDev ? JSON.stringify(arg, null, 2) : arg;
	return String(arg);
  }
  
  function makeConsoleOverride(level = 'info') {
	return (...args) => {
	  if (isDev) {
		// Pretty: string log (like native console.log)
		const msg = args.map(formatArg).join(' ');
		log[level](msg);
	  } else {
		// Structured: key-value log
		const structuredLog = {};
		args.forEach((arg, index) => {
		  if (typeof arg === 'object' && arg !== null) {
			Object.assign(structuredLog, arg); // Merge object fields
		  } else {
			structuredLog[`arg${index}`] = arg;
		  }
		});
		log[level](structuredLog);
	  }
	};
  }
  
  // Override console methods
  console.log = makeConsoleOverride('info');
  console.info = makeConsoleOverride('info');
  console.warn = makeConsoleOverride('warn');
  console.error = makeConsoleOverride('error');
  console.debug = makeConsoleOverride('debug');

app.use(compression({
	level: 6, // 1 (fastest, less compression) to 9 (slowest, most compression)
	threshold: 10 * 1024, // Only compress responses bigger than 10KB
  }));
// listen to port 3001
const port = process.env.PORT || 3001;

startCronJobs();

// view engine setup
app.set("views", path.join(__dirname, "views"));

// set the view engine to ejs
app.set("view engine", "pug");

app.use(logger("dev"));
app.disable("etag")
app.use(
    express.json({
        verify: function(req, res, buf) {
            req.rawBody = buf;
        },
		limit: "512mb" 
    })
);
app.use(express.urlencoded({ limit: "512mb", extended: false }));

app.use(
	cors({
		//origin: 'http://localhost:8080',
		//credentials: true,
		exposedHeaders: ["Content-Disposition"],
	}),
);
app.use(fileUploadLib());
app.use(cookieParser());

app.use(express.static(path.join(__dirname, "public")));
app.use((req, res, next) => {
	const store = asyncLocalStorage.getStore();
	if (store) {
	  store.routePath = req.route?.path || req.originalUrl;
	}
	next();
  });
const spec = openapi();

app.use("/v1/api-docs", swaggerUi.serve, swaggerUi.setup(spec, { explorer: true }));

app.use(mainRouter);
app.use(REST_API_ENDPOINT, apiRouter);
// catch 404 and forward to error handler
app.use(function (req, res, next) {
	next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get("env") === "development" ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.render("error");
});

server.listen(port, () => {
	console.log("server listening on: " + port);

	//precacheDataExport(app).then(r => console.log("pre-caching done"));
});
