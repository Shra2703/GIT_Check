// named imports should be there in the curly braces
import {a} from "./app.js";
import {arr as array,bat,greet} from "./app.js"; // we change the name here then that name should be everywhere


console.log(a);
// console.log(arr); now we to use array for arr only
console.log(array)
console.log(bat);
console.log(greet());



