// 18. 새로운 배열 생성
const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// quiz

let arr = [];
items.forEach((item, index) => {
  if (item % 2 === 0) {
    arr.push(item);
  }
});

// filter 메소드 사용해서 짝수값만 뽑아올수도 있음

// 출력: 짝수만 [2,4,6,8,10]
console.log("짝수만", arr);
