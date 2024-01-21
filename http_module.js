const http = require("http");
// this class extends the event emitter class and thus we can use
// listener, emitter and other methods

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("Hello World");
    res.end();
  }

  if (req.url === "/api/courses") {
    res.write(JSON.stringify([1, 2, 3]));
    res.end();
  }
});

server.listen(5000);

console.log(`Listening on port 5000...`);
