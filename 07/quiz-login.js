function logIn() {
  const id = document.getElementsByName("id")[0].value;
  const pw = document.getElementsByName("pw")[0].value;
  let result = document.getElementById("result");

  if (id === "hello" && pw === "world") {
    result.textContent = "로그인 성공";
    result.classList.remove("error");
    result.classList.add("success");
  } else {
    result.textContent = "아이디 또는 비밀번호가 올바르지 않습니다.";
    result.classList.remove("success");
    result.classList.add("error");
  }
}
