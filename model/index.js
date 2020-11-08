// requirement
const mongoose = require ("mongoose");
require("./connectToDb");
const hookChannelModel = mongoose.model('hookChannel');



const model = {
    queue_req : new Map(),
    hookChannel:{
        set: async (obj,callback)=>{
            let docs = new hookChannelModel();
            // docs.primary_key = obj.primary_key;
            // docs.name = obj.name;
            // docs.hookToken = obj.hookToken;
            // docs.hookUrl = obj.hookUrl;
            // docs.previous_key = obj.previous_key;

            for(let e of Object.keys(obj)){
                docs[e] = obj[e];
            }

            docs.save().then(e=>{
                if(!callback){
                    return e
                }
                return callback(e);
            });
        },
        has: async (primary_key) => {
            const docs = await hookChannelModel.findOne({primary_key});
            // console.log(docs);
            if(!docs) return false;
            return true;
        }
    }
}

module.exports = model;
