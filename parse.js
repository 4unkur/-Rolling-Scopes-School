function configParsing(args) {
  const map = new Map();
  args.forEach((item, index) => {
    switch (item) {
      case "-c":
      case "--config":
        map.set(item, args[index + 1]);
        break;
      case "-i":
      case "--input":
        map.set(item, args[index + 1]);
        break;
      case "-o":
      case "--output":
        map.set(item, args[index + 1]);
        break;
    }
  });

  if (map.size * 2 != args.length) {
    process.stderr.write("Incorrect input");
    process.exit(123);
  }

  return map;
}

export { configParsing };
