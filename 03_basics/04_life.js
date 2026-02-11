// immediatly invoked function Expressions (IIFE)

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
    
}) ();

(() => {
    console.log(`TWO DB CONNECTED`);
    
}) ();

((name) => {
    console.log(`${name}`);
    
}) ('sai');
