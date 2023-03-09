var words = ['a', 'b', 'c'] // 배열일 경우, 끝에 s를 주로 붙임
console.log(words.pop(), words); // 맨 뒷부분의 값 삭제
// 3 ['a','b']

words.push('d');

console.log(words);

console.log(words.join('&'));

console.log(words);

var words = ['a', 'b', 'c'];
var numbers = [1, 2, 3];
console.log(words.concat(numbers));

// mdn의 메소드의 스펙을 보라는 말을 강조함.


// unshift
// 맨 앞쪽에 추가
var words = ['a', 'b', 'c'];
console.log(words.unshift('z'));
console.log(words);



var words = ['a', 'b', 'c'];
words.forEach(function(word, i, words) {
  console.log(word, i, words); // callback
});


// filter
// callback해서 돌아온 요소들을 모아서 반환

var words = ['a', 'b', 'c', 'dd'];
var newWords = words.filter(function(word) {
  return word.length === 2;
});
console.log(newWords);


var nums = [1,2,3,4,5];
var newNums=[];


// 3이상인 항목 출력
for (var i = 0; i<nums.length; i++){
    if(nums[i] >= 3) {
        newNums.push(nums[i]);
    } 
}

console.log(newNums);


// 3이상인 항목 출력
var newNums = nums
.filter(function(num) {
    return num >= 3;
})
.map(function(num) {
    return num + 10;
});

console.log(newNums);



