const express = require("express");
const bodyParser = require("body-parser")
const mongoose = require("mongoose");

let app = express();
app.use(bodyParser.json());

//User databases

app.use(express.static(__dirname+"/static"));

mongoose.connect("mongodb://localhost/languages").then(
	() => {console.log("Connection to mongoDB successful")},
	(error) => {console.log("Connection to mongoDB failed:"+error)}
);

const port = process.env.PORT || 3001;

app.listen(port);
console.log("Running in port 3001")