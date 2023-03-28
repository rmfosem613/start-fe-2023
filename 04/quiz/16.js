// 16.문자열을 객체형으로
const text = "{a:1, b:2}";

// quiz
const combine = [
  text.slice(0, 1),
  '"',
  text.slice(1, 2),
  '"',
  text.slice(2, 6),
  '"',
  text.slice(6, 7),
  '"',
  text.slice(7),
].join("");

const result = JSON.parse(combine);

// 출력: {a:1 , b:2}
console.log(result);
