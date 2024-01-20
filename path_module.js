const path = require("path");

const pathObj = path.parse(__filename);
console.log(pathObj);

// node has various built-in modules which can be viewed from docs on
// the node's website. we are using the path module which provides some
// useful utilities for parsing paths.
