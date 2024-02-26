const name = "hitesh"
const repoCount = 50

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);//in modern lang we use this syntax

const gameName = new String('hitesh-hc-com')//string object

console.log(gameName[0]);
console.log(gameName.__proto__);//output:{}
//The __proto__ accessor property of Object instances exposes the [[Prototype]] (either an object or null) of this object.


console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());//trims the extra space

const url = "https:-//hitesh.-com/-hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));//split used with seperator and a limit
//output:[ 'hitesh', 'hc', 'com' ]