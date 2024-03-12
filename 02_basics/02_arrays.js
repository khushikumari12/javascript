const marvel_heroes=["yoyo","hrithik","khushi"]

const dc_heroes=["nitika","himanshi","teena"]

//marvel_heroes.push(dc_heroes)//add the whole dc array as a one element

console.log(marvel_heroes)




const heroes= marvel_heroes.concat(dc_heroes)//concat two or more arrays..this methods always return a new arrays. so we have to create another array

console.log(heroes)

//IMP
//another way (using spread operator)

const all_new_heroes=[...marvel_heroes,...dc_heroes]//if there are more array we can follew the same syntax

console.log(all_new_heroes)



/////////////////////////

const another_array=[1,2,3,[4,5,6],7,[7,8,9,[5,9]]]

const usable_another_array=another_array.flat(Infinity) //flat is use to breakdown the array it this case arrives
console.log(usable_another_array)



///////////////////////////////

//during data scraping we use this

console.log(Array.isArray("khushi"))//it gives false as it is not converting it into an array

//so we use from insted of isArray
console.log(Array.from("khushi"))


/////////////////////
//IMP
console.log(Array.from({name:"khushi"}))
//it gives an empty array as we are not defining here that we want array of key or value


///////
let score1=100;
let score2=400;
let score3=788;

console.log(Array.of(score1,score2,score3))//Array.of returns the new array






