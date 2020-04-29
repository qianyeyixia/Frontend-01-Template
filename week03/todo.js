/**
 * NumberToString
 * 
 */

const digits = '0123456789ABCDEF';
const MAX_FLOAT_LENGTH = 64;
function NumberToString(number, radix) {
  if (typeof number !== 'number') {
    throw new Error('param1 must be a number');
  }
  if (radix - Math.floor(radix) !== 0 || (radix < 2 || radix > 16)) {
    throw new Error('unsupported radix');
  }

  let integer = Math.floor(number);
  let fraction = number - integer;
  let str = integer === 0 ? '0' : '';

  while (integer > 0) {
    str = radixNumber(integer % radix) + str;
    integer = Math.floor(integer / radix);
  }

  if (fraction === 0) return str;

  str += '.';
  let length = 0;
  while (fraction !== 0 && length < MAX_FLOAT_LENGTH) {
    fraction *= radix;
    str = str + radixNumber(Math.floor(fraction));
    fraction = fraction - Math.floor(fraction);
    length++;
  }
  
  return str;
}


function radixNumber(number) {
  return digits[number]
}

// example 数字赚字符串
console.log(NumberToString(0,2))

/**
 * StringToNumber
 * 
 */

let charToNumber = str => {
  if (/\d/.test(str)) return str.codePointAt(0) - '0'.codePointAt(0);
  if (/[a-f]/.test(str)) return str.codePointAt(0) - 'a'.codePointAt(0) + 10;
  if (/[A-F]/.test(str)) return str.codePointAt(0) - 'A'.codePointAt(0) + 10;
  throw new Error('unsuppported character: ' + str)
}

function StringToNumber(str, radix = 10) {
  let chars = str.split('')
  let number = 0
  let begin = 0;
  while (begin < chars.length && chars[begin] !== '.') {
    number = number * radix;
    number += charToNumber(chars[begin]);
    begin++;
  }
  if (chars[begin] === '.') {
    begin++;
  }

  let end = chars.length - 1;
  let fraction = 0;
  while(end >= begin) {
    fraction = fraction / radix;
    fraction = charToNumber(chars[end]) + fraction;
    end--;
  }
  fraction = fraction / radix;

  return number + fraction;
}
//  example 字符串赚数字
console.log(StringToNumber('123.324',10))
console.log(StringToNumber('100',2))
console.log(StringToNumber('5d2',2))
