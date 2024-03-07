const myarr=[1,2,3,4,5]
console.log(myarr[3])


//Array methods

myarr.push(12)
myarr.push(17)
myarr.push(9)
myarr.pop() //removes last element


myarr.unshift(9)//add 9 at index 0 of array(if the size of array is large then it would be a problem)

myarr.shift()//removes the element at index 0

console.log(myarr.includes(9))//it checks whether arr includes 9 or not

console.log(myarr.indexOf(3))//gives index of 3

console.log(myarr)


//new array
const newarr=myarr.join()//join() adds all the elements of an array into a string

console.log(myarr)//gives[1,2,3,4,5]

console.log(newarr)//gives 1,2,3,4,5




//IMP
//slice, splice

const n1= ["A", myarr]

console.log(myarr.slice(1,3))
//The slice() method can be used to create a copy of an array or return a portion of an array. It is important to note that the slice() method does not alter the original array but instead creates a shallow copy.

console.log(n1)//n1 will be same after using slice  gives[2,3] //doesn't include the last range



console.log(myarr.splice(1,3))//it removes the elements from that range and gives [2,3,4]

//Unlike the slice() method, the splice() method will change the contents of the original array. The splice() method is used to add or remove elements of an existing array and the return value will be the removed items from the array.

//If nothing was removed from the array, then the return value will just be an empty array.
//(it manipulates the original array )
console.log(n1)//now it gives [1,5,12,17]