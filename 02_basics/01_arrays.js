// array

const myArr = [0,1,2,3,4,5]
const myHeros = ["spiderman", "ironman"]

const myArr2 = new Array(1,2,3,4)
// console.log(myArr[1]);

//Array methods

// myArr.push(10) /// adding number
// myArr.push(7)
// myArr.pop()     /// removing last digit

// myArr.unshift(9)  /// adding the number at first place 
// myArr.shift()       /// shift acts like 'pop' but it removes first number

// console.log(myArr.includes(3)) /// discribes boolian
// console.log(myArr.indexOf(3))   /// digit placment in the object

// const newArr = myArr.join() /// 'join' bind the arrays which are in brackets converts into string.
// console.log(myArr);
// console.log(newArr);

// slice, splice

console.log("A ", myArr);
const myn1 = myArr.slice(1,3)

console.log("B ", myArr);
console.log(myn1);

const myn2 = myArr.splice(1,3)
console.log("C ", myArr);
console.log(myn2);









