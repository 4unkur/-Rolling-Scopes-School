import {
  argumentsError,
  configError,
  inputOutputFilesError,
} from "../Exceptions/Exceptions.js";

export function argumentsValidation(map) {
  try {
    if (!map.has("-c")) throw new argumentsError("Flag -c not found");

    if (map.has("-c") && map.get("-c") == undefined)
      throw new configError("Config is not defined");

    if (map.has("-i") && map.get("-i") == undefined)
      throw new inputOutputFilesError("Input file not defined");

    if (map.has("-o") && map.get("-o") == undefined)
      throw new inputOutputFilesError("Output file not defined");
  } catch (ex) {
    process.stderr.write(`[${ex.time}] ${ex.message}`);
    process.exit(1);
  }
}
