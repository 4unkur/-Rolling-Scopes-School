import fs from "fs";

export function getReadStream(map) {
  return map.has("-i") ? fs.createReadStream(map.get("-i")) : process.stdin;
}
