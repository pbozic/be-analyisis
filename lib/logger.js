const pino = require('pino');
const { multistream } = require('pino');
const { AsyncLocalStorage } = require('async_hooks');
const { pinoCaller } = require('pino-caller');
const path = require('path');
const flatted = require('flatted'); // Make sure you require 'flatted' for safe object serialization

const asyncLocalStorage = new AsyncLocalStorage();
const isDev = process.env.ENVIRONMENT !== 'production';

// DEV: single pretty stream
if (isDev) {
  const baseLogger = pino({
    level: 'info',
    timestamp: pino.stdTimeFunctions.isoTime,
    transport: {
      target: 'pino-pretty',
      options: {
        colorize: true,
        translateTime: 'SYS:standard',
        singleLine: false,
        ignore: 'pid,hostname',
      }
    }
  });

  const logger = pinoCaller(baseLogger, { relativeTo: path.join(__dirname, "../"), stackAdjustment: 3 });

  module.exports = {
    logger,
    asyncLocalStorage,
    log: makeLogWrapper(logger),  // This exports the wrapper correctly
  };
} else {
  // PROD: dual stream: pretty logs + JSON logs
  const prettyStream = pino.transport({
    target: 'pino-pretty',
    options: {
      colorize: true,
      translateTime: 'SYS:standard',
      singleLine: true,
      ignore: 'pid,hostname',
    }
  });

  const jsonStream = pino.destination(1); // stdout for Docker/Logstash

  const baseLogger = pino({
    level: 'info',
    timestamp: pino.stdTimeFunctions.isoTime,
    formatters: {
      level: (label) => ({ level: label }),
    }
  }, multistream([ 
    { stream: prettyStream },
    { stream: jsonStream }
  ]));

  module.exports = {
    logger: baseLogger,
    asyncLocalStorage,
    log: makeLogWrapper(baseLogger),  // This exports the wrapper correctly
  };
}

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
