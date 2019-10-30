const express = require("express");
const bodyParser = require("body-parser")
const mongoose = require("mongoose");
const session = require("express-session");
//MongoDB session store for Connect and Express
const MongoStore = require("connect-mongo")(session);

let app = express();
app.use(bodyParser.json());

//User databases

app.use(express.static(__dirname+"/static"));

mongoose.connect("mongodb://localhost/languages").then(
	() => {console.log("Connection to mongoDB successful")},
	(error) => {console.log("Connection to mongoDB failed:"+error)}
);

app.use(session({
	name:"languageapp",
	resave:false,
	secret:"myBestSecret",
	saveUninitialized:false,
	cookie:{maxAge:1000*60*60*24},
	store: new MongoStore({
			collection:"session",
			url:"mongodb://localhost/languages",
			ttl:24*60*60
	})
}));

const port = process.env.PORT || 3001;

app.listen(port);
console.log("Running in port 3001");