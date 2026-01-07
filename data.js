//datatypes in javascript
var empid = 2001;
console.log(typeof empid); //number
var esalary = 49000.99;
console.log(typeof esalary);
var emobilenumber = 9885645252;
console.log(typeof emobilenumber);
var name = "Divya";
console.log(typeof name);
var isworking = true;
console.log(typeof isworking);
var pf = null;
console.log(typeof pf);
var esi;
console.log(typeof esi);
var skills = ['html', 'css', 'js', 'reactjs'];
console.log(typeof skills);
var emp={
    id:2001,
    name:"Divya",
    salary:49000
};
console.log(typeof emp);
var tsc = BigInt("1234678054218980598");
console.log(typeof tsc);
var pname = Symbol("Realme");
var pname1= Symbol("Realme");
console.log(typeof pname);
console.log(pname==pname1); //false