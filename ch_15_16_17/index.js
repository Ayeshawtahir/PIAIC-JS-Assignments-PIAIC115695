/**
 * 
 */

var courses = [];

var course1 = prompt("Enter course 1 name:");

var course2 = prompt("Enter course 2 name:");

var course3 = prompt("Enter course 3 name:");

var course4 = prompt("Enter course 4 name:");

var course5 = prompt("Enter course 5 name:");
courses.push(course1, course2, course3, course4, course5);

alert(courses);

for (var i = 0; i < courses.length; i++) {
	var course = prompt(courses[i], courses[i]);

	if (course !== course[i]) {
		var j = i + 1;
		courses.splice(i, 1, course);
		
	}
}

alert(courses);