// immediatly invoked function Expressions (IIFE)

(function chai(){
    console.log(`DB CONNECTED`);
    
}) ();

(() => {
    console.log(`TWO DB CONNECTED`);
    
}) ();

((name) => {
    console.log(`${name}`);
    
}) ('sai');
