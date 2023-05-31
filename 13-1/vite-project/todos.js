/* eslint-disable no-use-before-define */
/* eslint-disable prefer-const */
const $new = document.querySelector(".new-task");
const $input = document.querySelector(".input-task");
const $ul = document.querySelector("ul");

let todos = [];

function renderTodos() {
  $ul.innerHTML = ""; // 기존의 리스트 아이템을 모두 제거

  todos.forEach((todo) => {
    const $li = document.createElement("li"); // 새로운 <li> 요소 생성

    const $deleteButton = createDeleteButton();
    const $checkbox = createCheckbox();
    const $span = createTodoText(todo);

    $li.appendChild($deleteButton);
    $li.appendChild($checkbox);
    $li.appendChild($span);

    $ul.appendChild($li); // 새로운 <li> 요소를 <ul>에 추가
  });
}

function createDeleteButton() {
  const $deleteButton = document.createElement("button");
  $deleteButton.classList.add("delete");
  $deleteButton.textContent = "×";
  return $deleteButton;
}

function createCheckbox() {
  const $checkbox = document.createElement("input");
  $checkbox.setAttribute("type", "checkbox");
  $checkbox.classList.add("toggle-checked");
  return $checkbox;
}

function createTodoText(text) {
  const $span = document.createElement("span");
  $span.classList.add("text");
  $span.textContent = text;
  return $span;
}

function handleFormSubmit(event) {
  event.preventDefault(); // form을 제출할 때 페이지가 다시 로드되는 동작을 막음

  const taskText = $input.value.trim(); // 문자열의 앞뒤 공백을 제거

  if (taskText !== "") {
    todos.push(taskText); // 배열에 추가
    $input.value = ""; // 입력창 초기화
    renderTodos();

    console.log(todos);
  }
}

function handleDeleteClick(event) {
  const { target } = event;

  if (target.classList.contains("delete")) {
    const $li = target.parentNode;
    const $span = $li.querySelector("span");
    const todo = $span.textContent;

    const todoIndex = todos.indexOf(todo);
    if (todoIndex > -1) {
      todos.splice(todoIndex, 1); // 배열에서 삭제
      $ul.removeChild($li); // 리스트에서 제거
    }
  }
}

$new.addEventListener("submit", handleFormSubmit);
$ul.addEventListener("click", handleDeleteClick);
