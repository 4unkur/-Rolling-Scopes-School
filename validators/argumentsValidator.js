import { argumentsError, inputOutputFilesError } from "../Exceptions.js";

export function argumentsValidation(map) {
  if (!map.has("-c")) {
    throw new argumentsError("Flag -c not found");
  }
  if (map.has("-i") && map.get("-i") == undefined) {
    throw new inputOutputFilesError("Input file not defined");
  }
  if (map.has("-o") && map.get("-o") == undefined) {
    throw new inputOutputFilesError("Output file not defined");
  }
}

// export function argumentsValidation(map) {
//   if (!map.has("-c")) {
//     process.stderr.write("flag `-c` in not found");
//     process.exit(123);
//   }
//   if (map.has("-i") && map.get("-i") == undefined) {
//     process.stderr.write("flag -i exist but file path is not defined");
//     process.exit(123);
//   }
//   if (map.has("-o") && map.get("-o") == undefined) {
//     process.stderr.write("flag -o exist but file path is not defined");
//     process.exit(123);
//   }
// }
