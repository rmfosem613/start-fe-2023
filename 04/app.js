// ECMA

// let
// 블록 유효 범위를 갖는 지역 변수
let team = "fe";

// const
// 상수, 선언과 동시에 리터럴 값을 할당
const are = "jeju";

// var과 const의 차이점은?
// var는 function-scoped이고, let, const는 block-scoped입니다.

// 템플릿 표현식

var name = "rmfosem613";
// es5
var git_url1 = "https://github.com/" + name;
// es6
var git_url2 = `https://github.com/${name}`;
console.log(git_url1, git_url2);

// 기본 매개변수
function sum(x, y = 0) {
  return x + y;
}
console.log(sum(10));

const result = [1, 2, 3].map((item) => {
  return item + 1;
});
console.log(result);

const result2 = [1, 2, 3].map((item) => item + 1);
console.log(result2);

// 전개 구문
// .(점)이 인자 3개를 받음
function sum(x, y, z) {
  return x + y + z;
}
const numbers = [1, 2, 3];
console.log(sum(...numbers));

// 배열을 복사하는 방법
const words = ["a", "b"];
const newWords = [...words];
console.log(newWords);

const arr1 = [3, 4, 5];
const arr2 = [1, 2, ...arr1, 6, 7];
console.log(arr2); // [1, 2, 3, 4, 5, 6, 7]

// 객체 타입을 전개 구문을 이용해 다른 오브젝트 형태로 바꿔주는 것
const obj = {
  a: 1,
  b: 2,
};
const newObj = { ...obj };
// console.log(newOjb);

// Rest 파라미터
function func(...param) {
  console.log(param);
}

func(1, 2, 3);

// es5
function func() {
  console.log(arguments);
}

// foo(1, 2, 3);

// 구조 분해 할당
//es5
// var team = obj.team;
// var area = obj.area;

// var col1 = cols[0];
// var col2 = cols[1];

// //es6
// const { team, area } = obj;
// const [col1, col2] = cols;
// const [, cols2] = cols;

// // es5
// function getArea(options) {
//   return options.width * options.height;
// }

// // es6
// function getArea({ width, height }) {
//   return width * height;
// }

let a, b, rest;
[a, b] = [10, 20];

console.log(a);
// Expected output: 10

console.log(b);
// Expected output: 20

[a, b, ...rest] = [10, 20, 30, 40];

console.log(typeof rest);
// Expected output: Array [30, 40, 50]
