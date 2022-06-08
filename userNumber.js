
var a=parseInt(prompt("Enter a first Number :"));
var b=parseInt(prompt("Enter a second Number :"));
var c=prompt(" Operation is , add , sub , mul , div :");

if( c =="add"){
    d=a+b;
    console.log(" A = " + a + " B = " + b + "Addition is " +d);
}
else if( c == "sub"){
    d=a-b;
    console.log(" A = " + a + " B = " + b + "Subtraction is " +d);
}
else if( c == "mul"){
    d=a*b;
    console.log(" A = " + a + " B = " + b + " Multiplication is " +d);
}
else if( c == "div"){
    d=a/b;
    console.log(" A = " + a + " B = " + b + " Division is " +d)
}
else{
    console.log("Wrong operation");
}