import fs from 'fs';

const ERRORS = {
  ERR_NOT_EXIST: inputFile => `Error: File ${inputFile} does not exist\n`,
  ERR_R_ACCESS: inputFile =>
    `Error: You do not have read access from the file ${inputFile}\n`,
  ERR_W_ACCESS: inputFile =>
    `Error: You do not have write access to the file ${inputFile}\n`,
  ERR_NOT_A_FILE: inputFile => `Error: ${inputFile} is not a file\n`,
};

const IO_MODES = {
  R: 'R',
  W: 'W',
};

const checkFile = (inputFile, mode = IO_MODES.R) => {
  if (!fs.existsSync(inputFile)) {
    process.stderr.write(ERRORS.ERR_NOT_EXIST(inputFile));
    process.exit(1);
  }

  if (!fs.lstatSync(inputFile).isFile()) {
    process.stderr.write(ERRORS.ERR_NOT_A_FILE(inputFile));
    process.exit(1);
  }

  try {
    const accessMode = {
      [IO_MODES.R]: fs.constants.R_OK,
      [IO_MODES.W]: fs.constants.W_OK,
    }[mode];
    fs.accessSync(inputFile, accessMode);
  } catch (e) {
    process.stderr.write(ERRORS[`ERR_${mode}_ACCESS`](inputFile));
    process.exit(1);
  }
};

export const getInputStream = inputFile => {
  if (!inputFile) return process.stdin;
  checkFile(inputFile, IO_MODES.R);
  return fs.createReadStream(inputFile);
};

export const getOutputStream = inputFile => {
  if (!inputFile) return process.stdout;
  checkFile(inputFile, IO_MODES.W);
  return fs.createWriteStream(inputFile, { flags: 'a' });
};
