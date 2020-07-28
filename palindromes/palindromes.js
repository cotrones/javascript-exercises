const palindromes = function(str) {
	const punctuation = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~ ';
	const letters = str.toLowerCase().split('');
	const cleanLetters = letters.filter(function(letter) {
		return punctuation.indexOf(letter) === -1;
	});

	return cleanLetters.join('') === cleanLetters.reverse().join('');
}

module.exports = palindromes
