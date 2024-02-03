//single parameter function

function square(value){
    return value*value
}
console.log("funtion square is: "+square(5));

//using arrow function we can make the above function in a single line

const square_arrow=value=>value*value;
console.log("arrow square is: "+square_arrow(5));

//multiple parameter function

function add(num1,num2){
    return num1+num2;
}
console.log("function Sum is "+add(2,3));

//using arrow function

const sum_arrow=(num1,num2)=>num1+num2;
console.log("Arrow Sum is : "+sum_arrow(2,3));