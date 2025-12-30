const accountId = 7989299
let accountEmail = "sai@gmail.com"
var accountPassword = "12345"
accountCity = "hyd"
let accountState;

// accountId = 2 // not allowed

accountEmail = "shdcb@gmail.com"
accountPassword = "222333"
accountCity = "vij"


console.log(accountEmail);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

/*
prefer not to use var
because of issue in bloack scope and functional scope
*/