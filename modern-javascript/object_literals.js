let course={
    coursename:"fullstack development",
    coursefee:2000
}

console.log(course);
console.log(course.coursename);

displayDetails=(prop)=>course[prop];
console.log(displayDetails('coursefee'));


let propertyName="coursename";
let propertyValue="anything";
let course2={
    [propertyName]:propertyValue,
    companyName:"Nexus"
};
console.log(course2[propertyName]);

//sample with function

let functions={
    traditionalFunction(){
        console.log("loading traditional functions..")
    },
    arrowFunctions:()=>{
        console.log("Loading arrow functions..")
    }
}
functions.traditionalFunction();
functions.arrowFunctions();