import fs from "fs";

function argumentsValidation(map) {
  if (!map.has("-c")) {
    process.stderr.write("flag `-c` in not found");
    process.exit(123);
  }
  if (map.has("-i") && map.get("-i") == undefined) {
    process.stderr.write("flag -i exist but file path is not defined");
    process.exit(123);
  }
  if (map.has("-o") && map.get("-o") == undefined) {
    process.stderr.write("flag -o exist but file path is not defined");
    process.exit(123);
  }
}

function configValidation(map) {
  const allowedCiphers = ["A", "C0", "C1", "R0", "R1"];

  const ciphers = map.get("-c").split("-");
  console.log(ciphers);

  ciphers.forEach((item) => {
    if (allowedCiphers.indexOf(item) == -1) {
      process.stderr.write("Incorrect config");
      process.exit(123);
    }
  });
}

function inputOutputFilesValidation(map) {
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
  console.log("files exist");
}
export { argumentsValidation, inputOutputFilesValidation, configValidation };
