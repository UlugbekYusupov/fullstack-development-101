const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('SignupForm');

const showLogin = document.getElementById('showLogin');
const showRegister = document.getElementById('showRegister');

const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');


const newUsernameInput = document.getElementById('newUsername');
const newEmailInput = document.getElementById('newEmail');
const newPasswordInput = document.getElementById('newPassword');
const confirmNewPasswordInput = document.getElementById('confirmNewPassword');


showRegister.addEventListener('click', () => {
  loginForm.append(newUsernameInput);
  loginForm.classList.add('hidden');
  // signupForm.classList.remove('hidden');

});

// showLogin.addEventListener('click', () => {
//   signupForm.classList.add('hidden');
//   loginForm.classList.remove('hidden');
// });

