const ALPHABET = {
  L: 'abcdefghijklmnopqrstuvwxyz',
  U: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  length: 26,
};

export const ACTIONS = {
  ENDCODE: 'encode',
  DECODE: 'decode',
};

const CIPHER = {
  [ACTIONS.ENDCODE]: (alphabet, sIndex, shift) =>
    alphabet[sIndex + shift] || alphabet[sIndex + shift - ALPHABET.length],
  [ACTIONS.DECODE]: (alphabet, sIndex, shift) =>
    alphabet[sIndex - shift] || alphabet[sIndex - shift + ALPHABET.length],
};

const getShift = shiftValue => {
  let shift = shiftValue;
  if (shift < 0) {
    shift = ALPHABET.length - (Math.abs(shift) % ALPHABET.length);
  }
  return shift % ALPHABET.length;
};

const getAlphabet = s => {
  if (s === s.toUpperCase()) return ALPHABET.U;
  return ALPHABET.L;
};

export const caesar = (str, shiftValue, action = ACTIONS.ENDCODE) => {
  if (!str) return '';
  if (shiftValue === 0) return str;

  let result = '';
  const shift = getShift(shiftValue);

  for (let i = 0; i < str.length; i++) {
    let s = str[i];

    if (s.match(/[a-z]/i)) {
      const alphabet = getAlphabet(s);
      const sIndex = alphabet.indexOf(s);
      s = CIPHER[action](alphabet, sIndex, shift);
    }

    result += s;
  }

  return result;
};
