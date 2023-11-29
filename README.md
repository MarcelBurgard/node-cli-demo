# Typescript Command Line Tool Demo

This is a demo for a command line tool developed with Node and [yargs](https://github.com/yargs/yargs/tree/main).

## Getting started

Install all required npm packages with

```sh
npm install
```

The test are implemented with [jest](https://github.com/jestjs/jest) and [nock](https://github.com/nock/nock).

Run all tests with

```sh
npm run test
```

## Simple command line tool

An example of a very simple command line tool is provided in [here](./src/simple_cli.ts). To get details about it use the help option

```sh
npx ts-node ./src/simple_cli.ts -h
```

The command line sample echoes an input given with the option `-i`

```sh
$ npx ts-node ./src/simple_cli.ts -i mystring
mystring
```

If not input is given, it defaults to echoing "Hello world!"

```sh
$ npx ts-node ./src/simple_cli.ts
Hello world!
```

The related test are implemented [here](./test/simple_cli.test.ts).

## Complex command line tool

A boilerplate for a more complex scenario with multiple commands is provided in [here](./src/complex_cli.ts). To get details about it use the help option

```sh
npx ts-node ./src/complex_cli.ts -h
```

The sample has two commands, one for getting cat facts and and one predicting the age of a person with a given name.

```bash
$ npx ts-node ./src/complex_cli.ts cats
Cats control the outer ear using 32 muscles; humans use 6
```

```sh
$ npx ts-node ./src/complex_cli.ts age Joe
Joe has a predicted age of 64.
```

The tests of the more complex command line tool are implemented [here](./test/complex_cli.test.ts).
