const Configstore = require('configstore');
const packageDetails = require("../package.json");
class KeyManager{
    constructor(){
        this.conf = new Configstore(packageDetails );
    }

    setKey(key) {
        this.conf.set("apiKey", key);
        return key;
    }

    getKey() {
        const key = this.conf.get("apiKey");
        if(!key) {
            throw new Error("No API key found")
        }
        return key;
    }

    deleteKey() {
        const key = this.conf.get("apiKey");
        if(!key) {
            throw new Error("No API key gound")
        }
        this.conf.delete("apiKey");
        return;
    }

}

module.exports =KeyManager;
