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
     console.log(this.username);

}
 
chai()


  



