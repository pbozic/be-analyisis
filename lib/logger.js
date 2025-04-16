const pino = require('pino');
const { multistream } = require('pino');
const { AsyncLocalStorage } = require('async_hooks');
const path = require('path');

const asyncLocalStorage = new AsyncLocalStorage();
const projectRoot = path.resolve(__dirname, '..');

const isDev = process.env.NODE_ENV !== 'production';

function getCaller(skip = 2) {
  const obj = {};
  Error.captureStackTrace(obj, getCaller);
  const stack = obj.stack.split('\n')[skip] || '';
  const match = stack.match(/\((.*):(\d+):(\d+)\)/);
  if (!match) return undefined;
  const fullPath = match[1];
  const relativePath = path.relative(projectRoot, fullPath);
  return `${relativePath}:${match[2]}:${match[3]}`;
}

// DEV: single pretty stream
if (isDev) {
  const logger = pino({
    level: 'info',
    timestamp: pino.stdTimeFunctions.isoTime,
    transport: {
      target: 'pino-pretty',
      options: {
        colorize: true,
        translateTime: 'SYS:standard',
        singleLine: true,
        ignore: 'pid,hostname',
      }
    }
  });

  module.exports = {
    logger,
    asyncLocalStorage,
    log: makeLogWrapper(logger),
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

  const logger = pino({
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
    logger,
    asyncLocalStorage,
    log: makeLogWrapper(logger),
  };
}

// Reusable log wrapper
function makeLogWrapper(logger) {
  return {
    info: (msg, meta = {}) => logWithContext('info', msg, meta, logger),
    error: (msg, meta = {}) => logWithContext('error', msg, meta, logger),
    warn: (msg, meta = {}) => logWithContext('warn', msg, meta, logger),
    debug: (msg, meta = {}) => logWithContext('debug', msg, meta, logger),
  };
}

function logWithContext(level, msg, meta, logger) {
  const store = asyncLocalStorage.getStore();
  const context = {};

  if (store?.userId) context.userId = store.userId;
  if (store?.routePath) context.routePath = store.routePath;
  context.caller = getCaller();

  logger[level]({ ...context, ...meta }, msg);
}
