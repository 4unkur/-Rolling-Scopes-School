import fs from "fs";

export function inputOutputFilesValidation(map) {
  if (map.has("-i")) {
    if (!fs.existsSync(map.get("-i"))) {
      // сделать асинхронно
      process.stderr.write("Input file is not exist");
      process.exit(123);
    }
  }

  if (map.has("-o")) {
    if (!fs.existsSync(map.get("-o"))) {
      // сделать асинхронно
      process.stderr.write("Output file is not exist");
      process.exit(123);
    }
  }
}
