//we use escape character '\' to add a stirng  with starting and ending quotes within a string..

let str="welcome to \"my project\"";
console.log(str);
//we can backtick character ' ` ' for this which makes its easier..
let str1=`welcome to "my project"`;
console.log(str1);

//embedded strings using + and "";

const cmpName="nexus";
const loc="thodu";
const message="company name is "+cmpName +" located at "+loc;
console.log(message);

//embedded strings using ` character is easier..

const cName="Nexus";
const cloc="Thodu";
const msg=`company name is ${cName} located at ${cloc}`;
console.log(msg); 

//we can also give multiple line strings within a backtick " ` "