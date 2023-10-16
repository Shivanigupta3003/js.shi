//singleton
//object.create

//object literals

const mySym = Symbol ("key1")
const JsUser = {
    name: "Shivani",
    "full name": "Shivani Gupta",
    [mySym]: "myKey1",
    age: 25,
    location: "Bhopal",
    email: "shivani@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Tuesday", "Thursday"]
}

//console.log(JsUser.email);
//console.log(JsUser["email"]);
//console.log(JsUser["full name"]);
//console.log(JsUser[mySym]);

JsUser.email = "shi@gmail.com"
//Object.freeze(JsUser)
JsUser.email = "adi@gmail.com"
//console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello Js user");
}

console.log(JsUser.greeting());

JsUser.greetingTwo = function(){
    console.log(`Hello Js user, ${this.name}`);
}

console.log(JsUser.greetingTwo());