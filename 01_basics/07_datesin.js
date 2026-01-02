// Date

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toTimeString());

// console.log(typeof myDate);

// let myCreatedDate = new Date(2026, 0 , 02)
// let myCreatedDate = new Date(2026, 0 , 2, 5, 10)
// let myCreatedDate = new Date("2026-01-02")
let myCreatedDate = new Date("01-02-2026")
console.log(myCreatedDate.toLocaleString());

let myTimStamp = Date.now()
// console.log(myTimStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time`


new Date.toLocaleString('defult', {
    weekday: "long",
})








 