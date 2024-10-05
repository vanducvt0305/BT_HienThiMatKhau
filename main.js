eyeDom = document.querySelector(".eye");
inputDom = document.querySelector("#password");

eyeDom.addEventListener("click", function () {
  if (inputDom.type == "password") {
    inputDom.type = "text";
  } else {
    inputDom.type = "password";
  }
});
