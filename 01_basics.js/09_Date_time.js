// Dates are object in js 
// Dates are calculated in miliseconds since 1 january, 1970

let myDate = new Date();
console.log(myDate);
console.log(myDate.__proto__);  //{}
console.log(typeof (myDate));  // date is an object 


// for more FORMATTED way (methods of date object) ----------->
console.log(myDate.toString());
// DD MM DATE YY HH:MM:SS TIMEZONE

console.log(myDate.toDateString() + " only date");

console.log(myDate.toTimeString() + " only time");

console.log(myDate.toLocaleString() + " date and time acc. to local region");

console.log(myDate.toISOString() + " returns date and time in international (ISO) format");   

console.log(myDate.toJSON() + " returns same format as toISOString(). Mainly used when converting obj into JSON." ); 

console.log(myDate.toLocaleDateString() + " only date in local format ");

console.log(myDate.toLocaleTimeString() + " only the time in local format");

/*
to string - full date + time
toDateString - Date only
toTimeString - Time only
toLocaleString - Local date + Time 
toLocaleDateString - Local date
toLocaleTimeString - Local time
toISOString - iso farmat
toJSON - JSON/ISO format
*/

//FOR DECLARING SPECIFIC DATE ----->
let newDate = new Date(2025, 11, 3)
//  In yy mm dd format months starts from 0 in js 
console.log(newDate.toLocaleString());

let newDate_02 = new Date(2025, 11, 3, 12, 5)
// date with time
console.log(newDate_02.toLocaleString());

let newDate_03 = new Date("03-12-2025")
//  Date written inside (" "), months starts from 1 (as normal) in js 
console.log(newDate_03.toLocaleString());

 // youtube timestamp 11:22




