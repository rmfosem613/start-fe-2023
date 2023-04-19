let x = 0;
let y = 0;
let isDown = false;
let offset = { x: 0, y: 0 };
let $dragEl = null;

document.body.addEventListener("mousedown", (e) => {
  isDown = true;
  $dragEl = e.target;

  offset.x = $dragEl.offsetLeft - e.clientX;
  offset.y = $dragEl.offsetTop - e.clientY;
});

document.body.addEventListener("mousemove", (e) => {
  if (isDown) {
    x = e.clientX;
    y = e.clientY;

    $dragEl.style.left = offset.x + x + "px";
    $dragEl.style.top = offset.y + y + "px";
  }
});

document.addEventListener("mouseup", (e) => {
  isDown = false;
});
