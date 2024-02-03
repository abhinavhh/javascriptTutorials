let course={
    companyname:"Nexus",
    coursename:"Fullstack",
    coursefee:100,
    startdate:new Date('2023-01-28')
}
const companyname=course.companyname;
const coursename=course.coursename;
console.log(companyname);

//comment abouve 3 line before moving to next

//This can be done in an easy way
//use same variable name as in the course object

// const{companyname,coursename,coursefee}=course;
// console.log(coursename);

//we can alose use destructuring property in a function..

getaddress=()=>{
    return{
        cname:"something",
        place:"thodu",
        city:"idukky"
    };
}

const{cname,place}=getaddress();
console.log("place : "+place);

// //sample 3

let course2={
    companyname:"Nexus",
    coursename:"App Development",
    coursefee:100,
    startdate:new Date('2023-01-28')
}

displayCoursename=({coursename})=>{
    console.log(coursename);
}
displayCoursename(course);
displayCoursename(course2);

//sample 4

const array=[100,200,300,400];
const[first,second,,third]=array;
console.log(third);


//Sample Calculator

function Calculator(a,b){
    const add=a+b;
    const sub=a-b;
    const div=a/b;
    const mul=a*b;
    return[add,sub,div,mul];
}
const[add,sub,div,mul]=Calculator(6,3);
console.log(add);
console.log(sub);
console.log(div);
console.log(mul);