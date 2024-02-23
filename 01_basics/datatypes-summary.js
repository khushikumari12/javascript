//datatypes are of two types primitive and non primitive in js

//primitive : String, Number, Boolean, null, undefined, symbol , bigInt

const stringg="khushi"
const isLoggedIn=true
const city=""
let something;

//symbol is for something unique
const IDlogin=Symbol(12345)
const idee=Symbol(12345)
console.log(IDlogin===idee)//it gives false

const bigNumber=7665654545676n //bigInt


//REFERENCE( Non primitive)

//non primitive= Array, Object, Functions

const heros=["khushi","hrithik","khushi ka hrithik"]//array

let student={
    name:"khushi",
    age:20,
    boyfriend: "yes"
}//object (type is object)

console.log(student)


const myfunc=function(){
    console.log("hello world")
}//(type is  function)


//mostly non primitive type is object but function type is object-function(imp)


