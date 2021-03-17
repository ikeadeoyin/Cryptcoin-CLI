#!/usr/bin/env node

const program = require("commander");
const packageDetails = require("../package.json");
program
    .version(packageDetails.version)
    .command("key", "Manage API key -- https://nomics.cpm")
    .command("check", "get Coin Prices")
    .parse(process.argv);
