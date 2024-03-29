function addNums(num1=1,num2=1){
    console.log(num1+num2);
}
addNums(2,4);//prints 6

addNums();//prints 2

//return values

console.log(addNums(5,4));

//function as variables

const add=(num1=1,num2=1)=>{
    return num1+num2;
}
console.log(add(2,5));

//for a 1 line code inside function we can write

// const add=(num1,num2)=> console.log(num1+num2);

/**for a return 
 * const add=(num1,num2)=>num1+num2
 */
/*for a single parameter we can remove the paranthesis
* const add=num1=>num1+5
*/