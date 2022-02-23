module.exports = function toReadable(number) {
	const units = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
	const teen = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
	const dec = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
	let result = [];

	if (number === 0) {
		result.push('zero');
	}

	if (Math.trunc(number / 100) > 0) {
		result.push(units[Math.trunc(number / 100) - 1] + ' hundred')
	}

	if (number % 100 > 0 && number % 100 < 10) {
		result.push(units[number % 100 - 1]);
	}

	if (number % 100 > 9 && number % 100 < 20) {
		result.push(teen[number % 100 - 10])
	}

	if (number % 100 > 19) {
		result.push(dec[(Math.trunc((number % 100) / 10)) - 2]);
		if ((number % 100) % 10 > 0) {
			result.push(units[((number % 100) % 10) - 1]);
		}
	}

	return (result.length > 1) ? result.join(' ') : result.join('');
}