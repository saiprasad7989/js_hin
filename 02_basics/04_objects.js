// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "bharat"
tinderUser.isloggedin = "false"


// console.log(tinderUser);

const regularuser = {
    email : "some@gmail.com",
    fullname : {
        userfullname : {
            firstname : "sai",
            lastname : "prasad"
        }
    }
}

// console.log(regularuser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign( obj1,obj2, obj4)

const obj3 = {...obj1,...obj2}
// console.log(obj3);

const users = [
    {
        id: 1,
        email: "ha@gmail.com"
    }
]

// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isloggedin'));



const course = {
    coursename: "js in telugu",
    price: "999",
    courseinstructor: "sai"
}

// course.courseinstructor

const {courseinstructor: instructor} = course
// console.log(courseinstructor);
console.log(instructor);

// {
    "name": "sai"
    "coursename": "js in telugu"         ///object jason
    "price": "free"
}


[
    {},
    {},
    {}
    
]