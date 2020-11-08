// requirement
const express = require("express");
const route = express.Router();
const {hooker, model, util, digit} = require("../structure");
const queue_req = model.queue_req;

route.post("/submit", (req,resp) =>{
	const body = req.body;
    const {hookUrl, name} = body;
    if(!hookUrl || !name) return resp.json({status: "err", msg: "field can't be empty"})
    if(!util.verif_hookUrl(hookUrl)) return resp.json({status: "err", msg: "hookUrl is not valid!"})
    var sp = hookUrl.split("/"),
    primary_key = sp[5],
    hookToken = sp[6];


	// set queue_req
	const obj = {
        primary_key,
        name,
		hookUrl,
		hookToken,
		previous_key: util.gen_key(digit)
	};

	// create record
	queue_req.set(primary_key,obj);
	hooker.hook_verif(obj,hookUrl);
	// create hook
	console.log(queue_req);
	resp.json({primary_key});
})

route.post("/verif", async (req, resp) => {
	const body = req.body;
	
    if(!queue_req.has(body.primary_key)) return resp.json({status:"404 | no record"});
    const docs = await model.hookChannel.has(body.primary_key)

    if(docs) return resp.json({status:"Already Verified!!!"}); 

	const obj = queue_req.get(body.primary_key);
	if(body.key == obj.previous_key){
        hooker.hook_verified(obj,obj.hookUrl);
        model.hookChannel.set(obj);
		return resp.json({
			status: "ok, you are verified!"
		})
	} else {
		return resp.json({status:"401 | wrong key"});
	}
});

module.exports = route;