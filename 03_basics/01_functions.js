 function sayMyName(){
    console.log("s");
    console.log("a");
    console.log("i");
 }

//  sayMyName()

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
    
// }

function addTwoNumbers(number1, number2){
    
    // let result = number1 + number2
    // return result
    return number1 +number2
    
}

const result = addTwoNumbers(3, 5)

// console.log("result: ", result);


function loginUsersMessage(username = "computer"){
    if(!username){
        console.log("please enter username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUsersMessage())



function calculateCartPrice(...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500));


const user = {
    username : "sai prasad",
    Price : 199
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.Price}`);


}

// handleObject(user)
handleObject({
    username : "amar",
    Price : 399
})

const myNewArray = [200,400,500,600]

function returnSecondValue(getArray){
    return getArray[1]
}


console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,400,500,600]));
