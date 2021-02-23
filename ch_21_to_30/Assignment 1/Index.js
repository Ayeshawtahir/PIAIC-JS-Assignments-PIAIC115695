/**
 * 
 */

var num_a = prompt("Enter a decimal number.", "1.1");
var num = Math.ceil(num_a);

var str = "This is my first JavaScript course";

var str_a = str.slice(0,num);
 
 
 alert(str_a);
 
 var newStr = "";
 for (var i= num; i >=1; i--){
	 
	 var a = str_a.slice(i-1,i);
	 
	
	newStr = newStr + a;
	 
	 	 
 }
 alert(newStr);