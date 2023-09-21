const accountId = 13459
var accountEmail = "shivi@gmail.com"
let accountPassword = "ik2346"
accountCity = "Goa"
let accountState;

// accountID = 78954 //

console.log(accountId);

/*
prefer not to use var because of issue in block scope and function scope
*/

accountEmail = "fgh@gmail.com"
accountPassword = "i00046"
accountCity = "delhi"


console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);

