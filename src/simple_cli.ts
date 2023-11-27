#!/usr/bin/env node
import yargs from "yargs";
import { hideBin } from "yargs/helpers";

export const simpleParser = yargs(hideBin(process.argv))
  .command(
    "$0",
    "echos a given string",
    () => {},
    (argv) => {
      console.log(argv.i ?? "Hello world!");
    }
  )
  .options({
    i: {
      type: "string",
      description: "string to echo",
      requiresArg: true,
    },
  })
  .help("h")
  .alias("h", "help");

(async () => {
  await simpleParser.argv;
})();
