//DATE ek object hota h js kl andar


//date will be for now in millisecond
//in future we use "TEMPORAL" obj which is same as "MATH" soo we can use temporal.   for time zone date and etc..but now it is not available


let myDate=new Date()
console.log(myDate.toString());

console.log(myDate.toLocaleDateString());//gives 3/1/2024

console.log(typeof myDate)
//gives object

//note:months starts from 0 in js

const datee= new Date(2023,0,23)
console.log(datee.toDatestring());//mon jan 23 2023

const tdate=new Date(2023,0,23,5,3)
console.log(tdate.toLocaleDateString());//prints time also


let dateee= new Date("2023-01-23")//esme month 1 s he start hota h
//we use"mm-dd-yy"format more in india



//TIMESTAMP(for quizes and poles)

let myTimeStamp=Date.now()
console.log(myTimeStamp);
//gives 16778997767676 in millisec


console.log(dateee.getTime())//now we can easily compare these two(myTimeStamp and dateee)

//IMP
//most imp ques to ask in interview
//this is how we convert the date from millisec to seconds
console.log(Math.floor(myTimeStamp.now()/1000))
//for removing decimal values we use floor 
//LEARN



//other methods

let newDate=new Date()
console.log(newDate.getTime())
console.log(newDate.getMonth()+1)//because month start from 0
console.log(newDate.getDay())

//etc like getHours,getMilliseconds ,getMinutes ,getMinutes



//imp
newDate.toLocaleDateString(
    'default',{
        weekday: "long",
        
    }
)