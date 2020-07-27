const reverseString = function(s) {
	let str = String(s);
	let arr = str.split('');
	arr.reverse();
	return arr.join('');
}

module.exports = reverseString
