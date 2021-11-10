import {
  argumentsValidation,
  inputOutputFilesValidation,
  configValidation,
} from "./validation.js";
import { configParsing } from "./parse.js";

import fs from "fs";

import { pipeline } from "stream";
import { CaesarTransform, AtbashTransform } from "./transofrmStreams.js";

function main() {
  const input = process.argv.slice(2);
  const map = configParsing(input);
  argumentsValidation(map); // структура запроса
  inputOutputFilesValidation(map); // существование файлов вводы вывода, если указаны ключи
  configValidation(map); // проверка допустимости конфига

  const transformStreams = getTransformStreams(map);

  pipeline(
    getReadStream(map),
    ...transformStreams,
    getWriteStream(map),
    () => {}
  );
}

function getTransformStreams(config) {
  return config
    .get("-c")
    .split("-")
    .map((item) => {
      switch (item) {
        case "C0":
          return new CaesarTransform(-1);
          break;
        case "C1":
          return new CaesarTransform(1);
          break;
        case "R0":
          return new CaesarTransform(-8);
          break;
        case "R1":
          return new CaesarTransform(8);
          break;
        case "A":
          return new AtbashTransform();
          break;
      }
    });
}

function getReadStream(map) {
  return map.has("-i") ? fs.createReadStream(map.get("-i")) : process.stdin;
}
function getWriteStream(map) {
  return map.has("-o")
    ? fs.createWriteStream(map.get("-o"), { flags: "a" })
    : process.stdout;
}
main();

//create own streams for input/output
//clean my_ciphering_cli.js file and write functions in other files
//rename files, functions