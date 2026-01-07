const demoarray = [10, 20, "Ramesh", "Suresh"];
console.log(demoarray);
//literal syntax
const pnames = ["Realme", "Samsung", "Vivo", "Lg"];
console.log(pnames);
//object syntax
let prices = new Array(500, 400, 500, 600);
console.log(prices);
//To get value from array
console.log("First value is: " + pnames[1]);
for (let names of pnames) {
  console.log("Phone names are: " + names);
}
pnames.push("oneplus");
console.log(pnames);
pnames.unshift("poco");
console.log(pnames);
pnames.splice(2, 0, "moto", "oppo");
console.log(pnames);
//to remove
pnames.pop();
console.log(pnames);
pnames.shift();
console.log(pnames);
pnames.splice(3, 1);
console.log(pnames);
console.log(pnames.sort());
console.log(pnames.sort().reverse());
//update
pnames[2] = "infinix";
console.log(pnames);
let pnames1 = ["Divya"];
let productnames=[...pnames,...pnames1];
console.log("All product names: " + productnames);
//array advanced methods

