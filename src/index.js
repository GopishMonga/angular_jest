function reverseInteger(integer){
	return Math.sign(integer)*parseInt(integer.toString().split('').reverse().join(''));
}

module.exports = reverseInteger;