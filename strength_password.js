var styleTag = document.createElement("style");

// Create the white card container 
var card = document.createElement("div");
card.className = "card";   

var title = document.createElement("h2");
title.className = "card-title";
title.textContent = "Password Strength Checker";

//  Create the password input box
var passwordInput = document.createElement("input");
passwordInput.type        = "password";   
passwordInput.placeholder = "Enter password";
passwordInput.className   = "password-input";


// Create the strength button 
var strengthButton = document.createElement("button");
strengthButton.className = "strength-button";
strengthButton.textContent = "";   


// Assemble the card
card.appendChild(title);          // title goes in first (at the top)
card.appendChild(passwordInput);  // input goes in second
card.appendChild(strengthButton); // button goes in last (at the bottom)
document.body.appendChild(card);

passwordInput.addEventListener("input", function () {

  var password = passwordInput.value;

  if (password.length === 0) {
    strengthButton.style.display = "none";
    return; 
  }

  var result = checkStrength(password);  

  strengthButton.style.display = "inline-block";

  strengthButton.textContent = result.label;

  strengthButton.style.backgroundColor = result.color;
});

function checkStrength(password) {

  // Is the password long enough? (8 or more characters)
  var isLongEnough = password.length >= 8;

  // Does it have at least one CAPITAL letter? (A, B, C … Z)
  var hasUppercase = /[A-Z]/.test(password);

  // Does it have at least one lowercase letter? (a, b, c … z)
  var hasLowercase = /[a-z]/.test(password);

  // Does it have at least one number? (0 1 2 … 9)
  var hasNumber = /[0-9]/.test(password);

  // Does it have at least one special character? (! @ # $ % …)
  var hasSpecial = /[^A-Za-z0-9]/.test(password);

  if (isLongEnough && hasUppercase && hasLowercase && hasNumber && hasSpecial) {
    return { label: "Strong", color: "#2e7d32" }; 
  }

  var hasAnyLetter  = hasUppercase || hasLowercase;
  var isMediumLength = password.length >= 6;

  if (isMediumLength && hasAnyLetter && hasNumber) {
    return { label: "Medium", color: "#fb8c00" }; 
  }

  return { label: "Weak", color: "#e53935" };  
}