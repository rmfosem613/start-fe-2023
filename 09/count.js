const $count = document.querySelector(".count");
const $plus = document.getElementById("plus");
const $minus = document.getElementById("minus");

let num = 10;

function updateCount() {
  $count.innerHTML = num;
}

function plusCount() {
  num += 1;
  updateCount();
}

function minusCount() {
  num -= 1;
  updateCount();
}

function init() {
  updateCount();
  $plus.addEventListener("click", plusCount);
  $minus.addEventListener("click", minusCount);
}

init();
