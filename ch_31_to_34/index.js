var name = prompt("Enter Your Name ");
var dobDate = prompt("Enter your Birth Date", 27);
var dobMonth = prompt("Enter your Birth Month, Must be in digits", 08);
var dobYear = prompt("Enter your Birth Year", 2013);

var dob = new Date();
dob.setFullYear(dobYear);
dob.setDate(dobDate);
dobMonth--;
dob.setMonth(dobMonth);

var today = new Date();

// extract the year, month, day, hour, minutes and seconds from current date
var Year = today.getFullYear();
var Month = today.getMonth();
var day = today.getDate();
var hour = today.getHours();
var minutes = today.getMinutes();
var seconds = today.getSeconds();

// Calculate time of Day and display greeting message

function calGreetMsg() {

	var greetMsg;

	if (hour > 4 && hour <= 12) {

		greetMsg = "Good Morning!";
	} else if (hour > 12 && hour < 15) {

		greetMsg = "Good Afternoon!";
	}

	else if (hour >= 15 && hour < 21) {

		greetMsg = "Evening!";
	}

	else if (hour >= 19) {

		greetMsg = "Night!";
	}

	console.log("Hello " + name + ", " + greetMsg);
}

calGreetMsg();

console.log("Your DOB is " + dob);

// declare a variable to collect the age in year, month, and days
var age = {};
var ageString = "";

// get years
var yearAge = Year - dobYear;

// get months
if (Month >= dobMonth)
	// get months when current month is greater
	var monthAge = Month - dobMonth;
else {
	yearAge--;
	var monthAge = 12 + Month - dobMonth;
}

// get days
if (day >= dobDate)
	// get days when the current date is greater
	var dateAge = day - dobDate;
else {
	monthAge--;
	var dateAge = 31 + day - dobDate;

	if (monthAge < 0) {
		monthAge = 11;
		yearAge--;

	}
}

// group the age in a single variable

age = {
	years : yearAge,
	months : monthAge,
	days : dateAge
};

// to calculate Next birthDay
var one_day = 1000 * 60 * 60 * 24;

var nextBD = new Date(today.getFullYear(), dobMonth, dobDate);
if (today.getMonth() == dobMonth && today.getDate() > dobDate) {
	nextBD.setFullYear(nextBD.getFullYear() + 1);

}

var next_BD = "How much time left in your next birthday? "
		+ Math.ceil((nextBD.getTime() - today.getTime()) / (one_day))
		+ " days " + Math.ceil(today.getHours() - nextBD.getHours())
		+ " hours " + Math.ceil(today.getMinutes() - nextBD.getMinutes())
		+ " minutes " + Math.ceil(today.getSeconds() - nextBD.getSeconds())
		+ " seconds left " + "until Next BirthDay!";

// To calculate age

if ((age.years > 0) && (age.months > 0) && (age.days > 0)) {

	ageString = "You are " + age.years + " years, " + age.months + " months, "
			+ age.days + " days, " + hour + " Hours, " + minutes
			+ " Minutes and " + seconds + " Seconds old";

	console.log(next_BD);

}

else if ((age.years == 0) && (age.months == 0) && (age.days > 0)) {
	ageString = "Only " + age.days + " days old!";

	console.log(next_BD);
}

else if ((age.years > 0) && (age.months == 0) && (age.days == 0)) {
	ageString = "Happy BirthDay " + name + "! " + "Today is your " + age.years
			+ "th Birthday";

}

else if ((age.years > 0) && (age.months > 0) && (age.days == 0)) {
	ageString = "You are " + age.years + " years and " + age.months
			+ " months old.";

	console.log(next_BD);

}

else if ((age.years == 0) && (age.months > 0) && (age.days > 0)) {
	ageString = "You are " + age.months + " months and " + age.days
			+ " days old.";

	console.log(next_BD);
}

else if ((age.years > 0) && (age.months == 0) && (age.days > 0)) {

	ageString = "You are " + age.years + " years, and " + age.days
			+ " days old.";

	console.log(next_BD);
}

else if ((age.years == 0) && (age.months > 0) && (age.days == 0)) {

	ageString = "You are " + age.months + " months old. ";

	console.log(next_BD);
} else {

	ageString = "Welcome to Earth! It's your first day on Earth!";

}

// display the calculated age
console.log(ageString);

var days = (new Date() - new Date(dobYear, dobMonth, dobDate)) / (one_day);
days = Math.round(days);

console.log("Your Age in Days: " + days);