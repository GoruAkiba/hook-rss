const mongoose = require ("mongoose");

// database
const dbname = "hook-rss";
if(process.env.NODE_ENV === "production"){
    const dbuser = process.env.dbuser,
        dbpassword = process.env.dbpassword;
        dbhost = process.env.dbhost;
    var url_server = `mongodb+srv://${dbuser}:${dbpassword}@${dbhost}/${dbname}?retryWrites=true&w=majority`;
		// console.log(url_server)

} else {
    var url_server = `mongodb://localhost:27017/${dbname}`;
}

mongoose.connect(url_server, {useNewUrlParser: true,useUnifiedTopology: true}, (err) => {
	if(err) return console.log("can't connect to db!");
	console.log("Succes Connect to db!");
});

// load model
require("./hookChannel.model");

