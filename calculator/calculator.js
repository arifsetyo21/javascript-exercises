function add (...numbers) {
	let total = 0;
	numbers.forEach(number => {
		total += number;
	});

	return total;
}

function subtract (...numbers) {
	return numbers[0] - numbers[1];
}

function sum(numbers) {
	let total = 0;
	if (numbers.length == 0) {
		return total;	
	} else {
		numbers.forEach(number => {
			total += parseInt(number);
		});
	}

	return total;
}

function multiply (numbers) {
	let total = 1;
	numbers.forEach(number => {
		total *= number
	})

	return total
}

function power(...numbers) {
	return Math.pow(numbers[0], numbers[1])
}

function factorial(number) {
	let total = 1;
	for (let i = number; i > 0; --i) {
		total *= i;
	}

	return total;
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
	power,
	factorial
}