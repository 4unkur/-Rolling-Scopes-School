import fs from "fs";

export function getWriteStream(map) {
  return map.has("-o")
    ? fs.createWriteStream(map.get("-o"), { flags: "a" })
    : process.stdout;
}
