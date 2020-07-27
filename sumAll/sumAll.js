const sumAll = function(x, y) {
	let result = 0;
	if (!(Number.isInteger(x)) || !(Number.isInteger(y)) || (x < 0) || (y < 0)) {
		return 'ERROR';
	} else {
		if (x > y) {
			for (let i = y; i <= x; i++) {
				result += i;
			}
		} else {
			for (let i = x; i <= y; i++) {
				result += i;
			}
		}
	}
	return result;
}

module.exports = sumAll
