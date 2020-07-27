const repeatString = function(s, n) {
	let str = '';
	let count = 0;
	if (n < 0) {
		return 'ERROR';
	} else {
		while (n > count) {
			str+=s;
			count++;
		}
		return str;
	}
	
}

module.exports = repeatString
