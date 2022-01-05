const express = require("express");
const http = require("http");
const websocket  = require("ws");
var messages = require("./con4/javascripts/messages");
const indexRouter = require("./routes/index");

const port = process.argv[2];
const app = express();

app.get("/play", indexRouter);
app.get("/", indexRouter);
app.get("/rules", indexRouter);

app.use(express.static(__dirname + "/public"));
http.createServer(app).listen(port);