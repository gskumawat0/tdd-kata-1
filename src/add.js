function add(expression) {
  return expression.split(",").reduce((acc, num) => acc + parseInt(num), 0);
}

module.exports = add;
