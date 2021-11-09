export function Roat(str, shift) {
  // готово работает вроде как
  return String.fromCharCode(
    ...str
      .toString()
      .split("")
      .map((item) => {
        const flag = item == item.toLowerCase();
        item = item.toLowerCase();
        const asciiCode = item.charCodeAt(0);

        if (
          (asciiCode >= 65 && asciiCode <= 90) ||
          (asciiCode >= 97 && asciiCode <= 122)
        ) {
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

export function Atbash(str) {
  return String.fromCharCode(
    ...str
      .toString()
      .split("")
      .map((item) => {
        const flag = item == item.toLowerCase();
        item = item.toLowerCase();

        const asciiCode = item.charCodeAt(0);
        if (
          (asciiCode >= 65 && asciiCode <= 90) ||
          (asciiCode >= 97 && asciiCode <= 122)
        ) {
          const shift = asciiCode - 97;

          return flag ? 122 - shift : 90 - shift;
        }
        return asciiCode;
      })
  );
}
