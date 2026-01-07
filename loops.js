//loops in js
//for
for (let i = 1; i < 11; i++) {
    console.log("i value is: " + i);
}
//while
let j = 1;
while (j <= 10) {
    console.log("j value is: " + j);
    j++;
}
//do while
let k = 1;
do {
    console.log("k value is: " + k);
    k = k + 1;
} while (k <= 10);
//loops in advanced js(es-6)
//for in
//for of
//these loops are used to get data from iterables(array,object,string)
let pnames = ["realme", "Lg"];
for (let names of pnames) {
    console.log("Phone names are: " + names);
}
let empinfo ={
    ename: "Divya",
    esalary:"70000"
}
for (let info in empinfo) {
    console.log(empinfo[info]);
}
let clgname = "vignan";
for (let i in clgname){
    console.log(clgname[i]);
}
