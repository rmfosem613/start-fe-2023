// 체스판을 그리기 위한 HTML 요소 가져오기
const $board = document.getElementById("board");
const WHITE_COLOR = "white";
const BLACK_COLOR = "black";
let $prevTarget = "";

// 현재 위치에 맞는 색상의 칸을 HTML 문자열에 추가
const createBoard = (color) => `<div class="${color}"></div>`;

const createRow = (count = 4, startColor = "white") => {
  let row = "";
  for (let i = 0; i < count; i++) {
    let color = startColor;
    if (i % 2 == 0) {
      color = startColor === WHITE_COLOR ? BLACK_COLOR : WHITE_COLOR;
    }
    row += createBoard(color);
  }
  return row;
};

const createChessBoard = (count = 4) => {
  // 체스판을 그리기 위한 HTML 문자열을 저장할 변수를 선언
  let board = "";
  for (let i = 0; i < count; i++) {
    // 현재 위치가 검은색 칸인지 흰색 칸인지 판단
    const startColor = i % 2 === 0 ? WHITE_COLOR : BLACK_COLOR;
    board += createRow(4, startColor);
  }
  return board;
};

const selectBoard = (event) => {
  const $target = event.target;
  if ($target === $prevTarget) return;
  $target.classList.add("red");
  $prevTarget && $prevTarget.classList.remove("red");
  $prevTarget = $target;
};

// HTML 문자열을 체스판 요소에 할당
const init = () => {
  $board.addEventListener("click", selectBoard);
  $board.innerHTML = createChessBoard();
};

init();
