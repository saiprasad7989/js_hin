// singleton

// objects literals
// Object.create

const mySym = Symbol("key1")    /// to declare symbol


const JsUser = {
    name : "sai prasad",
    "full name" : "b t n sai prasad",
    [mySym] : "mykey1",  ///symbol 
    age : 23,
    location : "hyd",
    email : "saiprasa@gmail.com",
    isLoggedIn : false,
    lastLoginDays : ["monday", "saturday"]
}

//  console.log(JsUser.email)
//  console.log(JsUser["email"])
//  console.log(JsUser["full name"])
//  console.log(JsUser[mySym]);
 

 JsUser.email = "sai@chatgpt.com"
//  Object.freeze(JsUser)
 JsUser.email = "sai@microsoft.com"

//  console.log(JsUser);

JsUser.greeting = function(){
    console.log("hello js user");
    
}
 JsUser.greetingTwo = function(){
    console.log(`hello js user, ${this.name}`);
 }
 
 console.log(JsUser.greeting());
 console.log(JsUser.greetingTwo());
 

 

 
 