function buttonresult() {
    alert("hi");
}
let btnvalue = document.getElementById("demo");
btnvalue.addEventListener("click", buttonresult);
//alert using arrow
let btnvalue2 = document.getElementById("message");
btnvalue2.addEventListener("click", () => {
    alert("hello");
});
let btnvalue3 = document.getElementById("message");
btnvalue3.addEventListener("click", function() {
    alert("welcome");
});
//mouseover event
let h2value = document.getElementById("info");

const mouseoverlogic = () => {
    h2value.style.color = "blue";
}
const mouseoutlogic = () => {
    h2value.style.color = "";
}
h2value.addEventListener("mouseover", mouseoverlogic);
h2value.addEventListener("mouseout", mouseoutlogic);
