function add (x, y) {
	return x + y;
}

function subtract (x, y) {
	return x - y;
}

function sum (arr) {
	if (arr.length < 1) {
		return 0;
	} else {
		const totalSum = arr.reduce((total, num) => {
			return total + num;
		});
		return totalSum;
	}
}

function multiply (arr) {
	const multiplied = arr.reduce((total, num) => {
		return total * num;
	});
	return multiplied;
}

function power(x, y) {
	let total = x;
	for (let i = 1; i < y; i++) {
		total *= x;
	}
	return total;
}

function factorial(x) {
	// let total = x;
	// for (let i = x; i > 0; i--) {
	// 	total *= x;
	// }

	let total = x =>
		x < 0
			? (() => {
				throw new TypeError('No negative numbers!');
			})
		: x <= 1
			? 1
			: x * factorial(x - 1);
	return total(x);
}

// let total = x =>
// 	x < 0
// 		? (() => {
// 			throw new TypeError('No negative numbers!');
// 		})
// 	: x <= 1
// 		? 1
// 		: x * total(x - 1);

module.exports = {
	add,
	subtract,
	sum,
	multiply,
	power,
	factorial
}