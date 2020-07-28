const fibonacci = function(num) {
	if (num < 0) {
		return 'OOPS';
	} else if (num < 2) {
		return Number(num);
	} else {
		return fibonacci(Number(num) - 1) + fibonacci(Number(num) - 2);
	}
}

module.exports = fibonacci
