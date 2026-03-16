console.log(window.innerWidth);
console.log(window.innerHeight);
console.log(window.location.href);


const title=document.getElementById('main-title');
const btn=document.getElementsByClassName("btn");
const ps=document.querySelectorAll("p")

console.log(title);
console.log(btn);
console.log(ps);

document.getElementById("box").classList.add("highlight");
document.getElementById("box").classList.remove("hidden");
document.getElementById("box").classList.toggle("dark-mode")


const newPara=document.createElement("p");
newPara.innerHTML="This is a new p";
document.body.appendChild(newPara);


// const item =document.getElementById("item")
// item.parentNode.removeChild(item);

document.getElementById("item").remove();


document.getElementById("Btn").addEventListener("click", function(){
    window.alert(" ✅ Submitted! ")
})


document.getElementById("Btn").addEventListener("mouseover", function(){
    window.alert(" Hey, Get out of here! ")
})

document.getElementById("Btn").addEventListener("submit", function(){
    window.alert(" Hey,Submitted ! ")
})
