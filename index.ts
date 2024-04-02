// Day 30 Challenge: Start Coding! 🚀

// Question 88: 

function roundingtotheNearestInteger(num:number) {
    return  Math.round(num);
}

console.log(roundingtotheNearestInteger(4.7));
console.log(roundingtotheNearestInteger(99.9));
console.log(roundingtotheNearestInteger(67.3));

// Question 89: 
function convertingStringstoNumbers(str:string) {
    return parseFloat(str);

    
}
console.log(convertingStringstoNumbers("123"));
console.log(convertingStringstoNumbers("745.67"));


// Question 90: 
function checkingValueisNaN (value : any)  :boolean{
    return isNaN(value);
    
}
console.log(checkingValueisNaN("hello world"));
console.log(checkingValueisNaN(123));