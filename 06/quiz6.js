const result = document.getElementById("result");

function gugudanPrint() {
  let $num = document.getElementById("num");
  let cul = "";
  console.log($num.value);
  if ($num.value == isNaN) {
    alert($num.value + "숫자가 아닙니다.");
  } else {
    for (let n = 1; n < 10; n++) {
      cul += `<p>${$num.value} X ${n} = ${$num.value * n}</p>`;
    }
  }
  return cul;
}

const init = () => {
  result.innerHTML = gugudanPrint();
};

init();
