const ftoc = function() {
  arguments[0] = (arguments[0] - 32) * 5 / 9;
  return Math.round(arguments[0] * 10) / 10;
};

const ctof = function() {
  arguments[0] = arguments[0] * 9 / 5 + 32;
  return Math.round(arguments[0] * 10) / 10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
