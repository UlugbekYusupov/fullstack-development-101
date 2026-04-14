const title = document.getElementById("form-title");
const form = document.getElementById("auth-form");
const submitBtn = document.getElementById("submit-btn");
const statusMessage = document.getElementById("status-message");
const modeButtons = document.querySelectorAll(".mode-btn");
const nameGroup = document.getElementById("name-group");
const confirmGroup = document.getElementById("confirm-group");

const fields = {
  name: document.getElementById("name"),
  email: document.getElementById("email"),
  password: document.getElementById("password"),
  confirmPassword: document.getElementById("confirmPassword"),
};

const errors = {
  name: document.getElementById("name-error"),
  email: document.getElementById("email-error"),
  password: document.getElementById("password-error"),
  confirmPassword: document.getElementById("confirm-error"),
};

let mode = "login";
const API_BASE = "http://localhost:9000/api/v2";

function setStatus(message, type = "") {
  statusMessage.textContent = message;
  statusMessage.className = type ? type : "";
}

function clearErrors() {
  Object.keys(errors).forEach((key) => {
    errors[key].textContent = "";
    fields[key].classList.remove("invalid");
  });
}

function setError(key, message) {
  errors[key].textContent = message;
  fields[key].classList.add("invalid");
}

function switchMode(nextMode) {
  mode = nextMode;
  const isSignup = mode === "signup";
  title.textContent = isSignup ? "Sign Up" : "Login";
  submitBtn.textContent = isSignup ? "Sign Up" : "Login";
  nameGroup.classList.toggle("hidden", !isSignup);
  confirmGroup.classList.toggle("hidden", !isSignup);
  modeButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.mode === mode);
  });
  clearErrors();
  setStatus("");
  form.reset();
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

async function postAuth(endpoint, payload) {
  const response = await fetch(`${API_BASE}/auth/${endpoint}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  let data = {};
  try {
    data = await response.json();
  } catch {
    data = {};
  }

  if (!response.ok) {
    throw new Error(data.message || "Request failed");
  }

  return data;
}

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  clearErrors();
  setStatus("");

  let valid = true;
  const isSignup = mode === "signup";
  const name = fields.name.value.trim();
  const email = fields.email.value.trim();
  const password = fields.password.value;
  const confirmPassword = fields.confirmPassword.value;

  if (isSignup && name.length < 2) {
    setError("name", "Name must be at least 2 characters.");
    valid = false;
  }

  if (!email) {
    setError("email", "Email is required.");
    valid = false;
  } else if (!isValidEmail(email)) {
    setError("email", "Invalid email.");
    valid = false;
  }

  if (password.length < 6) {
    setError("password", "Password must be at least 6 characters.");
    valid = false;
  }

  if (isSignup) {
    if (!confirmPassword) {
      setError("confirmPassword", "Please confirm your password.");
      valid = false;
    } else if (confirmPassword !== password) {
      setError("confirmPassword", "Passwords do not match.");
      valid = false;
    }
  }

  if (!valid) {
    setStatus("Please fix the errors.", "error");
    return;
  }

  submitBtn.disabled = true;
  submitBtn.textContent = "Please wait...";

  try {
    if (isSignup) {
      const data = await postAuth("register", { name, email, password });
      setStatus(data.message || "Registered successfully.", "success");
    } else {
      const data = await postAuth("login", { email, password });
      if (data.token) {
        localStorage.setItem("token", data.token);
      }
      setStatus(data.message || "Login successful.", "success");
    }
  } catch (error) {
    setStatus(error.message || "Something went wrong.", "error");
  } finally {
    submitBtn.disabled = false;
    submitBtn.textContent = isSignup ? "Sign Up" : "Login";
  }
});

modeButtons.forEach((button) => {
  button.addEventListener("click", () => switchMode(button.dataset.mode));
});

switchMode("login");
