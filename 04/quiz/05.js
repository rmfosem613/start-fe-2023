// 5. 모든 배열값 더하기
const point1 = [12, 34, 80, 72];
const point2 = [1, 80, 94];
// const point3 = [1, 2, 3];

// quiz
// point3이 생길수도 있을때 대응 -> concat() 메소드 사용
const combinePoint = point1.concat(point2); // concat을
const result = combinePoint.reduce((acc, cur) => acc + cur);

// 출력: 373 (모든 배열값들이 합)
console.log(result);
