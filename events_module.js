const EventEmitter = require("events");

const emitter = new EventEmitter();

// register a listener
// listener must be registered above the registered event
// if listener is passed additional data, it appears in arguments of the callback
// emitter.on("messageLogged", (arg) => {
//   console.log("Listener Called ", arg);
// });

// raised an event
// this event will be raised when a listener is registered
// emitter.emit("messageLogged");

// an event can have additional optional arguments
// its better to encapsulate those arguments in an object but not necessary
// these arguments carry data over events
// emitter.emit("messageLogged", { id: 1, url: "http://" });

const Logger = require("./logger");
const logger = new Logger();

logger.on("messageLogged", (arg) => {
  console.log("Listener Called ", arg);
});

logger.log("message");
