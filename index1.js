// variable declaration 

let x;
let y;
// if you declare x or y again error will occur

// variable assignment

x=120;
y=250;

console.log(x);
// declaring and assigning at once
let a =227;

console.log(a);

let age = 24;
let price= 36;
let nam= "Jacob";

console.log(`His name is ${nam} and he is ${age} years old.`);

// to display datatype of variable

console.log(typeof age);
console.log(typeof nam);

let favoritefood= "Momo";
console.log(`I like ${favoritefood}.`);
console.log(typeof favoritefood);

//boolean - either true or false

let online=true;
console.log(typeof online);

console.log(`${nam} is online: ${online}.`);

let student= false;
console.log(`Is ${nam} student?:${student}.`);

document.getElementById("p1").textContent= age;
document.getElementById("p2").textcontent= online;
document.getElementById("p3").textcontent= price;


