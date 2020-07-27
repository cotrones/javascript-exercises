const ftoc = function(x) {
	let result = (x - 32) * (5/9);
	return Number(result.toFixed(1));
}

const ctof = function(x) {
	let result = x * (9/5) + 32;
	return Number(result.toFixed(1));
}

module.exports = {
  ftoc,
  ctof
}
