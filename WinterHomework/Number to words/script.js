
let units = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten",
	"Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"];
let tens = ["Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];



function num(number) {

	let theword = "";
	let started;
		// Working only for numbers till 1000
	if (number > 1000) {
		return "Number cannot be converted";
	}
	
	else if (number === 0) {
		return units[0];
	}

	else if (number === 1000) {
		return "One Thousand"
	}

	for (let i = 9; i >= 1; i--) {
		if (number >= i * 100) {
			theword += units[i];
			started = 1;
			theword += " Hundred";
			if (number !== i * 100) theword += " And ";
			number -= i * 100;
			i = 0;
		}
	};

	for (let i = 9; i >= 2; i--) {
		if (number >= i * 10) {
			theword += (started ? tens[i - 2] : tens[i - 2]);
			started = 1;
			if (number !== i * 10) theword += "-";
			number -= i * 10;
			i = 0
		}
	};

	for (let i = 1; i < 20; i++) {
		if (number === i) {
			theword += (started ? units[i] : units[i]);
		}
	};
	return theword;
}

// Testing only numbers from 0 to 1000

console.log(num(0))
console.log(num(10))
console.log(num(65))
console.log(num(150))
console.log(num(843))
console.log(num(1000))
console.log(num(1001))


