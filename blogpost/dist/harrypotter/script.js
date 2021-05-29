const btn = document.querySelector("button");
const paper = document.querySelector(".newspaper");
btn.addEventListener("click", e => {
  e.preventDefault();
  paper.classList.remove("playing");
  setTimeout(() => {
    paper.classList.add("playing");
  }, 100);
});