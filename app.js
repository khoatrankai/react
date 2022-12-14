const express = require("express");
const path = require("path");
const app = express();

app.set("views", path.join(__dirname,"views"));
app.set("view engine","ejs");
app.use(express.static(__dirname + '/public'));

app.get("/order", function (req, res) {
  res.send("order add here");
});
app.get("/new", function (req, res) {
  res.send("New add here");
});

app.get("/", function (req, res) {
    res.render("index");
  });

app.listen(process.env.PORT || 5000);
module.exports = app;