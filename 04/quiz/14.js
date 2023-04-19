// 14.전화번호 패턴 검사
const phoneNumber = `010-1234-1234`;

// quiz
// xxx-xxxx-xxxx 패턴찾기
let result;

// const num = phoneNumber.split("-");
// if (num[0].length === 3 && num[1].length === 4 && num[2].length == 4) {
//   result = true;
// } else {
//   result = false;
// }

const regex = /^01([0|1|6|7|8|9])-([0-9]{3,4})-([0-9]{4})$/;
result = regex.test(phoneNumber);

// 출력: true
console.log(result);
