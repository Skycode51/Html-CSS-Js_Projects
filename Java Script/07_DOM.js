
//document.getElementById("heading"); //h1
//console.log (heading);

//let headings = document.getElementsByClassName("heading");
//console.dir(headings);
//console.log(headings);

//let parahs = document.getElementsByTagName("p");
//console.dir(parahs);

//let elements = document.querySelector("p");
//console.dir(elements);

//let div = decument.querySelector("div");
//console.log(div);

//let id =div.getAttribute("id");
//console.log(id);

let newBtn = document.createElement("button");
newBtn.innerText = "click me!";

newBtn.style.color = "white";
newBtn.style.backgroundColor = "red";

document.querySelector("body").prepend(newBtn);

