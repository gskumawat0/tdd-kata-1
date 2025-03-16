function add(expression) {
  const delimiter = new Set([",", "\n"]);
  let nums = expression;

  if (expression.startsWith("//")) {
    const [customDelimiter, ...numbers] = expression.split("\n");
    delimiter.add(customDelimiter.at(-1));
    nums = numbers.join("\n");
  }

  let sum = 0;
  let currentNumber = "";
  const negativeNums = [];

  function handleNegativeNums(num) {
    const parsedNum = parseInt(num || 0);
    if (parsedNum < 0) {
      negativeNums.push(parsedNum);
    } else {
      sum += parsedNum;
    }
  }

  for (let i = 0; i < nums.length; i++) {
    if (delimiter.has(nums[i])) {
      handleNegativeNums(currentNumber);
      currentNumber = "";
    } else {
      currentNumber += nums[i];
    }
  }

  handleNegativeNums(currentNumber);

  if (negativeNums.length > 0) {
    throw new Error(`negative numbers not allowed ${negativeNums.join(",")}`);
  }

  return sum;
}

module.exports = add;
