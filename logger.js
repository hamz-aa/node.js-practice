// extending the event emitter class and using in events_module.js
const EventEmitter = require("events");

// const emitter = new EventEmitter();

let url = "http://mylogger.io/log";

// this function and variable is only accessible in this module. If we want
// to access it outside this module, we have to export it.
// function log(message) {
//   console.log(message);

//   // raise an event
//   emitter.emit("messageLogged", { id: 1, url: "http://" });
// }

// we create a class for use in events_module.js
// when we use the above created logger function in events_module.js we
// do not get access to the emitter event because we have two separate
// emitter instances/objects in both of these files so the solution is
// to wrap it inside a class and export it
class Logger extends EventEmitter {
  log(message) {
    console.log(message);

    // raise an event
    this.emit("messageLogged", { id: 1, url: "http://" });
  }
}

module.exports = Logger;

// module.exports.log = log;

// we can also do this if we only have to import a single function
// module.exports = log;
