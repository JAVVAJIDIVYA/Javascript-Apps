//defining string
//backtick allows multi line strings
let desc = `ES6 stands for ECMAScript 6.
It is also known as ECMAScript 2015.
It is the 6th edition of the ECMAScript language specification.
ES6 introduced many new features and enhancements to JavaScript.`;
console.log(desc);

//string interpolation
let name = "Divya";
let lastname = `JAVVAJI `;
console.log(`${name} ${lastname}`);
//array destructuring
let colors = ['Red', 'Green', 'Blue'];
let [firstColor, secondColor, thirdColor,col] = colors;
console.log(firstColor);
console.log(secondColor);
console.log(thirdColor);
//object destructing
const movieinfo = {
    Movie:"Bahubali",
    Director : "S.S.Rajamouli",
    
    producer : "shobu yarlagadda"
}
let {Movie, Director,  producer} = movieinfo;
console.log(Movie);
console.log(Director);

console.log(producer);
