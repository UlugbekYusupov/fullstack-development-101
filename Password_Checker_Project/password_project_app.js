const root = document.getElementById('root');

const card = document.createElement('div');
card.id = 'password-card';
root.appendChild(card);

const title = document.createElement("h1");
title.innerText = "Password Strength Checker";
card.appendChild(title);

const PasswordInput = document.createElement("input");
PasswordInput.type = "password";
PasswordInput.placeholder = "Enter your password";
card.appendChild(PasswordInput);

const CheckerBtn = document.createElement("button");
CheckerBtn.innerText = "Check Password strength";
card.appendChild(CheckerBtn);


const message = document.createElement("div");
message.className = "message";
card.appendChild(message);


function checkPasswordStrength(password) {
    const errors = [];

    if (password.length < 8) 
        errors.push("Password must be at least 8 characters long.");
    if (!/[A-Z]/.test(password))
        errors.push("Include at least one uppercse letter.");
    if (!/[a-z]/.test(password)) 
        errors.push("Include at least one lowercase letter.");
    if (!/[0-9]/.test(password)) 
        errors.push("Include at Least one number.");
    if (!/[!@#$%^&*]/.test(password)) 
        errors.push("Include at least one special character (!@#$%^&*).");

    // Determine strength level
    let level = 'weak';
    if (errors.length === 0) {
        level = 'strong';
    } else if (errors.length <= 2) {
        level = 'medium';
    }

    return { errors, level };
}

CheckerBtn.addEventListener('click',()=> {
    const password = PasswordInput.value;
    const errors = checkPasswordStrength(password);

    if(errors.length === 0) {
        message.style.color ='green';
        message.innerText = '✅ Strong Password!';
    } 
    else {
        message.style.color = 'red';
        message.innerHTML = errors.join('<br>');}
    }
    
);


