//STRING

//Concatenation
let name = "ojasvi"
let surname = "_01"
let sub = "js"
let fullName = name + surname
console.log(fullName)

//More Impactful
//backtick(``) --> opton + ~
//String Interpolation: Process of embedding variables or expressions directly inside a string literal.
console.log(`I'm ${name} learning ${sub}.`)

//String Declaration
let str_dec = new String("Another way for declaring String!")
//here string an object: object mai define krna ki specifically string type ka hai 
console.log(str_dec)

//we can access index, apply methods, prototype, length etc.
console.log(str_dec[0])
console.log(str_dec.__proto__) // object{}
console.log(str_dec.length)

console.log(str_dec.toUpperCase())
console.log(str_dec.charAt(5))
console.log(str_dec.indexOf(("r")))

console.log(str_dec.substring(0,4)) // for +ve idx 
console.log(str_dec.slice())        // for +ve & -ve idx
console.log(str_dec.split(" "))     // to convert into an array

let newStr = "   learning  - js.    "
console.log(newStr)
console.log(newStr.trim())
//trim(): remove extra spaces; trimStart(),trimEnd()

let url = "https://javascript.com/learn%20js"
console.log(url.replace("%20", "_"))
console.log(url.includes("js")) // return true/false value?



//PRACTICE -->
let variable = new String ("   I'm B.Tech CSE Student studing in GLA University, Mathura.   ")
console.log("length: " + variable.length) 
// length is not a function

//methods or function ----------------------------------------------------------------------------------
// charAt(idx) - Character at an index 
console.log(variable.charAt(4))
//at(idx) - Character at index (supports -ve indices)
console.log(variable.at(-6))
//toUpperCase() 
console.log(variable.toUpperCase())
//toLowerCase()
console.log(variable.toLowerCase())
//trim() - remove spaces from both sides
//trimEnd(); trimStart()
console.log(variable.trim())
//includes() - Check if text exist 
console.log(variable.includes("xyz"))
// startsWith(); endsWith()
console.log(variable.endsWith(" "))
//indexOf() - idx of First occurances
//non-existing value => -ve idx
console.log(variable.indexOf("z"))
//lastIndexOf() - idx of last occuraces
//non-existing value => -ve idx
console.log(variable.lastIndexOf("t"))
//slice(start_idx, end_idx) - Extract part of string 
// for +ve & -ve idx
console.log(variable.slice(-11, -1))
//substring(start_idx, end_idx) - Extract part of string 
// for +ve idx
console.log(variable.substring(6, 18))
//replace() - replace FIRST match 
console.log(variable.replace(" ", "_"))
//replaceAll() - replace ALL match 
console.log(variable.replaceAll(" ", "_"))
//split() - Convert string to array 
console.log(variable.split(" "))
//concat() - Join Strings
console.log(variable.concat("hello"));
//repeat() - repeat string 
console.log(variable.repeat(3));
