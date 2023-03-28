// 배열 필터
const list = [
  {
    id: 1,
    title: "JS",
    isPublic: true,
  },
  {
    id: 2,
    title: "기본",
    isPublic: true,
  },
  {
    id: 3,
    title: "ecma",
    isPublic: true,
  },
  {
    id: 4,
    title: "dom",
    isPublic: false,
  },
];

// quiz
let arr = [];

for (let i = 0; i < list.length; i++) {
  if (list[i].isPublic === true) {
    arr.push(list[i].title);
  }
}

// 출력: ['JS','기본','ecma']  isPublic=true 의  title만 뽑기
console.log(arr, "isPublic=true 의  title만 뽑기");
