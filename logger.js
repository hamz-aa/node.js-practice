let url = "http://mylogger.io/log";

// this function and variable is only accessible in this module. If we want
// to access it outside this module, we have to export it.
function log(message) {
  console.log(message);
}

module.exports.log = log;

// we can also do this if we only have to import a single function
// module.exports = log;
