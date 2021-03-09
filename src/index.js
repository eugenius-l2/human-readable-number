module.exports = function toReadable (number) {
  let numString;
  let singlе;
  let tenths;
  let hundredths;
  const numbers = {
    1 : 'one',
    2 : 'two',
    3 : 'three',
    4 : 'four',
    5 : 'five',
    6 : 'six',
    7 : 'seven',
    8 : 'eight',
    9 : 'nine',
    10 : 'ten',
    11 : 'eleven',
    12 : 'twelve',
    13 : 'thirteen',
    14 : 'fourteen',
    15 : 'fifteen',
    16 : 'sixteen',
    17 : 'seventeen',
    18 : 'eighteen',
    19 : 'nineteen',
    20 : 'twenty',
    30 : 'thirty',
    40 : 'forty',
    50 : 'fifty',
    60 : 'sixty',
    70 : 'seventy',
    80 : 'eighty',
    90 : 'ninety',
    100 : 'hundred',
  }

  if (number === 0) return 'zero';

  numString = number.toString();

  const decStr = (dec, sin) => {
    const num = +(dec + sin);

    if (num <= 19) return numbers[num];

    if (num % 10 === 0) {
      return numbers[num];
    } else {
      tenths = numbers[+(dec + '0')];
      singlе = numbers[+sin] ? numbers[+sin] : '';
      return tenths + ' ' + singlе;
    }
  }

  if (number <= 19) return numbers[number];

  if (number >= 20 && number <= 99) {
    tenths = numString[0];
    singlе = numString[1];
    return decStr(tenths, singlе);
  }

  if (number >= 100 && number <= 999) {
    hundredths = numbers[+numString[0]] + ' ' + numbers[100];
    if (number % 100 === 0) {
      return hundredths;
    } else {
      tenths = numString[1];
      singlе = numString[2];
      return hundredths + ' ' + decStr(tenths, singlе);
    }
  }
}