// handling util
const utils = {

    randd : (n) => {
        let rn = Math.floor(Math.random()*n);
        return rn;
    },
    
    addZero : (n,x) => {
        let txt = "0";
        x = String(x)
        let rn = x.length > n? x : txt.repeat(n-x.length) + x;
        return rn
    },
    
    gen_key : function(n){
        return this.addZero(n, this.randd(10**n))
    },

    verif_hookUrl : (x) =>{
        const hook_reg = new RegExp(/http(s)?\:\/\/discord\.com\/api\/webhooks\/\d{18}\/[0-Z 0-z]/);
        return hook_reg.test(x);
    }
    
    
}

module.exports = utils;