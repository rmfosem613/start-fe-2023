// 1. 문자열 합치기
const year = 2022;
const month = 11;
const day = 3;

// // quiz
let dateString = "";

if (day < 10) {
  dateString = `${year}-${month}-0${day}`;
} else {
  dateString = `${year}-${month}-${day}`;
}

// 출력: 2022-12-03
console.log(dateString);
