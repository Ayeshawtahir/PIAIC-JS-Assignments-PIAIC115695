/**
 * Second Assignment input value from user in String var inputValue="cloUd
 * naTive computinG" Convert every first letter of the content in Capitalize
 * case. inputValue="Cloud Native Computing" print value in console.log()
 * console.log(inputValue) | check result in browser console
 */

var inputValue = prompt("Input a string", "cloUd naTive computinG");

inputValue = inputValue.toLowerCase();

console.log(inputValue);
var numChars = inputValue.length;
var numSpace = 0;
var newStr = "";
var otherChar;
var firstChar;

var j = inputValue.indexOf(" ");

for (var i = 0; i < numChars; i++) {

	if (j !== -1) {

		firstChar = inputValue.slice(0, 1);
		firstChar = firstChar.toUpperCase();
		otherChar = inputValue.slice(1, j);
		newStr = newStr + " " + firstChar + otherChar;
		inputValue = inputValue.slice(j + 1);

		j = inputValue.indexOf(" ");
		i = j;

	}

	else {

		firstChar = inputValue.slice(0, 1);
		firstChar = firstChar.toUpperCase();
		otherChar = inputValue.slice(1);
		newStr = newStr + " " + firstChar + otherChar;
		break;

	}

}

console.log(newStr);
