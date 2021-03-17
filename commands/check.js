const KeyManager = require("../lib/KeyManager");
const CryptoAPI = require("../lib/cryptoAPI");

const check ={
    async price(cmd) {
        // console.log(cmd.coin, cmd.currency)
        try {
            const keyManager = new KeyManager();
            key = keyManager.getKey();
            const api = new CryptoAPI(key);
            const PriceOutputData = await api.getPriceData(cmd.coin, cmd.currency);
            console.log(PriceOutputData)
                
        } catch (err) {
            console.error(err.message.red);
            
        }
        

    }
}
module.exports = check;