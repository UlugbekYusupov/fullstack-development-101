const passwordInput=document.getElementById("passwordInput");
const password_container=document.getElementById("password_container");

const button = document.createElement("button");
button.classList.add("btn");
passwordInput.addEventListener('input', function(){
let score=0
if(passwordInput.value.length>=8){
    score++;
}
if( /[A-Z]/.test(passwordInput.value) ){
    score++
}
if( /[a-z]/.test(passwordInput.value) ){
    score++
}
if( /\d/.test(passwordInput.value) ){
    score++
}
if( /\W/.test(passwordInput.value) ){
    score++
}


password_container.appendChild(button);
if(score>=0 && score<=2){
    button.textContent="Weak"
    button.style.backgroundColor="red"

}else if(score>2 && score<=4){
    button.textContent="Medium"
    button.style.backgroundColor="orange"

}else if(score==5){
    button.textContent="Strong"
    button.style.backgroundColor="green"
}
}
    
)
