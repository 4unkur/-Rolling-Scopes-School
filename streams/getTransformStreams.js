import { Roat8Transform } from "./Roat8Transform.js";
import { CaesarTransform } from "./CaesarTransform.js";
import { AtbashTransform } from "./AtbashTransform.js";

export function getTransformStreams(config) {
  return config
    .get("-c")
    .split("-")
    .map((item) => {
      switch (item) {
        case "C0":
          return new CaesarTransform(-1);
          break;
        case "C1":
          return new CaesarTransform(1);
          break;
        case "R0":
          return new Roat8Transform(-8);
          break;
        case "R1":
          return new Roat8Transform(8);
          break;
        case "A":
          return new AtbashTransform();
          break;
      }
    });
}
