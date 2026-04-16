const signupForm = document.getElementById("signup-form");
const loginForm = document.getElementById("login-form");

const goLogin = document.getElementById("go-login");
const goSignup = document.getElementById("go-signup");

goLogin.addEventListener("click", (e) => {
  e.preventDefault();
  signupForm.classList.add("hidden");
  loginForm.classList.remove("hidden");
});

goSignup.addEventListener("click", (e) => {
  e.preventDefault();
  loginForm.classList.add("hidden");
  signupForm.classList.remove("hidden");
});