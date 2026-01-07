const arrowdemo = (a, b, ...c) => {
    console.log("value of a:" + a);
    console.log("value of b:" + b);
    console.log("value of c:" + c);
};
arrowdemo(10, 20, 50, 40, 50);
//rest parameter
//default parameters
const addnums = (a=20, b) => {
    console.log("Addition is: " + (a + b));
    
}
addnums(10);
