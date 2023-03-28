// 11. 배열값 나누기
const items = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
const pageSize = 3;

// quiz
// pageSize에 따라 배열값 분리해서 출력
// pageSize=2 일때는 맨끝에 --- 없어야함

let arr = [];
let result = [];

// --- 추가
items.forEach((item, index) => {
  if (index % pageSize === 0 && index > 0) {
    arr[index - 1] = arr[index - 1] + "---";
  }
  arr.push(item);
});

// --- 뒤에 문자 연결
for (let i = 0; i < arr.length; i++) {
  if (i % pageSize == 2) {
    result.push(arr[i] + arr[i + 1]);
  } else if (i % pageSize !== 0 && i > 0) {
    result.push(arr[i]);
  } else if (i == 0) {
    result.push(arr[i]);
  }
}

// 출력: a,b,c---d,e,f---g,h,i---j
console.log(result.join());
