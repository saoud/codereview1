// Question 3:

let inputString = "sqqibbbleee";
let temp = ""
let outputArray = [];
let count = 1;
let outputString = ""
let compressString = (string) => {
    for(let i=0; i<string.length; i++) {
  let curr = string[i];
  let next = string[i+1];
    if (curr !== temp) {
    outputString += curr
  count = 1
  temp = curr;
}    else  { 
  count++
    if(curr !== next) {
    outputString += count
    temp = curr
    } 
   }
 }
return outputString;
}

console.log(compressString(inputString))