const userEmail = [ ]

if (userEmail){
    console.log("got user email");
    
} else {
    console.log("don't have user email");
    
}



// falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, ,NaN(not a Number)

// truthy values
// "0", "false", " ", [], {}, function(){}

// if (userEmail.length === 0) {
//     console.log("Array is empty");
    
// }

const empptyObj = {}

if (Object.keys(empptyObj).length === 0){
    console.log("object is empty");
    
}

//  nulish coalescing operator (??) : null undefined

let val1;
val1 = 5??10
console.log(val1);
