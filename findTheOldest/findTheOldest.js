const findTheOldest = function(arr) {
	let people = arr;
	return arr.reduce((oldest, current) => {
		const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
		const currentAge = getAge(current.yearOfBirth, current.yearOfDeath);
		return oldestAge < currentAge ? current : oldest;
	});
}

const getAge = function (birth, death) {
	if (!death) {
		death = new Date().getFullYear();
	}
	return death - birth;
}

module.exports = findTheOldest
