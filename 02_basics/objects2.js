//const tinderUser = new Object()

const tinderUser = {}
tinderUser.id = "234abc"
tinderUser.name = "shi"
tinderUser.isLoggedIn = false

//console.log(tinderUser);

const regularUser = {
    email: "shivi@gmail.com",
    fullname: {
        usersfullname: {
            firstname: "Shivani",
            lastname: "Gupta"
        }

    }
}

//console.log(regularUser.fullname.usersfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj4)

//console.log(obj3);

const obj3 = {...obj1, ...obj2}
//console.log(obj3);

const user = [
    {
    id1: 1,
    email: "sh@j.com",
},
{
    id1: 1,
    email: "sh@j.com",
},
{
    id1: 1,
    email: "sh@j.com",
},
]
user[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));


// object destructuring

const course = {
    coursename: "js shivi",
    price: 1000,
    courseInstructor: "Hitesh",

}

//course.courseinstructor

const {courseInstructor: instructor} = course

//console.log(courseInstructor);

console.log(instructor);

//{
   // "name": "Shivani",
   // "coursename": "js",
   // "price": "free",

//}

[
    {},
    {},
    {}
]

