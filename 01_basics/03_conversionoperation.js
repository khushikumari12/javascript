let score=33
console.log(typeof score) // type is number

let core="33" // type is string

let ore="33abc"
let valueInNumber=Number(ore) // string ore is converted into number using "Number"
console.log(typeof valueInNumber)  //type is number(but this string should not be converted into number)
console.log(valueInNumber)//it will give "NaN"=Not a Number"
//convert ho jayega but value m Nan aayaega.this is the problem in js 


let re= null
//after converting into number it will give 0.

let eee=true
//after converting into number it will give 1.

let gtgy= undefined
//after converting into number it will give Nan.


//in short
//"33"=>33
//"33abc"=>NaN
//true=>1;false=>0

let isLoggedIn=""
let booleanIsLoggedIn= Boolean(isLoggedIn)
console.log(isLoggedIn)
console.log(booleanIsLoggedIn)



