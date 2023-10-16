
function sayMyName(){
    console.log("S");
console.log("H");
console.log("I");
console.log("V");
console.log("A");
console.log("N");
console.log("I");

}

//sayMyName() //sayMyName=reference, sayMyName()= execution

//function addTwoNumbers(number1, number2){
    //console.log(number1 + number2);

//}

function addTwoNumbers(number1, number2){
    //let result = number1 + number2
    //return result          //after return we can not do any code within the function
    return number1 + number2

}
const result = addTwoNumbers(5, 8)

//console.log("Result:", result);


function loginUserMessage(username = "shi"){ 
    if(!username){
        console.log("please enter a username");
        return

    }
    return`${username} just logged in`
}

//console.log(loginUserMessage("shivani"));

console.log(loginUserMessage("shivi")); //undefined just logged in

//function calculateCartPrice(...num1){
    //return num1
//}
//console.log(calculateCartPrice(200, 400, 600, 456));

function calculateCartPrice(val1, val2, ...num1){
    return num1
}
console.log(calculateCartPrice(200, 400, 600, 456));

const user = {
    username: "shivu",
    prices: 1000
}

function handleObject(anyobject) {
    console.log(`username is ${anyobject.username} price is ${anyobject.price}`);

}
//handleObject(user)

handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 500, 600, 900]

function returnSecondValue(getArray){
    return getArray[3]
}
//console.log(returnSecondValue(myNewArray));

console.log(returnSecondValue([200, 400, 500, 1000]));