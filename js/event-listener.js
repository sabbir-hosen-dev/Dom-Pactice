const buttonWraper = document.getElementById("btn-wrap");

 //green bg event 
function makeGreen(){
  buttonWraper.style.background = "green";
}


// pink bg 

const pinkBtn = document.getElementById("pink");
pinkBtn.addEventListener("click", pinkBgChenger);

function pinkBgChenger (){
  buttonWraper.style.background = "pink"
}


// yellow bg 

const yellowBtn = document.getElementById("yellow");
yellowBtn.addEventListener("click", function yellowBgChenger () {
  buttonWraper.style.background = "yellow"
});

// parpel bg
const parpel = document.getElementById("parpel");
parpel.addEventListener("click", function(){
  buttonWraper.style.background = "lightGray"
})



// blue bg 

document.getElementById("blue").addEventListener("click", function () {
  buttonWraper.style.background = "blue"
})




// text Change 

const changeText = document.getElementById("text");
const textInput = document.getElementById("inputChenge");
const textUpdateBtn = document.getElementById("textUpdate");
textUpdateBtn.addEventListener("click",function () {
  if (textInput.value.trim() === "") {
    alert("Please input a value");
  }else{
    changeText.innerText = textInput.value
    textInput.value = "";
  }
})



