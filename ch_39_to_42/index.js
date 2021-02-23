/**
 * Make a Percentage Calculator Get the 5-course number from the userfor example
 * course1 is 70 var totalMarks = 500 Calculate the total percentage formula:
 * obtainedMarks * 100/ totalMarks Calculate the grade use switch case Grade A+
 * 90% to 100% , Grade A 75% to 89% , Grade B 60% to 74% , Grade C 45% to 60% ,
 * Grade D 30% to 44% Grade F 0% to 29% print output in alert.
 */

var totalMarks = 500;

var course1 = prompt("Enter Marks for Dockers:");

var course2 = prompt("Enter Marks for GITHUB:");

var course3 = prompt("Enter Marks for CSS:");

var course4 = prompt("Enter Marks for JavaScript:");

var course5 = prompt("Enter Marks for HTML:");

function total() {

	var marksObtained = parseInt(course1) + parseInt(course2)
			+ parseInt(course3) + parseInt(course4) + parseInt(course5);
	var percent = (marksObtained / totalMarks) * 100;
	return percent;
}

var marks = total();
console.log(marks);

switch (marks) {
case (marks > 90) && marks:
	alert("Your grades are A+");
	break;
case (marks > 75 && marks < 90) && marks:
	alert("Your grades are A");
	break;
case (marks > 60 && marks < 75) && marks:
	alert("Your grades are B");
	break;
case (marks > 45 && marks < 60) && marks:
	alert("Your grades are C");
	break;
case (marks > 30 && marks < 45) && marks:
	alert("Your grades are D");
	break;
default:
	alert("Your grades are E");
	break;
}
