require('dotenv').config();
const chalk = require('chalk');
const moment = require('moment');
const path = require('path');
const LOG_TAXI_HELPERS = process.env.LOG_TAXI_HELPERS === "true";
const LOG_LEVEL = process.env.LOGGING_LEVEL || 'info';

class CustomConsole {
  constructor(originalConsole, options = { showSourceLocation: false }) {
    this.originalConsole = originalConsole;
    this.showSourceLocation = options.showSourceLocation;
    this.projectRoot = process.cwd(); // Get the current working directory
  }

  // Method to get a formatted timestamp
  getTimestamp() {
    return moment().format('YYYY-MM-DD HH:mm:ss');
  }
  getFormattedTimestamp() {
	return moment().format('YYYY-MM-DD HH:mm:ss');
}	

  // Method to get the source location of the log call
  getSourceLocation() {
    // Create an error to capture the stack trace
    const error = new Error();
    const stackLines = error.stack.split('\n');

    // The third line usually contains the location of the log call
    const callerLine = stackLines[3];

    // Extract file name, function name, and line number
    const match = callerLine.match(/at (.+?) \((.+?):(\d+):\d+\)/) || callerLine.match(/at (.+?):(\d+):\d+/);

    if (match) {
      // Extract the function name and remove any [as ...] annotation
      let functionName = match[1] || 'anonymous function';
      functionName = functionName.replace(/\s+\[as .+\]/, ''); // Remove [as ...] part

      const fullPath = match[2];
      const lineNumber = match[3];

      // Get the relative path from the project root
      const relativePath = path.relative(this.projectRoot, fullPath);

      // Extract just the file name from the relative path
      const fileName = path.basename(fullPath);

      
      return `${functionName} (${relativePath}:${lineNumber})`; // Relative path from project root
    } else {
      // Fallback if the stack doesn't match the expected format
      return 'source location unknown';
    }
  }

  // Method to format arguments
formatArgs(args) {
	try {
	  return args.map((arg) => {
		if (arg instanceof Date) {
		  // Color the Date object string without changing its format
		  return chalk.magenta(arg.toISOString());
		} else if (arg instanceof Error) {
		  // Handle Error objects by displaying their message and stack trace
		  return chalk.red(`Error: ${arg.message}\nStack: ${arg.stack}`);
		} else if (typeof arg === 'string') {
		  // Use moment to check if the string is a valid date
		  const date = moment(arg, moment.ISO_8601, true);
		  if (date.isValid()) {
			// Color the date string without changing its format
			return chalk.magenta(arg);
		  }
		} else if (typeof arg === 'symbol') {
		  // Indicate the presence of a Symbol
		  return chalk.green(`<Symbol>`);
		} else if (arg instanceof Map) {
		  // Handle Map objects
		  const mapStr = `[${[...arg].map(([key, value]) => `${key}: ${this.formatArgs([value])[0]}`).join(', ')}]`;
		  return chalk.blue(mapStr);
		} else if (arg instanceof Set) {
		  // Handle Set objects
		  const setStr = `[${[...arg].map(value => this.formatArgs([value])[0]).join(', ')}]`;
		  return chalk.blue(setStr);
		} else if (Buffer.isBuffer(arg)) {
		  // Handle Buffer objects (Node.js specific)
		  return chalk.cyan(`<Buffer ${arg.length} bytes>`);
		} else if (Array.isArray(arg)) {
		  // Handle arrays, ensuring empty arrays are displayed
		  return chalk.white(`[${arg.map(item => this.formatArgs([item])[0]).join(', ')}]`);
		} else if (typeof arg === 'object' && arg !== null) {
		  try {
			// Add a newline before objects and color them using chalk
			return `\n${chalk.white(JSON.stringify(arg, null, 2))}`;
		  } catch (e) {
			// Handle circular references or other JSON.stringify errors
			return '\n[Circular]';
		  }
		}
		// Return the data as-is if it's not one of the handled types
		return arg;
	  });
	} catch (error) {
	  // Log the error and return the original args
	  console.error('Error in formatArgs:', error);
	  return args;
	}
  }

  // Override log method
  log(...args) {
	try {
		if (LOG_LEVEL !== 'all') {
			return
		}
		const timestamp = `[${this.getTimestamp()}]`;
		if (this.showSourceLocation) {
			this.originalConsole.log(chalk.green(timestamp, `[${this.getSourceLocation()}]`, ...this.formatArgs(args)));
		} else {
			this.originalConsole.log(chalk.green(timestamp, ...this.formatArgs(args)));
		}
	} catch (error) {
		this.error("Error logging:", error);
	}
   
  }

  // Override info method
  info(...args) {
	try {
		const timestamp = `[${this.getTimestamp()}]`;
		if (this.showSourceLocation) {
			this.originalConsole.info(chalk.blue(timestamp, `[${this.getSourceLocation()}]`, ...this.formatArgs(args)));
		} else {
			this.originalConsole.info(chalk.blue(timestamp, ...this.formatArgs(args)));
		}
	} catch (error) {
		console.error("Error logging:", error);
		
	}
    
  }

  // Override warn method
  warn(...args) {
    const timestamp = `[${this.getTimestamp()}]`;
	if (this.showSourceLocation) {
		this.originalConsole.warn(chalk.yellow(timestamp, `[${this.getSourceLocation()}]`, ...this.formatArgs(args)));
	} else {
		this.originalConsole.warn(chalk.yellow(timestamp, ...this.formatArgs(args)));
	}
  }

  // Override error method
  error(...args) {
    const timestamp = `[${this.getTimestamp()}]`;
    if (this.showSourceLocation) {
		this.originalConsole.error(chalk.red(timestamp, `[${this.getSourceLocation()}]`, ...this.formatArgs(args)));
	} else {
		this.originalConsole.error(chalk.red(timestamp, ...this.formatArgs(args)));
	}
  }

  // Custom tag method
  tag(tag, ...args) {
    const timestamp = `[${this.getTimestamp()}] [${tag}]`;
	if (this.showSourceLocation) {
		this.log(timestamp, `[${this.getSourceLocation()}]`, ...this.formatArgs(args));
	} else {
		this.log(timestamp, ...this.formatArgs(args));
	}
  }
   errorTag(tag, ...args) {
    const timestamp = `[${this.getTimestamp()}] [${tag}]`;
	if (this.showSourceLocation) {
		this.error(timestamp, `[${this.getSourceLocation()}]`, ...this.formatArgs(args));
	} else {
		this.error(timestamp, ...this.formatArgs(args));
	}
  }
  // Specific tag methods
  taxiHelpers(...args) {
	if (LOG_TAXI_HELPERS) {
    	this.tag('TAXI-HELPERS', ...args);
	}
  }

  deliveryHelpers(...args) {
    this.tag('DELIVERY-HELPERS', ...args);
  }

  socket(...args) {
    this.tag('SOCKET', ...args);
  }
}

module.exports = CustomConsole;