import { pipeline } from 'stream';

import { getArguments } from './src/arguments.js';
import { getInputStream, getOutputStream } from './src/io.js';
import { getTransformStream } from './src/transform.js';

const main = () => {
  const { shift, action, input, output } = getArguments();

  const inputStream = getInputStream(input);
  const outputStream = getOutputStream(output);
  const transformStream = getTransformStream(shift, action);

  pipeline(inputStream, transformStream, outputStream, e => {
    if (e) {
      process.stderr.write(`Error in pipeline: ${e.message}`);
      process.exit(1);
    }
  });
};

main();
