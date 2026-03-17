const resultInput=document.getElementById("resultInput");

const buttons=document.querySelectorAll("button");
console.log(buttons);

buttons.forEach(element => {
    element.addEventListener("click", function(){
        const value = element.textContent;
        if(value=="C"){
            resultInput.value="";
        }else if(value=="DEL"){
            resultInput.value = resultInput.value.slice(0, -1);

        }else if(value=="="){
            resultInput.value=eval(resultInput.value);
        }else{
            resultInput.value+=value;
        }
        
    });
});