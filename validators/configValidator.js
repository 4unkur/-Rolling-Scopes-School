export function configValidation(map) {
  const allowedCiphers = ["A", "C0", "C1", "R0", "R1"];

  const ciphers = map.get("-c").split("-");

  ciphers.forEach((item) => {
    if (allowedCiphers.indexOf(item) == -1) {
      process.stderr.write("Incorrect config");
      process.exit(123);
    }
  });
}
