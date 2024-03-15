//singleton : wjb bhi hum object constructor use krke bnate h toh singleton onject bnta h(means ye apne tarah ka ek he object h)

//constructor method
//Object.create


//object literals : (esme singleton nhi bnta)
const mySym=Symbol("key1")
const jsUser={
    name : "khushi",
    age: 20,
    [mySym]:"key1",
    location: "chandigarh",
    email:"kkhushirai12@gmail.com",
    isLoggedIn : false,
    lastLoginDays:["Monday","Tuesday"]
}

//how to access these values (two ways)
console.log(jsUser[mySym])
console.log(jsUser.email)
console.log(jsUser["email"])//esme define krna pdega ki email string h
console.log(typeof mySym)//it gives symbol


//(if there is any key like ("nnd":"gyuyguy"))then we can never access this key with (.)

//imp ques interview
//ek symbol lo or usko object ki keys m lo or print krwao

//ans : key ko square bracket m he likhna h..tbhi uska type symbol aayega...nhi toh use string he mana jayega




jsUser.email="duieheiudheiu@gmail.com"//change the email value

//Object.freeze(jsUser)//now we can't change any value in jsUser

jsUser.email="euhd@gmail.com"//this will not update as we freezed the object
console.log(jsUser)

//function 

jsUser.func=function(){
    console.log("hello js user")
}

console.log(jsUser.func())

//another function

jsUser.functwo=function(){
    console.log(`hello js user,${this.name}`)
}//this takes reference to the  object

console.log(jsUser.functwo())