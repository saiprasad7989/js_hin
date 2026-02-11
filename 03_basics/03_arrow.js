const user = {
    username : "sai prasad",
    RollNumber : 705,

    WelcomeMessage : function(){
        console.log(`hi ${this.username}, welcome to the world! `);
        console.log(this);
        



    }
}

// user.WelcomeMessage()
// user.username = "sam"
// user.WelcomeMessage()

// console.log(this);

// function chai(){
//     let username = "sai"
//     console.log(this.username);
    
// }

// chai()


// const chai = function() {
//      let username = "sai"
//      console.log(this.username);

// }


const chai = () => {
     let username = "sai"
     console.log(this);

}
 
// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2

// }


// const addTwo = (num1, num2) =>  num1 + num2
const addTwo = (num1, num2) => (num1 + num2)

console.log(addTwo(3,4));
  



