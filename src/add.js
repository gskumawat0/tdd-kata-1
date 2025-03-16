function add(expression) {
  return expression
    .split(/,|\n/)
    .reduce((acc, num) => acc + parseInt(num || 0), 0);
}

module.exports = add;
