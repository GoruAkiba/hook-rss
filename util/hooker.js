// requirement
const fetch = require("node-fetch");
const host = process.env.Host;

// handling hook
const hooker = {
	send: async (emb,uri) => {
		const option = {
			method: "POST",
			body: JSON.stringify(emb),
			headers: { 
        "Content-type": "application/json;"
    	} 
		};

		fetch(uri,option)
		.then(json => console.log(json));
		// .then(response => response.json())
    },
    hook_verif : function(obj,uri){
        const emb = {
            "username": "hook-rss",
            "avatar_url": "https://cdn.discordapp.com/attachments/755296877368311808/772371319739121714/e-mail.png",
            "embeds":[{
                    "title":"hook-rss | Webhook Verification",
                    "description": `hey **${obj.name}** your request was submited! one more think, please verif your request by submit this verification code to the site. \n `,
                    "fields": [{"name":"Verif Code :", "value":`\`\`\`${obj.previous_key}\`\`\`\n *note: please keep your access key and keep it secret!*\n
										go back to the site and submit this code or you can click link bellow
										["Verification page"](${host}?c=${obj.primary_key})`}]
                }
            ]
        };
    
        // send hook
        this.send(emb, uri);
    
    },
    
    hook_verified : function(obj,uri){
        const emb = {
            "username": "hook-rss",
            "avatar_url": "https://cdn.discordapp.com/attachments/755296877368311808/772371319739121714/e-mail.png",
            "embeds":[{
                    "title":"hook-rss | Webhook Verification",
                    "description": `hey **${obj.name}**, your request was verified!!!\n`
                }
            ]
        }
        // send hook
        this.send(emb, uri);
    }
}

module.exports = hooker;