// *****VAR

//Strings
var name="Sagar";
//Number
var age=29;
//Boolean
var canFly=true;
//Array
var languages=['Hindi','Marathi','English'];
//Objects
var friends ={
name:"Nikhil",
Hobby:"Trading"
}

var a=11;
console.log(a);

var a=null;
console.log(a);

// ******LET

//This will print the inside value even value is defined outside
// This will print Abhishek even name is sagar
{
    let name="Abhishek";
    console.log(name);
}
//Out it is out of scope and we again print the it will print sagar
console.log("Using Let :",name);



// *****CONSTANT

const Country="India";
console.log(Country);
//Country="UK"; // This will give error because constant is defined only once
const fruits=['mango','apple']
console.log(fruits);
fruits.push('Watermelon');// This will add value into contant
fruits.pop('Watermelon'); // This will remove any value from constant
//you cannot change the existing values of const it will give error
// fruits=['banana','papaya']