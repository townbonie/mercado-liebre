const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(path.resolve(__dirname, "./public")));

app.listen(3002, () => {
  console.log("servidor funcionando");
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

app.get("/register", (req, res) => {
  res.sendFile(__dirname + "/views/register.html");
});

app.get("/login", (req, res) => {
  res.sendFile(__dirname + "/views/login.html");
});
