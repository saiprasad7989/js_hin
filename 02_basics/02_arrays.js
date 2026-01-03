const marvel_heros = ["thor", "spiderman", "ironman"]
const dc_heros = ["supperman", "flash", "batman"]

// marvel_heros.push(dc_heros)  /// if we push the dc heros to marvel heros Array sees dc_heros as a single eliment in list. 

// console.log(marvel_heros);  
// console.log(marvel_heros[3][1]);

// const all_heros = marvel_heros.concat(dc_heros)  /// to solve the push issue. 'concat'is used where it combines and converts  into eliments in the list
// console.log(all_heros);

const all_new_heros = [...marvel_heros, ...dc_heros] /// ' ... ' is "spread" operator which act smae as concat. where this method is easy than concat method or an alternative way.
// console.log(all_new_heros);

const another_array = [1,2,3,4,[5,6,7,8],9,10,11,12,[13,14,[15,16]]]


const real_another_array =  another_array.flat(Infinity) /// 'flat' is used mix the eliments. 'infinity' is the depth but enter numericals also a good practice.

console.log(real_another_array);



console.log(Array.isArray("saiprasad")) /// Array.isarray is to find out whether it is Array or not.
console.log(Array.from("saiprasad")) /// Array.from is to convert the string, objects etc into Array format.
console.log(Array.from({name : "sai prasad"})) /// interesting!!!

let score1 = 100 
let score2 = 200 
let score3 = 300 

console.log(Array.of(score1, score2, score3)); 
