// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
   // console.log(num);
}

const greetings = "hello world!"
for (const greet of greetings) {
   // console.log(`each char is ${greet}`);
    
}

// Maps

const map = new Map()

map.set('IN', "India")
map.set('USA', "United States of America")
map.set('FR', "France")
map.set('IN', "India")// unique values in map

// console.log(map);

for (const [key, value] of map) {
    console.log(key, ':-', value);
    
}

const myObj = { 
    'game1': 'NFS',
    'game2': 'MARIO'
}
for (const [key, value] of myObj) { //does not works on object
    console.log(key, ':-', value);
    
}

