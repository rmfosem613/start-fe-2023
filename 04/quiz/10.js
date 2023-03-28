// 10. 원시타입 요소만 배열로 만들기
const items = [1, "a", true, ["a"], { n: 1 }];

// quiz

const result = items.filter((item) => {
  return typeof item !== "object" && item !== "function";
});

// 출력: [1,'a',true]
console.log(result);
