//Spread operators using arrays


const numbers=[10,5];
function Calculator(a,b){
    const add=a+b;
    const sub=a-b;
    const div=a/b;
    const mul=a*b;
    return[add,sub,div,mul];
}
//we use ...array_name to access the complete variables in that array.

const[add,sub,mul,div]=Calculator(...numbers);
console.log(add);
console.log(sub);
console.log(div);
console.log(mul);

//sample 2

//add values into array using spread operator.

// const numbers=[10,5];
// const addNumbers1=[1,...numbers,6];//[1,10,5,6]
// const addNumbers2=[1,numbers];//[1,[10,5]] array of two elements.
// console.log(addNumbers1);
// console.log(addNumbers2);

// const moreNumbers=[12,6];
// const concatenate=[...numbers,...moreNumbers];//[10,5,12,6]
// console.log(concatenate);

// //sample 3

// const[first,...proceeding]=concatenate;//[10,5,12,6]
// console.log(first);//[10]
// console.log(proceeding);//[5,12,6]

// //sample 4

// const resultclone=[...concatenate];
// console.log(resultclone);//[10,5,12,6]


//Spread operator using objects

//sample 1

// const courseMain={
//     companyname:"Nexus",
//     coursename:"full stack"
// }
// console.log(courseMain);
// const course_details={
//     ...courseMain,//fetched the main course object using spread opertor.
//     fee:50
// };
// console.log(course_details);

// //sample 2

// const course_details_sub={...course_details};
// course_details_sub.coursename="app development";//changed the value in coursename
// console.log(course_details);
// console.log(course_details_sub);

// //sample 3

// const{fee,...course_details_sub2}=course_details_sub;//took value of fee into 'fee' and remaining into 'const_details_sub' .
// console.log(fee);
// console.log(course_details_sub2);