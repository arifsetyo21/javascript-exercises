const ftoc = function(param) {
  let f = (param - 32) * (5/9);
  return parseFloat(f.toFixed(1));
}

const ctof = function(param) {
  let c = (param * (9/5)) + 32;
  return parseFloat(c.toFixed(1));
}

module.exports = {
  ftoc,
  ctof
}
