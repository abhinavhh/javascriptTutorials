const person={
    firstname:'john',
    secondname:'joe',
    age:24,
    hobbies:['reading','coding','playing'],
    address:{
        street:'50 main cty',
        city:'london'
    }
}
//print person deails 

console.log(person);

//print firstname

console.log(person.firstname);

//print multiple values

console.log(person.firstname,person.secondname);

//print a single hobbie of the person

console.log(person.hobbies[1]);

//print city

console.log(person.address.city);

//pulling out some variables

const {firstname,hobbies}=person;

console.log(firstname,);
console.log(hobbies[0]);

//add items or properties into person

person.email='john@gmail.com'

console.log(person);