const http = require("http");
const express = require("express");

const api = express();

api
  .use(express.static("./dist"))
  .use("*", (req, res) => res.sendFile("index.html", { root: "./dist" }));

const server = http.createServer(api);

server.listen(process.env.PORT || 3000)
console.log(`API Listenning on port 3000`);
