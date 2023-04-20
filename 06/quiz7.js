$bug = document.getElementById("bug");
$box = document.querySelector(".box");
$point = document.getElementById("point");
$life = document.getElementById("life");

let point = 0;
let life = 10;

function moveBug() {
  const boxWidth = $box.offsetWidth;
  const boxHeight = $box.offsetHeight;
  const bugSize = $bug.offsetWidth;
  const x = Math.floor(Math.random() * (boxWidth - bugSize));
  const y = Math.floor(Math.random() * (boxHeight - bugSize));
  $bug.style.left = `${x}px`;
  $bug.style.top = `${y}px`;
}

$box.addEventListener("click", (event) => {
  if (event.target === $bug) {
    point++;
    $point.textContent = point;
    // moveBug();
  } else {
    life--;
    $life.textContent = life;
    // moveBug();

    if ($life.textContent == 0) {
      alert("gameover");
    }
  }
});

setInterval(moveBug, 2000);
