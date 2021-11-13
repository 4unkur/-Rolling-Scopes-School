import { inputOutputFilesError } from "../Exceptions/Exceptions.js";
import fs from "fs";
export function inputOutputFilesValidation(map) {
  try {
    if (map.has("-i")) {
      if (!fs.existsSync(map.get("-i")))
        throw new inputOutputFilesError("Input file not found");
    }

    if (map.has("-o")) {
      if (!fs.existsSync(map.get("-o")))
        throw new inputOutputFilesError("Output file not found");
    }
  } catch (ex) {
    process.stderr.write(`[${ex.time}] ${ex.message}`);
    process.exit(1);
  }
}
