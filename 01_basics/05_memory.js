//***************************** */
//stack(primitive)[stack m jb bhi koi cheez lenge toh hme uska copy he milta h], Heap(non-primitive)   [pr heap m bs reference milta h(jo bhi change krte h vo original value m he krte h)]

//eg

let myname="khushi"
let myanotherName=mynamne
myanotherName="happy"

console.log(myname)//ye ab bhi "khushi " aayega...kuki stack m original value change nhi hoti bs copy bnti h
console.log(myanotherName)//output:"happy"


//but in heap

let userOne={
    email:"khushirai869@gmail.com",
    upi:"khushi@ybl"
}

let userTwo=userOne

userTwo.email="kkhushi12@gmail.com"

console.log(userOne.email)
console.log(userTwo.email)
//dono m value change ho jayegi kuki esme original change ho jata h


