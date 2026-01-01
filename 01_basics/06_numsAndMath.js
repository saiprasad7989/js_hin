const score = 200
// console.log(score);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(5));

const otherNumber = 123.555
// console.log(otherNumber.toPrecision(3));

const hundreds = 129550000
// console.log(hundreds.toLocaleString('en-In'));


//++++++++++++++++++++ Maths ++++++++++++++++++++++++++

// console.log(Math); // math is an object
// console.log(Math.abs(-4));    // nagitive converts to positive
// console.log(Math.round(4.5)); // round off based if below .5 or above .5 // * most used
// console.log(Math.ceil(4.2));  // anything above 4 will get round off into 5
// console.log(Math.floor(4.9)); // lowest value roundoff
// console.log(Math.min(5, 8, 1, 7)); // to find out min value
// console.log(Math.max(5, 8, 1, 7)); // to find out max value
// console.log(Math.max(5, 8, 1, 7)); // to find out max value

console.log(Math.random());
console.log((Math.random()*10)+1);
console.log(Math.floor(Math.random()*10)+1);


const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min +1))+ min)