function sqrR(a,b,c) {
	var D = (b*b) - (4*a*c);
	if(D>0) {
		var x1= (-b-Math.sqrt(D))/(2*a);
		var x2= (-b+Math.sqrt(D))/(2*a);
	 	alert('x1='+x1);
		alert('x2= '+x2);
		return  x1, x2;	
	} else if (D===0) {
		var x = -b/(2*a);
		alert('x= '+x);
		return x;
	} else {
		alert('There is no root');
	}
}

var a = Number(prompt("Enter value 'A'"));
var b = Number(prompt("Enter value 'B'"));
var c = Number(prompt("Enter value 'C'"));

sqrR(a,b,c);
