export class configError extends Error {
  constructor(message) {
    super(message);
    this.time = new Date().toLocaleTimeString();
  }
}

export class argumentsError extends configError {}
export class inputOutputFilesError extends configError {}
export class duplicateArgumentsError extends configError {}
