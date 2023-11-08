//if

const isUserLoggedIn = true
const temperature = 40

// if (temperature === 41){
   // console.log("less than 50");
// } else {
   // console.log("greater than 50");
// } 

//console.log("executed");

// <, >, ==, <=, =>, ===, !=, !==

//const score = 200

//if (score > 100) {
    // const power = "fly"
   // console.log(`user power: ${power}`);
// }

// console.log(`user power: ${power}`);

const balance = 1000

// if(balance > 500) console.log("test"); //implcit scope

// if (balance > 500) console.log("test"),console.log("test2"); // dont write code like this

if (balance < 500){
    console.log("less than 5000");
} else if (balance < 750){
    console.log("less than 750");
} else if (balance < 900){
    console.log("less than 900");
} else {
    console.log("less than 1200");
}

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3){
    console.log("Allow to buy course");
}
if (loggedInFromGoogle || loggedInFromEmail){
    console.log("user logged in");
}