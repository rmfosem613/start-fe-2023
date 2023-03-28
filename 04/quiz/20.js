// 20.다음일 구하기
const dday = "2022-02-02";

// quiz
let change = dday.split("-").map((item) => parseInt(item));

let year = change[0];
let month = change[1];
let day = change[2] + 1;
let result;

// let result = change.join().replace(/,/g, "-");

if (day < 10 && month < 10) {
  result = `'${year}-0${month}-0${day}'`;
} else if (day < 10) {
  result = `'${year}-${month}-0${day}'`;
} else if (month < 10) {
  result = `'${year}-0${month}-${day}'`;
}

// 출력: '2022-02-03'
console.log(result);
