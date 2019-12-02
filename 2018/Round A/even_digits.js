const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let testCase = 0;

const isOdd = x => x % 2 !== 0;

const solve = input => {
  const digits = input.split("");
  const digit = digits.find(isOdd);
  const index = digits.indexOf(digit)
  const { length } = digits;

  if (!digit) return 0;

  if (index === length - 1) return 1; 
  
  const repeat = number => number * ("1".repeat(length - 1 - index));
  const addZeros = x => x * 10 ** (length - index - 1);

  const prefix = Number(digits.slice(0, index + 1).join(""));

  const low = addZeros(prefix - 1) + repeat(8);
  const high = addZeros(prefix + 1) + repeat(0);
  const middle = (high - low) / 2 + low;

  if (input < middle) return input - low;
  return high - input
};

rl.on("line", line => {
  console.log(`Test Case #${testCase++}: ${solve(line)}`);
});

