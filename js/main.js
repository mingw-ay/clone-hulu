const modal = document.querySelector(".modal");
const loginButton = document.querySelector(".login-btn");
const closeButton = document.querySelector(".close");
const submitForm = document.querySelector(".btn-dark");

/* 点击login，开启登陆面板 */
loginButton.addEventListener("click", openModal);

/* 点击关闭按钮，关闭面板 */
closeButton.addEventListener("click", closeModal);

window.addEventListener("click", outsideModal);

/* 开启面板 */
function openModal(event) {
  modal.style.display = "block";
}

/* 关闭面板 */
function closeModal() {
  modal.style.display = "none";
}

/* 点击面板外的部分 */
function outsideModal(event) {
  /* 判断是不是点到了modal */
  if (event.target == modal) {
    closeModal();
  }
}

submitForm.addEventListener("click", submit);

/* 点击登录不跳转 */
function submit(e) {
  e.preventDefault();
}
