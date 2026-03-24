const card = document.createElement("div");

card.style.background = "white";
card.style.padding = "40px";
card.style.borderRadius = "12px";
card.style.boxShadow = "0 2px 15px rgba(0,0,0,0.1)";
card.style.width = "350px";
card.style.display = "flex";
card.style.flexDirection = "column";
card.style.gap = "16px";

const title = document.createElement("h2");

title.textContent = "Sign Up";
title.style.textAlign = "center";
title.style.margin = "0 0 10px 0";

function createInput(placeholderText, inputType) {
    const input = document.createElement("input");

    input.type = inputType;
    input.placeholder = placeholderText;

    input.style.padding = "12px 16px";
    input.style.border = "1px solid #ccc";
    input.style.borderRadius = "8px";
    input.style.fontSize = "15px";
    input.style.outline = "none";
    input.addEventListener("focus", function () {
        input.style.borderColor = "#2979ff";
    });

    input.addEventListener("blur", function () {
        input.style.borderColor = "#ccc";
    });

    return input;
}

const usernameInput = createInput("Username", "text");
const emailInput    = createInput("Email", "email");
const passwordInput = createInput("Password", "password");

const message = document.createElement("p");

message.style.textAlign = "center";
message.style.margin = "0";
message.style.fontSize = "14px";

const submitBtn = document.createElement("button");

submitBtn.textContent = "Submit";

submitBtn.style.padding = "13px";
submitBtn.style.background = "#2979ff";
submitBtn.style.color = "white";
submitBtn.style.border = "none";
submitBtn.style.borderRadius = "8px";
submitBtn.style.fontSize = "16px";
submitBtn.style.cursor = "pointer";

submitBtn.addEventListener("click", function () {

    const username = usernameInput.value.trim();
    const email    = emailInput.value.trim();
    const password = passwordInput.value.trim();
    if (username === "" || email === "" || password === "") {
        message.textContent = "Please fill in all fields!";
        message.style.color = "red";
        return;
    }

    if (password.length < 6) {
        message.textContent = "The password must be at least 6 characters long!";
        message.style.color = "red";
        return;
    }
    message.textContent = "You have successfully registered!";
    message.style.color = "green";
    usernameInput.value = "";
    emailInput.value    = "";
    passwordInput.value = "";
});

const loginLink = document.createElement("a");

loginLink.textContent = "Already have an account? Login";
loginLink.href = "#";

loginLink.style.textAlign = "center";
loginLink.style.color = "#2979ff";
loginLink.style.fontSize = "14px";
loginLink.style.textDecoration = "none";

loginLink.addEventListener("click", function () {
    alert("Login sahifasiga o'tish...");
});

card.appendChild(title);
card.appendChild(usernameInput);
card.appendChild(emailInput);
card.appendChild(passwordInput);
card.appendChild(submitBtn);
card.appendChild(message);
card.appendChild(loginLink);

const root = document.getElementById("root");
root.appendChild(card);