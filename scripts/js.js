const mainContainer = document.createElement('div');
mainContainer.classList.add('container', 'text-center', 'my-5');

const title = document.createElement('h1');
title.classList.add('title', 'text-capitalize');
title.textContent = "password strength chacker";

const passwordInput = document.createElement('input');
passwordInput.classList.add('form-control', 'border-primary', 'rounded-4');
passwordInput.placeholder = "Your Password";
passwordInput.type = 'password';

const passwordBadge = document.createElement('div');
passwordBadge.classList.add('text-white', 'my-3', 'py-1', 'px-3', 'd-inline-block', 'rounded-3');

passwordInput.addEventListener('input', () => {
    const password = passwordInput.value;
    const strength = checkPassword(password);
    passwordBadge.textContent = strength;
    
    passwordBadge.classList.remove('bg-danger', 'bg-warning', 'bg-success');

    if (strength === "Weak") {
        passwordBadge.classList.add('bg-danger');
    } else if (strength === "Medium") {
        passwordBadge.classList.add('bg-warning');
    } else {
        passwordBadge.classList.add('bg-success');
    }
})

mainContainer.append(title,passwordInput, passwordBadge);

document.body.append(mainContainer);

// Function
function checkPassword(password) {

    let hasLength = password.length >= 8;

    let hasUpperCase = false;
    for (let i = 0; i < password.length; i++) {
        let char = password[i];
        if (char >= 'A' && char <= 'Z') {
            hasUpperCase = true;
        }
    }

    let hasNumber = false;
    for (let i = 0; i < password.length; i++) {
        let char = password[i];
        if (char >= '0' && char <= '9') {
            hasNumber = true;
        }
    }

    let hasSpecial = false;
    let specialChars = "!@#$%^&_*";

    for (let i = 0; i < password.length; i++) {
        let char = password[i];

        for (let j = 0; j < specialChars.length; j++) {
            if (char === specialChars[j]) {
                hasSpecial = true;
            }
        }
    }

    let score = 0;
    if (hasLength) score++;
    if (hasUpperCase) score++;
    if (hasNumber) score++;
    if (hasSpecial) score++;

    if (score === 4) {
        return "Strong";
    } else if (score >= 2) {
        return "Medium";
    } else {
        return "Weak";
    }
}

