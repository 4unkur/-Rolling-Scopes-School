import { access } from "fs/promises";

export async function inputOutputFilesValidation(map) {
  if (map.has("-i")) {
    try {
      await access(map.get("-i"));
    } catch (ex) {
      process.stderr.write("Input file is not exist");
      process.exit(1);
    }
  }

  if (map.has("-o")) {
    try {
      await access(map.get("-o"));
    } catch (ex) {
      process.stderr.write("Output file is not exist");
      process.exit(1);
    }
  }
}
