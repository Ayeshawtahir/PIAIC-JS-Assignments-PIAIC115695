/**
 * 
 */

var course1 = prompt("Enter marks for course1", 0);
var course2 = prompt("Enter marks for course2", 0);
var course3 = prompt("Enter marks for course3", 0);
var course4 = prompt("Enter marks for course4", 0);
var course5 = prompt("Enter marks for course5", 0);

var totalMarks= 500;

var percentage = ((parseInt(course1) + parseInt(course2) + parseInt(course3) + parseInt(course4) + parseInt(course5)) * 100) / 500;

alert("Your percentage is " + percentage);