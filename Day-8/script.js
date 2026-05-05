const loginPanel = document.getElementById('loginPanel');
const signupPanel = document.getElementById('signupPanel');
const linkSignup = document.getElementById('linkSignup');
const linkLogin = document.getElementById('linkLogin');
const feedback = document.getElementById('feedback');

const openPanel = (panel) => {
  loginPanel.classList.remove('active');
  signupPanel.classList.remove('active');

  if (panel === 'login') {
    loginPanel.classList.add('active');
  } else {
    signupPanel.classList.add('active');
  }
  feedback.textContent = '';
  feedback.className = 'message';
};

linkSignup.addEventListener('click', (event) => {
  event.preventDefault();
  openPanel('signup');
});

linkLogin.addEventListener('click', (event) => {
  event.preventDefault();
  openPanel('login');
});

function renderMessage(text, type) {
  feedback.textContent = text;
  feedback.className = `message ${type}`;
}

const loginForm = document.getElementById('loginForm');
loginForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const email = document.getElementById('loginEmail').value.trim();
  const password = document.getElementById('loginPassword').value;

  if (!email || !password) {
    renderMessage('Please enter both email and password.', 'error');
    return;
  }

  renderMessage('Login successful.', 'success');
  loginForm.reset();
});

const signupForm = document.getElementById('signupForm');
signupForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = document.getElementById('signupName').value.trim();
  const email = document.getElementById('signupEmail').value.trim();
  const password = document.getElementById('signupPassword').value;
  const confirmPassword = document.getElementById('signupConfirmPassword').value;

  if (!name || !email || !password || !confirmPassword) {
    renderMessage('Please complete all fields.', 'error');
    return;
  }

  if (!email.includes('@')) {
    renderMessage('Provide a valid email address.', 'error');
    return;
  }

  if (password.length < 8) {
    renderMessage('Password must be at least 8 characters.', 'error');
    return;
  }

  if (password !== confirmPassword) {
    renderMessage('Passwords do not match.', 'error');
    return;
  }

  renderMessage('Signup successful.', 'success');
  signupForm.reset();
});

openPanel('login');
