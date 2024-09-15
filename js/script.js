const section = document.querySelector(".section");

section.innerHTML = `
  <h1> This is Dinamic section </h1>
  <ul> 
    <li>Dinamic one</li>
    <li>Dinamic Two</li>
    <li>Dinamic Three</li>
    <li>Dinamic Four </li>
  </ul>
`;
section.classList.add("section-style");

const lis = document.querySelectorAll(".section ul li");

const sectionUl = section.querySelector("ul");
sectionUl.style.listStyle = "none";
section.style.fontFamily = "roboto";


for (let li of lis) {
  li.style.marginBottom = "10px";
  li.style.fontWidht = "bold";
}

const heading = document.getElementById("heading");
heading.style.backgroundColor = "#0645";
heading.style.padding = "20px";
heading.style.textAlign = "center";
heading.style.borderRadius = "10px";
heading.style.marginBottom = "20px";

const subHeading = document.getElementsByClassName("sub-heading")[0];
subHeading.style.textAlign = "center";
subHeading.style.color = "#12dd";

const boxWrap = document.querySelector(".wrap");
boxWrap.classList.add("box-wrap");

const boxs = document.querySelectorAll(".box");
for (let box of boxs) {
  box.classList.add("box-style");
  box.style.widht = "100%";
}
const imgs = document.querySelectorAll(".img");

for (let img of imgs) {
  img.borderRadius = "10px";
  img.style.height = "150px";
  img.style.widht = "100%";
  img.style.backgroundColor = "#4343";
}

const item = document.querySelector(".item");
const ul = document.createElement("ul");
item.appendChild(ul);

const li = document.createElement("li");
li.innerText = "Text One";
ul.appendChild(li);

const li2 = document.createElement("li");
li2.innerText = "Text Two";
ul.appendChild(li2);

const li3 = document.createElement("li");
li3.innerText = "Text Three";
ul.appendChild(li3);

const li4 = document.createElement("li");
li4.innerText = "Text Four";
ul.appendChild(li4);

item.style.backgroundColor = "#1bbb";
item.style.padding = "20px";
item.style.borderRadius = "12px";
item.style.marginBottom = "20px";
