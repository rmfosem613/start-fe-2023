var progress = document.getElementById("progress");

function animate() {
  var increment = 1;
  var width = 0;
  var intervalId = setInterval(function () {
    if (width >= 100) {
      clearInterval(intervalId);
      setTimeout(decrement, 500); // 2초 후에 감소 함수 호출
    } else {
      width += increment;
      progress.style.width = width + "%";
    }
  }, 10);
}

function decrement() {
  var increment = -1;
  var width = 100;
  var intervalId = setInterval(function () {
    if (width <= 0) {
      clearInterval(intervalId);
      setTimeout(animate, 500); // 2초 후에 증가 함수 호출
    } else {
      width += increment;
      progress.style.width = width + "%";
    }
  }, 10);
}

animate();
