import { Transform } from 'stream';

import { caesar } from './caesar.js';

class CipherTransform extends Transform {
  constructor(opt) {
    super(opt);

    const { shift, action } = opt;
    this.crypt = this._crypt.bind({ shift, action });
  }

  _crypt(str) {
    return caesar(str, this.shift, this.action);
  }

  _transform(chunk, encoding, callback) {
    try {
      const transformedChunk = this.crypt(`${chunk}`);
      callback(null, transformedChunk);
    } catch (e) {
      callback(e);
    }
  }
}

export const getTransformStream = (shift, action) => {
  const transformStream = new CipherTransform({ shift, action });
  transformStream.on('error', e => {
    process.stderr.write('Error while crypting data:', e.message);
    process.exit(1);
  });
  return transformStream;
};
