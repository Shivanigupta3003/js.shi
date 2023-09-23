const name = "Shivani"
const repCount = 90

//console.log(name + repCount + "value"); outdated

console.log(`Hello my name is ${name} and my repcount is ${repCount}.`);

const gameName = new String("Shivani-shi-com") // declared string

console.log(gameName[12]); //key value pair access
console.log(gameName.__proto__); // gives prototype eg. object 

console.log(gameName.charAt(11)); //gives character's value 

console.log(gameName.toUpperCase()); //converts in uppercase also it does not change orignal string value cz of stack memory

console.log(gameName.toLowerCase()); //converts in lowercase

console.log(gameName.length); //gives length of the string

console.log(gameName.indexOf('o')); //it gives value in number of the character

const newString = gameName.substring(0, 8) //gives value
console.log(newString);

const anotherString = gameName.slice(-8, 8) // slice value , also from -ve value
//console.log(anotherString);

const newStringOne = "     shivani    "
console.log(newStringOne);
console.log(newStringOne.trim()); //it trims space or any value

const url = "https://shivani.com/shivani%20gupta"

console.log(url.replace('shivani', 'shona')); //it replaces value

console.log(url.includes('shona'));//gives value in boolean, whether it includes this value or not

console.log(gameName.split('_')); //converts to array
