const mongoose = require("mongoose");

let Schema = mongoose.Schema({
	title:String,
	description:String,
	type:String,
	industry:String,
	user:String
})

module.exports = mongoose.model("WordItem",Schema);