// 변수 선언
var name = "abc";
console.log(name);

// Object

var image = {}; // image = new object

image.width = 1;
image.height = 2;

image['width'] = 1; // 연관배열

image['name' + 1] = '1.jpg' // 동적으로 할당 가능

image = {width: 1, weight: 2};

console.log(image);
console.log(image.width);
console.log(image["width"]);


// Array

image = []; // new Array();

image[0] = '1.jpg';
image[1] = '2.jpg';

image = ['1.jpg', 2, { name: '3.jpg' }];


// 비추천
var image = ['1.jpg', '2.jpg', 2, 3, true];

// 추천
var image = ['1.jpg', '2.jpg'];

// 한 번 넣은 데이터 타입은 유지하는게 좋음.
// 다른 형식의 데이터 값들을 모으지 않음

console.log(image, image.length);

// 인덱스 값 변경
image[0] = '3.jpg';
image[3] = '4.jpg'; // 건너뛰어진 인덱스 숫자는 빈칸으로 대체됨


// null
// null과 undefine은 실무에서 잘 사용하지 않고, 초기화값을 사용
// 아무런 값도 나타내지 않는 특수한 키워드

var nick = null;

var nick = '';
var title = -1;
var isMan = true; // true, false, null


// undefined
// global 변수 undefined에 접근할 때
// return 구문이 없는 함수는 undefined를 반환함
// return 구문으로 아무것도 반환하지 않을 때
// 없는 프로퍼티를 찾을 때
// 함수 인자가 생략될 때
// undefined가 할당된 모든 것

var nick; //undefined


// Operator

console.log(1 + 2); // 3
console.log('a' + 'b'); // "ab"
console.log(1 + '4'); // "14"


'' == '0'; // false
0 == ''; // true
0 == '0'; // true
false == 'false'; // false
false == '0'; // true
false == undefined; // false
false == null; // false
null == undefined; // true
' \t\r\n' == 0; // true

isHero = true; // boolean
isHulk = false; // boolean

// 논리곱
if (isHero && isHulk) {
    //둘다 참일경우 실행
}

// 논리합
if (isHero || isHulk) {
    //하나라도 참일경우 실행
}

// 논리부정
if (!isHero) {
    //영웅이 아니라면
}

// 두 개 쓰는 경우
var a = 'a';
if(a) console.log(1); // boolean 값 대신 텍스트 변수를 넣었을 때 자동으로 형변환을 함.
// 이때 (!!a) !!를 붙이면 boolean으로 형변화를 시킨

var isA = !!a;
console.log(isA);


// in
// 좌변값이 우변객체 프로퍼티 이름에 해당할 경우

var image = { width: 1, height: 2 };

console.log('width' in image); //true
console.log('size' in image);
console.log('toString' in image);


// delete
// 객체의 프로퍼티 삭제
// var 로 선언한 변수 delete못함

delete image.width;

image.width = null; //value만 지우고 프로퍼티 는 남겨둠


// typeof

console.log(typeof (1 + '4'));

typeof foo !== 'undefined';

// instanceof
// 인스턴스인지 여부

var arr = [1, 2, 3];

console.log(arr instanceof Array); //true


// Object


// array

// forEach 봐보라고 함

// 