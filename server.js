const express = require("express");
const bodyParser = require("body-parser");
const app = express();

var db;

app.set("port", process.env.PORT || 5000);

app.use(bodyParser.urlencoded({ extended: true }));


app.listen(app.get("port"), function() {
    console.log("listening on ", app.get("port"));
  });

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "POST, GET");
  next();
});

app.use(express.static(`${__dirname}/src`)); 

app.get("/", (request, response) => {
  response.sendFile(__dirname + "/src/index.html");
  // Note: __dirname is directory that contains the JavaScript source code. Try logging it and see what you get!
  // Mine was '/home/danilosic/Documents/Estudos/Programming/nodejs-crud' for this app.
});
