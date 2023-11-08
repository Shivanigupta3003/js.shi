const userEmail = []

if (userEmail){
    console.log("got user email");
} else {
    console.log("don't have user email");
}
// falsey values

// faalse, 0, -0, BigInt 0n, "", null, undefined, NAN

//truthy values

// "0", 'false', " ", [], {}, function(){}

if (userEmail.length === 0){
    console.log("Array is empty");
}

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
console.log("array is empty");
}

// Nullish Coalescing Operator (??): null undefined

let val1;
val1 = 5 ?? 10
val1 = null ?? 10
val1 = undefined ?? 15
val1 = null ?? 10 ?? 15

console.log(val1);

// terniary operator

// condition ? true: false

const coffePrice = 100
coffePrice <= 80 ? console.log("less than 80") : console.log("more than 80");