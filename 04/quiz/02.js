// 2. 문자열 분리
const dateString = "2022-12-12";

// quiz
let result = dateString.split("-").map(Number);

// let result2 = dateString.split("-").map((item) => parseInt(item));

// let result3 = Array.from(dateString.split("-"), Number);

// 출력: [2022,12,12];
console.log(result);
