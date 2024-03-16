//const tinder=new Object()//singleton object

const tinderr={} //non singleton

tinderr.id="2344j"
tinderr.name="khushi"
tinderr.isLoggedIn=false


const regularuser={
    email:"jkhjg@gmail.com",
    fullname:{
        userfullname:{
            firstname:"khushi",
            lastname:"kumari"
        }
    }
}

console.log(regularuser.fullname.userfullname);//gives the whole fullname as output


//COMBINING OBJECTS

const obj1={1:"a",3:"njb"}
const obj2={2:"b",4:"hhg"}

const obj3={obj1,obj2}//this will give object under onject

const obj4=Object.assign({},obj1,obj2)//empty paranthesis lgana aacha syntax hota h bec gaurantedd result shi aayega.. bec it is possible when there were more objects//obj1 is target and obj2 is source

//agar {} nhi lgayenge toh eska mtlb h ki saari values obj1 m store hori h....


//use this more
const obj5={...obj1,...obj2} //same as array


//objects in array

const users=[
    {
        id:3,
        name:"ngybh",
        email:"hdbwydg"
    },
    {
        id:4,
        name:"rt",
        email:"hdb"
    },
    {
        id:4,
        name:"ng",
        email:"ydg"
    }
]

console.log(users[1].email)//gives hbd 

console.log(Objects.keys(tinderr))//gives all the keys of tinderr
console.log(Objects.values(tinderr))
//gives all values 
console.log(Objects.entrises(tinderr))//converts all the key and values into an array

console.log(tinderr.has(id))

