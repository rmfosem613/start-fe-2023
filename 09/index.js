let $count = document.querySelector(".count");
let $plus = document.getElementById("plus");
let $minus = document.getElementById("minus");

let num = 10;

$plus.addEventListener("click", (event) => {
  num += 1;
  $count.innerHTML = num;
  //   console.log();
});

$minus.addEventListener("click", (event) => {
  num -= 1;
  $count.innerHTML = num;
  //   console.log();
});

function init() {
  $count.innerHTML = num;
}

init();
