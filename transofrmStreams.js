import stream from "stream";
import { Atbash, Roat } from "./Ciphers.js";

export class CaesarTransform extends stream.Transform {
  constructor(shift) {
    super();
    this.shift = shift; // смещение
  }

  _transform(chunk, encoding, callback) {
    this.push(Roat(chunk, this.shift));
    callback();
  }
}
export class AtbashTransform extends stream.Transform {
  constructor() {
    super();
  }

  _transform(chunk, encoding, callback) {
    this.push(Atbash(chunk));
    callback();
  }
}
