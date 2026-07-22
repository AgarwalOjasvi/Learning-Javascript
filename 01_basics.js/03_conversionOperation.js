// CONVERSION --->
/*
it is not compulsory that a given datatype of a variable 
is the true/original datatype of that variable.
*/

let randomNumber = "43abc"
console.log(typeof (randomNumber)) //string

//Typecasting 
// SYNTAX => datatype (variable) 
// 1st letter of datatype should be capital

let valueInNumber = Number(randomNumber) 
console.log(typeof (valueInNumber))
console.log(valueInNumber)   
//NaN --> Not a Number (a type) cus 43abc is not a pure number

//impact >> string's datatype converted into a number

//example --->
let value = undefined 
console.log(typeof value) //number

let valueChange = Number(value)
console.log(typeof valueChange) //string
console.log(valueChange) //55

/*
"33" => 33;
"ojasvi" => NaN;
null => 0;
undefined => NaN;
"54gr" => NaN;
true => 1; false => 0;
*/


let isLoggedIn = 64
console.log(typeof isLoggedIn)

let ans = Boolean(isLoggedIn)
console.log(typeof ans)
console.log(ans)

/*
1 => true; 0 => false;
" " => false;
anyVariable/value => true;
*/


//OPERATION --->
let val = 4
let negVal = -val
console.log(negVal)  //-4

//arithmetic operation (+, -, /, *, **, %, etc.)

//concatenation
let val_01 = "Ojasvi"
let val_02 = " Agarwal"
let val_fin = val_01 + val_02
console.log(val_fin)

//basic
console.log("2" + 4)          //string + Num => stringNum
console.log("3" + 4 + 4)      //string + Num + Num => stringNumNum

console.log(2 + "3")          //num + String => numString
console.log(3 + 4 + "2")      //(num + Num) + String => (addition/operation) + String => additionString

//not suggested to write code in the following ways
console.log(true)  //true
console.log(+true) //1
console.log("")    //
console.log(+"")   //0
let num1, num2, num3
num1 = num2 = num3 = 32+64
console.log(num3)

//STUDY ---> prefix & postfix JS mdn 
/*
x++ => Pehle value do, baad mai +1
++x => pehle +1 karo, fir value do
*/

let x = 3
let y = x++
//y = x++ mai pehle old value assign hogi, then x increment hoga
console.log("y = " + y)
console.log("x = " + x)

let n = 4
let m = ++n
// m = ++n mai pehle increment hoga, then value assign hogi 
console.log("m = " + m)
console.log("n = " + n)
