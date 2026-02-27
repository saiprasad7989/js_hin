// for of

// ["","",""]
// // [{},{},{}]

const arr = [1,2,3,4,5]

for (const num of arr) {
    console.log(num);
    
}

const greetings = "hello world!"
for (const greet of greetings) {
    console.log(`each is char is ${greet}`);
    
    
}

// Maps

const map = new Map()
map.set('IN' , 'India')    
map.set('EN' , 'England')    
map.set('CN' , 'China')    

console.log(map);

for (const [key, value] of map) {
    console.log(key, "=>" , value);
    
    
}

const myObject = {
    game1 : 'pubg',
    game2 : 'spyderman'
}

for (const [key, value] of myObject) {
    console.log(key, "=>" , value);

    
}