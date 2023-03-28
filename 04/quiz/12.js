// 해결 못함

// 12.배열값 나눠서 다시 배열로
const items = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
const pageSize = 3;

// quiz
// pageSize에 따라 배열값 분리해서 출력

let arr = [];

for (let i = 0; i < items.length; i += pageSize) {
  arr.push(items.slice(i, i + pageSize));
}

let result = JSON.stringify(arr).split(/"/).join("");
// 출력: [ [a,b,c], [d,e,f], [g,h,i], [j] ]
console.log(result);
