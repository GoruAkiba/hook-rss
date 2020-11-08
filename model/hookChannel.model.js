// init requirement
const mongoose = require("mongoose");

// declare scema
var schema = new mongoose.Schema({
	primary_key : {
		type : Number,
		required : "Required"
    },
    name : {
		type : String,
		required : "Required"
	},
    hookUrl : {
		type : String,
		required : "Required"
    },
    hookToken : {
		type : String,
		required : "Required"
    },
    previous_key : {
		type : String,
		required : "Required"
    }
	
});

mongoose.model("hookChannel", schema);
