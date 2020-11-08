// init requirement
const mongoose = require("mongoose");

// declare scema
var schema = new mongoose.Schema({
	primary_key : {
		type : Number,
		required : "Required"
	},
	message : {
		type : String,
		required : "Required"
	},
	name : {
		type : String,
		required : "Required"
	}
});

mongoose.model("logs", schema);