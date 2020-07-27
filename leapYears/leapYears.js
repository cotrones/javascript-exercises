const leapYears = function(x) {
	if (Number.isInteger(x / 4)) {
		if (Number.isInteger(x / 400)) {
			return true;
		} else if (Number.isInteger(x / 100)) {
			return false;
		}
		return true;
	} else {
		return false;
	}
}

module.exports = leapYears
