console.log(2>1)
console.log(2>=1)
console.log(2<1)
console.log(2!=1)
console.log(2==1)

//problem arises when we compare two different datatypes..for eg.

console.log("2">1)
console.log("02">1)
//it gives true...js converts string 2 in int

console.log(null>0)//gives false(null ya toh kbhi 0 m convert ho jayega ya kbhi NaN m:toh baar baar check krna pdega)
console.log(null==0)//gives false
console.log(null>=0)//gives true


console.log(undefined>0)
console.log(undefined<0)
console.log(undefined==0)
console.log(undefined>=0)
//gives false in every statement



//STRICT CHECK....in this we use === for comparison. it checks the datatype also


console.log("2"==2)//gives true
console.log("2"===2)//gives false(because the datatype is different)

