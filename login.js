const textSwitcherBtn = document.getElementById("text-switcher-btn");
const heading = document.querySelector("h2");
const loginBtn = document.getElementById("loginBtn");
const usernameInput = document.getElementById("username");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

const usernameLabel = document.getElementById("usernameLabel");

textSwitcherBtn.addEventListener("click", function () {
  if (heading.textContent === "Login") {
    switcher("Sign up", "Already have an account? Login", true);
  } else {
    switcher("Login", "Don't have an account? Sign up", false);
  }
});

function switcher(a, b, c) {
  loginBtn.value = a;
  heading.textContent = a;
  textSwitcherBtn.value = b;
  if (c) {
    usernameInput.classList.remove("hidden");
    usernameLabel.classList.remove("hidden");
  } else {
    usernameInput.classList.add("hidden");
    usernameLabel.classList.add("hidden");
  }
}

const users = [
  {
    id: 1,
    username: "Kimdir",
    email: "kimdir@gmail.com",
    password: "Password123",
  },
];

loginBtn.addEventListener("click", function () {
  if (loginBtn.value === "Sign up") {
    register()
  } else {
    login()
    // users.forEach(function (user) {
    //   if (
    //     emailInput.value === user.email &&
    //     passwordInput.value === user.password
    //   ) {
    //     emailInput.value = "";
    //     passwordInput.value = "";
    //     alert("Successfully logged in!");
    //   } else {
    //     alert("Credentials do'nt match");
    //   }
    // });
  }
});


function register() {
    if (!usernameInput.value || !emailInput.value || !passwordInput.value ) {
        alert(`${emailInput.value} already exist, Please login`);
        return;
    } else {
        const user = {
                  id: Math.random(),
                  username: usernameInput.value,
                  email: emailInput.value,
                  password: passwordInput.value,
                };

        //HTTP request

        usernameInput.value = "";
        emailInput.value = "";
        passwordInput.value = "";
        switcher("Login", "Don't have an account? Sign up", false)
    }
}


function login() {
    console.log("login")
}


