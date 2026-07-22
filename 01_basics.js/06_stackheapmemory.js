/*
MEMORY --->
There are 2 types of memory -->

1)STACK memory are used for PRIMITIVE datatypes
value change in variable's copy

let myEmail = "anu@gmail.com"
let myAnotherEmail = myEmail
myAnotherEmail = "ojasvi@gmail.com"

console.log(myEamil);  
// anu@gmail.com
console.log(myAnotherEmail);
// ojasvi@gmail.com


2)HEAP memory are used for NON-PRIMITIVE datatypes
change in original refrence(value)

let userOne = {
    Email : "abc@google.com",
    userId : 2423
}
let userTwo = userOne
userTwo.Email = "pnc@google.com"

console.log(userOne.Email);
// pnc@google.com
console.log(userTwo.Email);
// pnc@google.com

*/


