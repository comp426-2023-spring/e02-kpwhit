#!/usr/bin/env node
import minimist from "minimist";
import { rpsls } from "../lib/rpsls\.js";

async function main() {
    const args = minimist(process.argv.slice(2));
    if (args.h | args.help) {
        print_help();
        return 0;
    }
    if (args.r | args.rules) {
        print_rules();
        return 0;
    }
    try {
        console.log(JSON.stringify(rpsls(args._[0])));
    } catch (RangeError) {
        print_rules();
    }
}

function print_help() {
    console.log("Usage: node-rpsls [SHOT]\n");
    console.log("Play the Lizard-Spock Expansion of Rock Paper Scissors (RPSLS)!");
    console.log("");
    console.log("  -h, --help      display this help message and exit");
    console.log("  -r, --rules     display the rules and exit");
    console.log("")
    console.log("Examples:")
    console.log("  node-rpsls        Return JSON with single player RPSLS result.")
    console.log(`                  e.g. {"player":"rock"}`)
    console.log("  node-rpsls rock   Return JSON with results for RPSLS played against a simulated opponent.")
    console.log(`                    e.g {"player":"rock","opponent":"Spock","result":"lose"}`)
}

function print_rules() {
    console.log("Rules for the Lizard-Spock Expansion of Rock Paper Scissors:");
    console.log("");
    console.log("  - Scissors CUTS Paper");
    console.log("  - Paper COVERS Rock");
    console.log("  - Rock SMOOSHES Lizard");
    console.log("  - Lizard POISONS Spock");
    console.log("  - Spock SMASHES Scissors");
    console.log("  - Scissors DECAPITATES Lizard");
    console.log("  - Lizard EATS Paper");
    console.log("  - Paper DISPROVES Spock");
    console.log("  - Spock VAPORIZES Rock");
    console.log("  - Rock CRUSHES Scissors");
}

main();