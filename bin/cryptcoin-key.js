const program = require("commander");
const key = require("../commands/key");
program
.command("set")
.description("Set API key -- Get at https://nomics.com")
// .action(()=>console.log("Hello from Set"));
.action(key.set);

program
.command("show")
.description("Show API key")
// .action(()=>console.log("Hello from Show"));
.action(key.show);

program
.command("remove")
.description("Remove API key")
// .action(()=>console.log("Hello from Remove"));
.action(key.remove);

program.parse(process.argv);