// Thay đổi mật khẩu

let eyeDom = document.querySelector(".eye");
let inputDom = document.querySelector("#password");

eyeDom.addEventListener("click", function () {
  if (inputDom.type == "password") {
    inputDom.type = "text";
  } else {
    inputDom.type = "password";
  }
});

// Tính lương nhân viên

let luongInputDom = document.querySelector("#luonginput");
let ngayInputDom = document.querySelector("#ngayinput");
let tinhLuongDom = document.querySelector("#tinhluong");
let tongLuongDom = document.querySelector("#tongLuong");

tinhLuongDom.addEventListener("click", function () {
  tongLuongDom.classList.add("inlineBlock");
  tongLuongDom.innerHTML =
    parseFloat(luongInputDom.value) * parseFloat(ngayInputDom.value);
});

// Tính điểm trung bình
let input1Dom = document.querySelector("#input1");
let input2Dom = document.querySelector("#input2");
let input3Dom = document.querySelector("#input3");
let input4Dom = document.querySelector("#input4");
let input5Dom = document.querySelector("#input5");

let tinhSoTrungBinhDom = document.querySelector("#tinhSoTrungBinh");
let trungbinhDom = document.querySelector("#trungBinh");

tinhSoTrungBinhDom.addEventListener("click", function () {
  trungbinhDom.classList.add("inlineBlock");
  trungbinhDom.innerHTML =
    (+input1Dom.value +
      +input2Dom.value +
      +input3Dom.value +
      +input4Dom.value +
      +input5Dom.value) /
    5;
});

// Quy đổi tiền tệ

let giaUsd = document.querySelector("#giaUsd");

let soLuongUsd = document.querySelector("#soLuongUsd");

let tinhToanDom = document.querySelector("#tinhToan");

let tongVnd = document.querySelector("#tongVND");

tinhToanDom.addEventListener("click", function () {
  tongVnd.classList.add("inlineBlock");
  tongVnd.innerHTML = +giaUsd.value * parseFloat(soLuongUsd.value);
});

// Chu vi và diện tích hình chữ nhật

let chieuDaiDom = document.querySelector("#chieuDai");
let chieuRongDom = document.querySelector("#chieuRong");
let chuViDom = document.querySelector("#chuVi");
let dienTichDom = document.querySelector("#dienTich");

let tinhToanDapAnDom = document.querySelector("#tinhToanDapAn");

tinhToanDapAnDom.addEventListener("click", function () {
  chuViDom.classList.add("inlineBlock");
  dienTichDom.classList.add("inlineBlock");

  chuViDom.innerHTML =
    (parseFloat(chieuDaiDom.value) + parseFloat(chieuRongDom.value)) * 2;
  dienTichDom.innerHTML = +chieuDaiDom.value * parseFloat(chieuRongDom.value);
});
