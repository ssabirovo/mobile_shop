let addIphone7 = document.getElementById("iPhone7");
let temp = document.getElementById("cart");
let plusCart = document.getElementById("plusCart");
let cart = document.getElementById("cart");

plusCart.addEventListener("click", () => {
  cart.classList.toggle("cart");
});

addIphone7.addEventListener("click", () => {
  let newDiv = document.createElement("div");
  let newImg = newDiv.createElement("img");
  let h1 = newDiv.createElement("h1");
  let h1_2 = newDiv.createElement("h1");
  let button = newDiv.createElement("h1");

  newImg.src = "./IMAGES/iphone-7.png";
  h1.innerHTML = "iPhone-7";
  h1_2.innerHTML = "$10";
  button.innerHTML = "remove";

  newDiv.classList.add("count");
  temp.appendChild(newDiv);
});
