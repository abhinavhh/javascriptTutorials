//companyName="Nexus";
//console.log("Company name is : "+companyName);


//'use strict' is used for giving a compulsory type for a variable
//for below example var is given

//'use strict'
var companyname="company";
console.log("Company name is : "+companyname);

for(var num1=1;num1<=5;num1++){}

console.log("Value of num1 is "+num1);

//for above for loop using the 'var' num1 it is possible to use num1 outside the for loop
//By using 'let' we can solve this

for(let num2=1;num2<=5;num2++){}
console.log("value of num2 is "+num2);

let mName="abhinav";
mName="adarsh";

//value of mName can be replaced when using 'let' keyword.
const nName="abhinand";

//value of nName cannot be replaced when we use 'const' keyword