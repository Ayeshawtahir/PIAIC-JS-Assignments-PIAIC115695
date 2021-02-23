/**
 * 
 */

var numb1 = prompt("Enter number 1", 0);
var numb2= prompt("Enter number 2", 0);
var sign = prompt("Enter the sign for operation you want to perform", "+");

if (sign == "+"){
	
	 var result;
	 
	 result = parseInt(numb1) + parseInt(numb2);
	 
	 alert( numb1 + sign + numb2 + " = " + result);
}

else if (sign == "-"){
	
	 var result;
	 
	 result = parseInt(numb1) - parseInt(numb2);
	 
	 alert( numb1 + " - " + numb2 + " = " + result);
}

else if (sign == "*"){
	
	 var result;
	 
	 result = parseInt(numb1) * parseInt(numb2);
	 
	 alert( numb1 + " * " + numb2 + " = " + result);
}

else if(sign == "/"){
	
	 var result;
	 
	 result = parseInt(numb1) / parseInt(numb2);
	 
	 alert( numb1 + " / " + numb2 + " = " + result);
}

else if(sign == "%"){
	
	 var result;
	 
	 result = parseInt(numb1) % parseInt(numb2);
	 
	 alert( numb1 + " % " + numb2 + " = " + result)
}

else
	{
	
	alert("You didn't enter the righ sign, like; + OR - OR * OR / OR %. Better luck next time");
	}

	