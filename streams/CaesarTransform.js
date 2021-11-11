import stream from "stream";

export class CaesarTransform extends stream.Transform {
  constructor(shift) {
    super();
    this.shift = shift; // смещение
  }

  _transform(chunk, encoding, callback) {
    this.push(this.Roat(chunk, this.shift));
    callback();
  }

  Roat(chunk, shift) {
    return String.fromCharCode(
      ...chunk
        .toString()
        .split("")
        .map((item) => {
          const flag = item == item.toLowerCase();
          item = item.toLowerCase();
          const asciiCode = item.charCodeAt(0);

          if (item.match(/[a-z]/)) {
            if (shift >= 0) {
              if (asciiCode + shift > 122)
                return flag
                  ? 97 + asciiCode + shift - 122 - 1
                  : 97 + asciiCode + shift - 122 - 1 - 32;
              return flag ? asciiCode + shift : asciiCode + shift - 32;
            } else {
              if (asciiCode + shift < 97)
                return flag
                  ? 122 - (97 - (asciiCode + shift)) + 1
                  : 122 - (97 - (asciiCode + shift)) - 32 + 1; //
              return flag ? asciiCode + shift : asciiCode + shift - 32;
            }
          } else return asciiCode;
        })
    );
  }
}
