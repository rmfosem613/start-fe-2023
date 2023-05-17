// eslint-disable-next-line import/extensions
import { openModal } from "./modal.js";

const $btn = document.querySelector("#modal_btn");

$btn.addEventListener("click", () => {
  openModal({
    text: "모달입니다.",
  });
});
