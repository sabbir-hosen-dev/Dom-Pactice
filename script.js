const section = document.querySelector(".section");

section.innerHTML = `
  <h1> This is Dinamic section </h1>
  <ul> 
    <li>Dinamic one</li>
    <li>Dinamic Two</li>
    <li>Dinamic Three</li>
    <li>Dinamic Four </li>
  </ul>
`
section.classList.add("section-style");

const lis = document.querySelectorAll(".section ul li");

const sectionUl  = section.querySelector("ul")
sectionUl.style.listStyle = "none";
section.style.fontFamily = "roboto"

for(li of lis){
  li.style.marginBottom = "10px"
  li.style.fontWidht = "bold"
}
