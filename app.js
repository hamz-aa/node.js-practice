function sayHello(name) {
  console.log(`Hello ${name}`);
}

sayHello("Hamza");

// global objects so we can access it anywhere
// console.log();
// setInterval();
// clearInterval();
// setTimeout();
// clearTimeout();

// all global objects can be accessed through window object in browsers
// window.setInterval();

// let name = 'hamza';
// window.name;

// but in node we do not have a window object instead we have the global object
// let message = "";
// global.message;

// but all the variables/functions that we declare do not get added to the global
// this is because of node's modular system

// in node every file is a module and the variables or functions defined in
// that file are scoped to that module and are not available outside that module
// console.log(module);

const logger = require("./logger");
logger = 2;
logger.log("Hamza");

// node wraps our entire module into a function and executes it. The function looks
// like the one below. it is an iffy function
// (function (exports, require, module, __filename, __dirname) {
//   // everything inside our module is contained inside this function's body
// });
