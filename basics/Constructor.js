//Constructor function

// function Person(first,second,dob){
//     this.first=first;
//     this.second=second;
//     this.dob=dob;
//     this.getFullName=function(){
//         return `${this.first} ${this.second}`;
//     }
// }
//prototype

// Person.prototype.getFullName=function(){
//     return `${this.first} ${this.second}`;
// }

//class Person same as function

class Person {
    constructor(first, second, dob) {
        this.first = first;
        this.second = second;
        this.dob = new Date(dob);
    }
    getBirthYear(){
        return this.dob.getFullYear();
    }
    getFullName(){
        return `${this.first} ${this.second}`;
    }
}
// Instantiate object

const person1=new Person('john','david','30-01-2003');
const person2=new Person('devi','jude','05-08-2000');

console.log(person1);

console.log(person2.first);

console.log(person1.getBirthYear());
//calling getFullName method

console.log(person2.getFullName());