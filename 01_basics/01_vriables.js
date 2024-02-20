const accountId =14453 
let accountEmail="khushirai869@gmail.com" //let and var are used to store variables  but we only use let as let solves the problem of block scope and functional scope in js (forget var:don't use var ever)//

var accountPassword="12345"
accountCity="chandigarh"//(this should also not use to store variables:only use const and let)

//accountId=2// const keyword does not aloow to change the value

accountEmail="kjhdudh@gmail.com"//accountEmail will change
accountPassword="567687"
accountCity="delhi"
let accountName;//this will give undefined output

console.log(accountId);
console.log(accountEmail);

//for not writing the console many times we use console.table//
console.table([accountId,accountPassword,accountCity,accountEmail,accountName]);
