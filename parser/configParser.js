import { duplicateArgumentsError } from "../Exceptions/Exceptions.js";

export function configParsing(args) {
  //проверка на дублирование аргументов
  try {
    args.forEach((item) => {
      if (args.indexOf(item) != args.lastIndexOf(item))
        throw new duplicateArgumentsError(`Argument ${item} is duplicated`);
    });
  } catch (ex) {
    process.stderr.write(`[${ex.time}] ${ex.message}`);
    process.exit(1);
  }

  const map = new Map();
  args.forEach((item, index) => {
    switch (item) {
      case "-c":
      case "--config":
        map.set("-c", args[index + 1]);
        break;
      case "-i":
      case "--input":
        map.set("-i", args[index + 1]);
        break;
      case "-o":
      case "--output":
        map.set("-o", args[index + 1]);
        break;
    }
  });

  return map;
}
