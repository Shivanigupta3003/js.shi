//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}


// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username = "shivani"

    function two(){
        const website = "insta"
        console.log(username);
    }
    //child can access parents data, but parent cannot

    //console.log(website);

    //two()

}

//one()

if(true){
    const username = "shivi"
    if (username === "shivi"){
        const website = " insta"
        // console.log(username + website);
    }

    //console.log(website);
}

//console.log(username);

// ++++++++++++++++++ interesting ++++++++++++++++++

console.log(addone(5))

function addone(num){
    return num + 1
}



addTwo(5)//hoisting
const addTwo = function(num){
    return num + 2
}