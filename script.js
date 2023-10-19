pwdInput = document.querySelector("#pwd");
checkPwdInput = document.querySelector("#cpwd");
errorMsg = document.querySelector(".error-msg");

checkPwdInput.addEventListener("input", () => {
  checkPwdConfirm();
});
pwdInput.addEventListener("input", () => {
  checkPwdConfirm();
});
function checkPwdConfirm() {
  contentPwd = pwdInput.value;
  contentCheckPwd = checkPwdInput.value;

  if (contentPwd.length >= 1 && contentCheckPwd.length >= 1) {
    if (contentPwd == contentCheckPwd) {
      checkPwdInput.classList.remove("error");
      pwdInput.classList.remove("error");
      errorMsg.style.visibility = "hidden";
    } else {
      checkPwdInput.classList.add("error");
      pwdInput.classList.add("error");
      errorMsg.style.visibility = "visible";
    }
  }
}
