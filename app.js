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
