#!/usr/bin/env node
import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import { getCatFacts } from "./helper/get_cat_facts";
import { getAgePrediction } from "./helper/get_age_prediction";

export const complexParser = yargs(hideBin(process.argv))
  .options({
    verbose: {
      type: "boolean",
      description: "verbose logging",
      alias: "v",
      default: false,
    },
  })
  .command(
    "cats",
    "gives a fact about cats",
    () => {},
    async (argv) => {
      console.log(await getCatFacts(argv.verbose));
    }
  )
  .command(
    "age [name]",
    "predicts the age of a person with a given name",
    (yargs) => {
      return yargs.positional("name", {
        describe: "name to predict age to",
        type: "string",
        default: "Jason",
        demandOption: "true",
      });
    },
    async (argv) => {
      const age = await getAgePrediction(argv.name, argv.verbose);
      console.log(`${argv.name} has a predicted age of ${age}.`);
      return;
    }
  )
  .help("h")
  .alias("h", "help");

(async () => {
  await complexParser.parse();
})();
