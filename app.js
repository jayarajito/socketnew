const path = require("path");
const envPath = process.env.NODE_ENV ? process.env.NODE_ENV + ".env" : ".env";
require("dotenv").config({
  path: path.resolve(__dirname, envPath),
});
const express = require("express");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server);

// app.use(bodyParser.urlencoded({ extended: false }));
var port = process.env.PORT || 3000;

const env = process.env.NODE_ENV || "dev";
console.log(`NODE_ENV=${env}`);
console.log(process.env.AWS_ACCESS_KEY_ID);

//Render Index page
app.get("/", (req, res) => {
  res.json("connected to server");
});

//Start Server
server.listen(port, () => {
  console.log(`Server Running on ${port}`);
});

require("./utils/socket")(io);
