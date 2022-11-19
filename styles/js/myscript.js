const showpassword = document.querySelector(".showpassword");
const password = document.querySelector(".password");
const cpassword = document.querySelector(".cpassword");

showpassword.addEventListener("click", function () {
  // toggle the type attribute
  const type =
    password.getAttribute("type") === "password" ? "text" : "password";
  password.setAttribute("type", type);
  cpassword.setAttribute("type", type);
  // toggle the icon
  // this.classList.toggle("bi-eye");
  password.getAttribute("type") === "password"
    ? (showpassword.src = "/styles/img/eye-off.svg")
    : (showpassword.src = "/styles/img/eye.svg");
});

$("#user_mail").on("keyup  change", function () {
  var text = $.trim($(this).val());
  this.value = "";
  this.value = text;
});
