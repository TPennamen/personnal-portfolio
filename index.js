const http = require("http");
const express = require("express");

const api = express();



const server = http.createServer(api);

server.listen(
  console.log(`API Listenning on port 3000`)
);
