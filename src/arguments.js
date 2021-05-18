import { program, Option } from 'commander';

import { ACTIONS } from './caesar.js';

const validateShift = value => {
  const shift = parseInt(value, 10);

  if (isNaN(shift)) {
    process.stderr.write('Error: shift value must be integer\n');
    process.exit(1);
  }

  return shift;
};

export const getArguments = () => {
  program
    .requiredOption('-s, --shift <size>', 'cipher shift size', validateShift)
    .addOption(
      new Option('-a, --action <type>', 'cipher action (encode/decode)')
        .choices(Object.values(ACTIONS))
        .makeOptionMandatory(true)
    )
    .option('-i, --input <file>', 'input file to read from')
    .option('-o, --output <file>', 'output file to write to');

  program.parse(process.argv);

  return program.opts();
};
