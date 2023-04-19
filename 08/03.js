// 문제1
// 빨간색으로
const addRedBtn = document.querySelector(".add-red");

function addRedToBox() {
  const boxes = document.querySelectorAll(".box");
  boxes.forEach((box) => {
    box.classList.add("red");
  });
}

addRedBtn.addEventListener("click", addRedToBox);

// 문제2
// 추가
const addBtn = document.querySelector(".add-btn");

function addToBox() {
  const body = document.querySelector("body");
  const newBox = document.createElement("div");
  newBox.classList.add("box");
  body.appendChild(newBox);
}
addBtn.addEventListener("click", addToBox);

// 문제3
// 삭제

const deleteBtn = document.querySelector(".delete-btn");

function deleteToBox() {
  const box = document.querySelector(".box");
  if (box) {
    box.remove();
  }
}

deleteBtn.addEventListener("click", deleteToBox);

// 문제4
// TEXT 넣기

const textBtn = document.querySelector(".text-btn");
function addText() {
  const txt = document.querySelector(".txt");
  const textValue = txt.value;
  const boxes = document.querySelectorAll(".box");
  boxes.forEach((box) => {
    const textNode = document.createTextNode(textValue);
    box.appendChild(textNode);
  });
}
textBtn.addEventListener("click", addText);

// 문제5
// 초기화
const resetBtn = document.querySelector(".reset-btn");
function resetToBox() {
  const boxes = document.querySelectorAll(".box");
  boxes.forEach((box) => {
    box.remove();
  });
}

resetBtn.addEventListener("click", resetToBox);

// 문제6
// 토글
const toggleBtn = document.querySelector(".toggle-btn");
function toggleBoxes() {
  const boxes = document.querySelectorAll(".box");
  boxes.forEach((box) => {
    if (box.style.display === "none") {
      box.style.display = "block";
    } else {
      box.style.display = "none";
    }
  });
}
toggleBtn.addEventListener("click", toggleBoxes);

// 문제7
// 이미지 추가

const imageBtn = document.querySelector(".image-btn");
function addImageToBoxes() {
  const boxes = document.querySelectorAll(".box");
  if (boxes.length === 0) {
    const newBox = document.createElement("div");
    newBox.classList.add("box");
    document.body.appendChild(newBox);
    boxes.push(newBox);
  }
  boxes.forEach((box) => {
    const img = document.createElement("img");
    img.src = "https://i.imgur.com/69NjYBH.png";
    box.innerHTML = "";
    box.appendChild(img);
  });
}
imageBtn.addEventListener("click", addImageToBoxes);
