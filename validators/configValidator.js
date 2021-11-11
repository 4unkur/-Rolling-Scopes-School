import { configError } from "../Exceptions/Exceptions.js";

export function configValidation(map) {
  const allowedCiphers = ["A", "C0", "C1", "R0", "R1"];

  const ciphers = map.get("-c").split("-");

  try {
    ciphers.forEach((item) => {
      if (allowedCiphers.indexOf(item) == -1) {
        throw new configError("Incorrect config");
      }
    });
  } catch (ex) {
    process.stderr.write(`[${ex.time}] ${ex.message}`);
    process.exit(1);
  }
}
