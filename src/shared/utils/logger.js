import { format } from "date-fns";

// Define the Logger class
class BrowserLogger {
  constructor(level = "info") {
    this.levels = {
      debug: 0,
      info: 1,
      warn: 2,
      error: 3,
    };
    this.currentLevel = level;
  }

  // Helper method to process arguments
  formatArgs(args) {
    if (Array.isArray(args)) {
      return args
        .map((arg) =>
          typeof arg === "object" ? JSON.stringify(arg, null, 2) : arg
        )
        .join(" | ");
    }
    return typeof args === "object" ? JSON.stringify(args, null, 2) : args;
  }

  // Method to determine if a level should log
  shouldLog(level) {
    return this.levels[level] >= this.levels[this.currentLevel];
  }

  // General log method
  log(level, ...messages) {
    if (this.shouldLog(level)) {
      const timestamp = format(new Date(), `yyyy-MM-dd HH:mm:ss`);
      const formattedMessage = this.formatArgs(messages);
      const logMethod = console[level] || console.log; // Fallback to console.log for unsupported levels

      logMethod(`[${timestamp}] [${level.toUpperCase()}] ${formattedMessage}`);
    }
  }

  // Log methods for specific levels
  debug(...messages) {
    this.log("debug", ...messages);
  }

  info(...messages) {
    this.log("info", ...messages);
  }

  warn(...messages) {
    this.log("warn", ...messages);
  }

  error(...messages) {
    this.log("error", ...messages);
  }

  critical(...messages) {
    this.log("error", `CRITICAL: ${this.formatArgs(messages)}`);
  }

  // Method to change the logging level
  setLevel(level) {
    if (this.levels.hasOwnProperty(level)) {
      this.currentLevel = level;
    } else {
      console.warn(`Invalid logging level: ${level}`);
    }
  }
}

// Create an instance of the logger
const logger = new BrowserLogger("info");

export default logger;
