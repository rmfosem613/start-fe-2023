// 15.객체값 변경
const user = { nick: "nio", age: 20, location: "제주" };

// quiz
// 개체 속성 지우기
let result = user;
result.age = 21;
result.location = "부산";

// 출력: {nick:'nio', age:21, name:'부산'}
console.log(result);
