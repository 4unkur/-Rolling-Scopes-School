export function argumentsValidation(map) {
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
