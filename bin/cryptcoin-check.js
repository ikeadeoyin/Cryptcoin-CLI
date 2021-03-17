const program = require("commander");
const check = require("../commands/check");

program
 .command("price")
 .description("check price of coin")
 .option("--coin <type>", "Add specific coin in CSV format", "BTC, ETH, BNB")
 .option("--currency <currency>", "Change the currency", "NGN")
//  .action(()=>console.log("hello from prices"));
.action((cmd)=>check.price(cmd))

program.parse(process.argv)