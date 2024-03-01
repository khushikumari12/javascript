const score=400 //it prints only 400

const balance=new Number(400)
console.log(balance)//it prints Number[400](it defines the datatype also)

console.log(balance.toString()) //now the typeof balance will be string

console.log(balance.toString().length)//gives 3



//imp
console.log(balance.toFixed(2))//add two decimal digit //400.00 //especilly use this method in ecommerce websites

const num=7667.8879
console.log(num.toPrecision(5)) //it will return a string//7667.9

const numm=1000000
console.log(numm.toLocaleString('en-IN'));//default value is in US .for indian value we use en-IN.
//output:10,00,000

//others are MAX_VALUE, MIN_VALUE,isFinite, isInteger etc



//*************MATH*************/

//with js Math lib comes as default

console.log(Math)//it itself is an obj with contains alot of properties(out: object [Math]{})

console.log(Math.abs(-4))//only convert neg value in positive not vice-versa

console.log(Math.round(4.6))//round off and gives 5

//for upper and lower round value we use ceiling and floor

console.log(Math.ceil(4.2))//ye top wala he krega hmesha....prints 5
console.log(Math.floor(4.6))//ye hmesha lowest value he lega .....prints 4



console.log(Math.min(2,5,7,8,1,34))//gives 1
console.log(Math.max(2,5,7,8,1,34))//gives 34




console.log(Math.random())//in js it will always take a number btw 0 and 1
//soo we need to multiply the number with 10

console.log((Math.random()*10)+1)//we writes +1 to avoid the case in which we have 0.076655454(soo after multiplying with 10 it will give 0 thats why)

//we write Math.floor also to wrap up the number

console.log(Math.floor(Math.random()*10)+1)//LEARN


//IMP(LEARN THE FPORMULA)
const min=10
const max=20


console.log(Math.floor(Math.random() * (max-min+1))+min)///very imppppppppppp









