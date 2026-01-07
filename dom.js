// basic DOM update
document.getElementById("info").innerHTML = "Top college in vadlamudi";
document.getElementById("title").style.color = "red";

const text = document.createElement("h2");
text.innerText = "Welcome to CSE";
document.body.appendChild(text);

document.getElementById("info").setAttribute("class", "demo-class");

// button styling
const button = document.getElementById("container");
button.style.padding = "10px 20px";
button.style.backgroundColor = "green";
button.style.color = "white";
button.style.border = "none";
button.style.cursor = "pointer";

// advanced DOM manipulation
const newElement = document.createElement("p");
newElement.innerText = "This is a new paragraph added to the DOM.";
document.body.appendChild(newElement);

newElement.style.fontSize = "18px";
newElement.style.color = "blue";

newElement.addEventListener("click", function () {
  alert("Paragraph clicked!");
});
