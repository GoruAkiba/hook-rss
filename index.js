// requirement

const express = require("express");
const app = express();
const _PORT = 8080;
var bodyParser = require('body-parser');

require("dotenv").config();


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

// webserver
app.get("/",(req, resp) =>{
	resp.json({status:"ok"})
});

// routing
const path_Api = require("./controller/Api");
const structures = require("./structure");
app.use("/api", path_Api);


app.listen(_PORT,async ()=>{
	console.log("APP listening to port: "+_PORT);
})

	