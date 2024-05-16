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

// listen to port 3001
const port = process.env.PORT || 3001;

startCronJobs();

// view engine setup
app.set("views", path.join(__dirname, "views"));

// set the view engine to ejs
app.set("view engine", "pug");

app.use(logger("dev"));

app.use(express.json({ limit: "512mb" }));
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
