const fruits=['pineapple','apple'];
console.log(fruits);

//length of an array

console.log("length is "+fruits.length);

//add elements at end of an array

fruits.push('banana');

//add elements at start of an array

fruits.unshift('mango');

console.log(fruits);

//add values at index location

fruits[4]='pears';

console.log(fruits);

//remove the last item

fruits.pop();

console.log(fruits);

// finding index of an element in array
 console.log("index is : "+fruits.indexOf('apple'));