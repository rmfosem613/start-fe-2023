// ECMA 스크립트
// v8 크롭에서 사용하는 js 엔진
// spidermonkey firefox에서 사용하는 js 엔진
// ES2015 검색해보래. 사용되는 건가보지

// let
// 선언, 재할당 가능

// const
// 상수 선언, 재할당 불가능
// 이미 선언된걸 무시하고 작동되는 경우가 있음
// 불변성 강조를 위해 현업에서 많이 사용

// const a = "a";
// console.log(a);
// a = "1";
// console.log(a); // 재선언 되지 않음

// live server -> web sochket 하나의 tcp 접속에 전이중 통신 채널을 제공하는 컴퓨터 통신 프로토콜 방식으로 변경된 결과가 새로고침하지 않아도 실시간으로 나타남

// 네트워크 탭은 모든 리소스(html, js 등)에 대한 정보를 보여줌.

// CRUD

// array create
const todos = ["운동"];
const todo = "공부";
todos.push(todo);
console.log(todos);

//read
todos.forEach(function (todo) {
  console.log(todo); // 하나씩 불러오기
});

// update
// 공부가 게임으로 바뀜
const updateTodo = "공부";
const updateIndex = todos.findIndex(function (todo) {
  return todo === updateTodo;
});
todos[updateIndex] = "게임";
console.log(todos);

// 위에 코드랑 같은 경우
const newTodo = "공부";
const newTodos = todos.map(function (todo) {
  if (todo === newTodo) {
    return "게임";
  }
  return todo;
});
console.log(newTodos);

// delete

const deleteTodo = "운동";
const deleteIndex = todos.findIndex(function (todo) {
  return todo === deleteTodo;
});
todos.splice(deleteIndex, 1);
console.log(todos);

// 타입변환

// 원시, 참조타입

// if

// if (isMan) {
//   // 표현식이 true일경우 블럭 코드 실행
//   console.log("난 남자");
// } else {
//   console.log("난 여자인가?");
// }

// var gender = isMan ? "남자" : "여자"; // 삼항 연산자

// // for

// for (var count = 0; count < 5; count++) {
//   //총 5번 실행
// }

// var obj = { a: 1, b: 2 };

// //느리다.비권장
// for (var prop in obj) {
//   console.log(prop, obj[prop]);
// }

// 주요 전역함수 -> window 객체에 있는 함수

// alert("alert");

// var who = prompt("당신은 누구세요?");

// var isDelete = confirm("정말 삭제합니까?");

// uri -> 통합 자원 식별자 -> 리소스를 가르키는 명칭
var enc = encodeURIComponent("카카오");
decodeURIComponent(enc);

isNaN("1"); //숫자면 false
// 문자형 숫자도 숫자로 인식해서 false
// 문자는 true

parseInt("12");
parseInt("09", 10); //항상 두번째 인자 주는 습관
parseFloat("10.33");

// setTimeout, setInterval

function test() {
  console.log("test()");
}

var id = setTimeout(test, 1000); //1초후 1번실행

var id = setInterval(test, 1000); //1초마다 계속 실행

//setInterval 보다 나은 방법
// function test() {
//   console.log("test()");
//   setTimeout(test, 1000);
// }

// clearTimeout(id);
clearInterval(id);

// scope
// 유효범위
var nick = "aji"; //전역변수

function test() {
  var age = 30; //지역변수
  console.log(nick, age);
}

test();
console.log(age); // 값 없음

// hoisting(호이스팅)
// 해당 scope의 가장 처음으로 옮기는 것
// 항상 상단에서 변수 선언 사용 권장
var name = "global";
function test() {
  console.log(name); // 결과 : undefined
  var name = "local";
  console.log(name); // 결과 : local
}

// 함수또한
test2();
function test2() {
  console.log("test");
}

// 함수

// 멤버변수
// 함수가 오브젝트 안에서 호출되는 경우
// 특정 요소를 불러와야 할 때 사용
var car = {
  year: "2014",
  starting: function () {
    console.log("starting..");
  },
};

car.starting();

// 즉시 실행 함수
// 익명 함수표현식
var car = function () {
  //코드
};

//중첩함수

// 익명 즉시실행함수, 스코프 보호
(function () {
  //코드
})();

// 표현식들
var name = "FE";
var age = 28;
var play = function () {};
var data = { company: "kakao" };
var fruits = ["사과", "바나나"];

// 정규표현식
var text = "abc def ghi jkl abc def"; // 대상 문자열
var testReg = /abc/; // 찾을 문자열
var result = testReg.test(text);

console.log(result); // true

// .test()
// .match()
// .replace()

// 특징
// 객체를 전달인자로 사용
function area1(width, height) {
  console.log(width * height);
}

function area2(options) {
  console.log(options.width * options.height);
}

area2({ width: 300, height: 200 });

// 기본 타입 래퍼 객체
var str = "jeju";
console.log(str.substring(0, 2)); //String 래퍼객체로 자동변환

var str = new String("jeju");
console.log(str + " jeju");

// 값에 의한 & 참조에 의한
//call by value
function byValue(count) {
  count = count + 2;
}
var count = 3;
byValue(count);
console.log(count); //3

//call by reference
function byReference(count) {
  count.push("2");
}
var count = ["1"];
byReference(count);
console.log(count); // ["1","2"]

// 클로저

// this -> 수업 중 안쓸거임
// global
console.log(this); //this==window

// function
//함수를 호출
function test() {
  console.log(this); //this==window
}

// method
var obj = {
  test: function () {
    console.log(this); // this==obj 해당 오브젝트
  },
};
obj.test();

// constructor
function Obj() {
  console.log(this); //this == obj
}
var obj = new Obj();

// call() -> this는 해당 문맥을 강제로 바꿔줌

// apply() -> this는 해당 문맥을 강제로 바꿔줌

// class -> 넘어감
