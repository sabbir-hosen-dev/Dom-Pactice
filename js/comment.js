// commet sention 

const commentSection = document.getElementById("comment-wrap");
const commentInput = document.getElementById("comment");
const commentSubmit = document.getElementById("comment-btn")


commentSubmit.addEventListener("click", () => {
  if(commentInput.value.trim() === ""){
    alert("Please type yout comment")
  }
  const p = document.createElement("p");
  p.innerText = commentInput.value
  commentSection.appendChild(p)
  commentInput.value = ""
})