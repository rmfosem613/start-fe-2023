// 17.json을 문자열로
const user = { nick: "nio", age: 20, location: "제주" };

// quiz
let change = JSON.stringify(user).split(/"/).join("");
let combine = [
  change.slice(0, 6),
  "'",
  change.slice(6, 9),
  "'",
  change.slice(9, 26),
  "'",
  change.slice(26, 28),
  "'",
  change.slice(28),
].join("");
let result = `"${combine}"`;

// 출력: string "{ nick: 'nio', age: 20, location: '제주' }"
console.log(typeof result, result);
