function add(expression) {
  const delimiter = new Set([",", "\n"]);
  let nums = expression;
  if (expression.startsWith("\\")) {
    const [customDelimiter, ...numbers] = expression.split("\n");
    delimiter.add(customDelimiter.at(-1));
    nums = numbers.join("\n");
  }

  let sum = 0;
  let currentNumber = "";
  for (let i = 0; i < nums.length; i++) {
    if (delimiter.has(nums[i])) {
      sum += parseInt(currentNumber || 0);
      currentNumber = "";
    } else {
      currentNumber += nums[i];
    }
  }
  sum += parseInt(currentNumber || 0);
  return sum;
}

module.exports = add;
