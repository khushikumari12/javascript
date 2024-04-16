function sayMyName(){
    console.log("k");
    console.log("h");
    console.log("u");
}

sayMyName()


//function to add two numbers

function addTwoNumbers(number1,number2){  //these are parameters
     console.log(number1+number2);
}
addTwoNumbers(3,"4") // gives 34//there is no checking of datatypes //these 3,4 are arguments
addTwoNumbers(3,null) //gives 3


//ERROR IN FUNCTIOn
//when we store result in diff variable

const result=addTwoNumbers(3,5)//gives 8
console.log("result:"+ result);//undefined
//but when we check what is present in result it gives undefined



function addTwoNumbers(number1,number2){ 
    let result=number1+number2
    return result;
    console.log("khushi")//it will not execute as after return no instruc will be execute in a function
}

console.log("result:"+ result);//now this will execute as we have return the result inside the function




//another function
function loginUserMessage(username){    //if we pass username="sam" in argument then the value will be never undefined , it bydefault takes sam
   if(username===undefined){          //pr we can write if(!username)
      console.log("Please enter a username");
      return
   }
   return `${username} just logged in`
}

loginUserMessage("Khushi")//return nothing
//we have to write console
console.log(loginUserMessage("Khushi"))
console.log(loginUserMessage(""))//return "just logged in"

//IMP
console.log(loginUserMessage()) //returns undefined just logged in 




// REST OPERATOR
//used when we have soo many arguments passed..
//it simply wrap the arguments and gives an array

function calculateCartPrice(...num1){ 
   return num1
}

console.log(calculateCartPrice(200,400,500)) //gives [200,400,500...and soo on]


//IMP FOR INTERVIEW
//WHAT IF WE HAVE (val1, val2,...num1)

function calculateCarPrice(val1,val2,...num1){ 
   return num1
}

console.log(calculateCarPrice(200,400,500,2000,656) )//now val1=200 and val2=400
//only 2000 and 656 comes into array



















