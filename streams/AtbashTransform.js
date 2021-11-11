import stream from "stream";

export class AtbashTransform extends stream.Transform {
  constructor() {
    super();
  }

  _transform(chunk, encoding, callback) {
    this.push(this.Atbash(chunk));
    callback();
  }

  Atbash(chunk) {
    return String.fromCharCode(
      ...chunk
        .toString()
        .split("")
        .map((item) => {
          const flag = item == item.toLowerCase();
          item = item.toLowerCase();

          const asciiCode = item.charCodeAt(0);
          if (item.match(/[a-z]/)) {
            const shift = asciiCode - 97;

            return flag ? 122 - shift : 90 - shift;
          }
          return asciiCode;
        })
    );
  }
}
