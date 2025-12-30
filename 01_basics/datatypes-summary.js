// primitive 

// 7 types : String, Number, boolean, null, undefined, symbol, bigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail; 

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId)

// const bigNumber = 78342789327473474878892376883297862738n



// Reference (Non primitive)

//Array, Objects, Functions

const heros = ["ironman" , "thor", "captain america"]
let myObj= {
    name: "sai",
    age: 23,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

//https://262.ecma-international.org/5.1/#sec-11.4.3
