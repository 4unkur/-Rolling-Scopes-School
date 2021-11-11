import { argumentsValidation } from "./validators/argumentsValidator.js";
import { configValidation } from "./validators/configValidator.js";
import { inputOutputFilesValidation } from "./validators/inputOutputFilesValidator.js";
import { configParsing } from "./parser/configParser.js";
import { getReadStream } from "./streams/readStream.js";
import { getWriteStream } from "./streams/writeStream.js";
import { getTransformStreams } from "./streams/getTransformStreams.js";
import { pipeline } from "stream";

function main() {
  const input = process.argv.slice(2);
  const map = configParsing(input);
  argumentsValidation(map);
  inputOutputFilesValidation(map); // существование файлов вводы вывода, если указаны ключи
  configValidation(map); // проверка допустимости конфига

  const transformStreams = getTransformStreams(map);
  const readStream = getReadStream(map);
  const writeStream = getWriteStream(map);

  pipeline(readStream, ...transformStreams, writeStream, () => {});
}

main();
