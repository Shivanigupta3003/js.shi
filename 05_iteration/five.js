const coding = ["js", "ruby", "java", "python", "cpp"]

coding.forEach( function (val) {
   // console.log(val); 
} )

coding.forEach( (item) =>{
    //console.log(item);
} )

function printMe (item) {
    //console.log(item);

}
//coding.forEach(printMe)

coding.forEach ( (item, index, arr) => {
 //   console.log(item, index, arr);
} )

// database se isse jo value aaegi array ke format me aaegi and har ek value ek object hi hta hai(23 line code)

const myCoding = [ {
    languageName: "javascript",
    languageFileName: "js"
},
{
    languageName: "java",
    languageFileName: "java"
},
{
    languageName: "python",
    languageFileName: "py"
}
]

myCoding.forEach( (item) => {
console.log(item.languageFileName);
})