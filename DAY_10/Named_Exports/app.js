export let a = 10; // named export (individually)
let arr = [1,2,3,4,5];
let b = "hello";

function greet(){
    console.log("greeting");
}

export {arr,b as bat,greet} // export at the bottom 
// if the name is changed here then with the same name we have to import it
// it should be exported in the curly braces if it is in the bottom