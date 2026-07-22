//comparision --->

// comparision between numbers and numbers is most accurate 
// (<, >, <=, >=, ==, !=, etc.)
console.log(54 > 56);  //false

//comparision between two different datatypes considered to be an incorrect practice
console.log("3" > 2);    //string converted into number automatically
console.log("04" > 4);   //false

//unpredictable results 
console.log(null < 0);    //false
console.log(null == 0);   //false
console.log(null <= 0);   //true     // converts null into 0 & NaN

//note >>>
/*
equality check (==) and comparison (<, >, <=, >=) works differently.
Comparison converts null to a number, treating it as 0.
(3) null >= 0 is true and (1) null > 0 is false.
*/

//undefined always results false 
console.log(undefined == 0);   
console.log(undefined <= 0);
console.log(undefined >= 0);

//note >>> 
//strict check (===) -> check values & it's datatypes

console.log("3" === 3)   //false due to datatype
console.log(55 === 55)   //true value wise as well as datatype wise
