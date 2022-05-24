let star1 = document.getElementById("star1");
let star2 = document.getElementById("star2");
let star3 = document.getElementById("star3");
let star4 = document.getElementById("star4");
let star5 = document.getElementById("star5");

star1.addEventListener("click", () => {
  star1.classList.toggle("golden");
  star2.classList.remove("golden");
  star3.classList.remove("golden");
  star4.classList.remove("golden");
  star5.classList.remove("golden");
});
star2.addEventListener("click", () => {
  star1.classList.toggle("golden");
  star2.classList.toggle("golden");
  star3.classList.remove("golden");
  star4.classList.remove("golden");
  star5.classList.remove("golden");
});
star3.addEventListener("click", () => {
  star1.classList.toggle("golden");
  star2.classList.toggle("golden");
  star3.classList.toggle("golden");
  star4.classList.remove("golden");
  star5.classList.remove("golden");
});
star4.addEventListener("click", () => {
  star1.classList.toggle("golden");
  star2.classList.toggle("golden");
  star3.classList.toggle("golden");
  star4.classList.toggle("golden");
  star5.classList.remove("golden");
});
star5.addEventListener("click", () => {
  star1.classList.toggle("golden");
  star2.classList.toggle("golden");
  star3.classList.toggle("golden");
  star4.classList.toggle("golden");
  star5.classList.toggle("golden");
});

// loader
let start = document.getElementById("start");
let loaderBlue = document.getElementById("loaderBlue");

start.addEventListener("click", () => {
  loaderBlue.style.left = "0";
});

// gridcha

let cells = document.querySelectorAll(".cell");

for (let i = 0; i < cells.length; i++) {
  cells[i].addEventListener("mouseover", () => {
    cells[i].style.backgroundColor = "red";
  });
}
