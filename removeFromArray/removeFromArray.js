const removeFromArray = function(x, ...y) {
	let arr = x;
	let rem = y;
	for (let i = 0; i < rem.length; i++) {
		for (let j = 0; j < arr.length; j++) {
			if (rem[i] === arr[j]) {
				arr.splice(j, 1);
			}
		}
	}
	return arr;
}

module.exports = removeFromArray
