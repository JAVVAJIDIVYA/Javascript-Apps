//functions in js
function showmesaage(){
    console.log("Welcome to js functions");
}
showmesaage();
//function with parameters
function sumnumbers(a, b) {
    let sum = a + b;
    console.log("Sum is: " + sum);
}
sumnumbers(10, 20);
//function with return type
function multiplynumbers(x, y) {
    return x * y;
}
let result = multiplynumbers(5, 4);
console.log("Result is: " + result);
//new function syntax in es6
//arrow function
const arrowdemo = () => {
    console.log("This is arrow function");
}
arrowdemo();
//arrow with parameters
const addnums = (a, b) => {
    console.log("Addition is: " + (a + b));
}
addnums(15, 25);
//in a simple way
const addnums1 = (a, b) => a + b;
console.log("Addition is: " + addnums1(15, 25));
//arrow with return type
const multiplynumbers1 = (x, y) => x * y;
let res = multiplynumbers1(6, 7);
console.log("Multiplication is: " + res);