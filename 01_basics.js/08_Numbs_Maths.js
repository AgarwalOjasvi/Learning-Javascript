//NUMBERS ---->
let score = 67
console.log(score);

//more accurate way 
let balance = new Number(878.9743)
console.log(balance);

console.log(balance.__proto__); //{}

//Number methods --->
console.log(balance.toString());
//now, can also apply string methods 

console.log(balance.toFixed(2));
//fixed decimal places after decimal (.)

console.log(balance.toPrecision(6));
//fixed decimal place starting before decimal (.)

let hundreds = 100000000
console.log(hundreds.toLocaleString());
// US Standards representation by default
console.log(hundreds.toLocaleString("en-IN"));
// converted into indian system


//MATHS ---->
console.log(Math);

console.log(Math.abs(-59));
//absolute value- (-ve to +ve)

console.log(Math.round(768.38));
//Math.ceil(n)- upper value; Math.floor(n)- lower value
console.log(Math.ceil(789.39)); 
// 790
console.log(Math.floor(677.89));
//677

console.log(Math.min(6,7,4,3));
console.log(Math.max(4,6,8,4));

console.log(Math.random());
//generate random decimal numbers lies between [0,1) 

//Ramdom Integer (1 to 10)
console.log(Math.floor((Math.random() * 10 )+ 1));
//multiplyed by 10 to shift number and plus 1 to avoid 0 

let min = 10
let max = 15

//Generic Syntax Formula ---->
console.log(Math.floor((Math.random() * (max - min + 1)) + min));
// (math.floor) - removes decimal 
// (max - min + 1) - total numbers in the range and to avoid 0 
// (+ min) - range ko starting number s shift krna 
// (output) - 10 to 15 (koi bhi random integer) => depends to on max and min value 
