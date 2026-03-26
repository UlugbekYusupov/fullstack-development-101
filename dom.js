//DOM Projects

// const mainContainer = document.createElement('div')
// const signUp = document.createElement('div')
// const signUpHead = document.createElement('h1')
// const email = document.createElement('input')
// const username = document.createElement('input')
// const password = document.createElement('input')
// const submit = document.createElement('button')
// const account = document.createElement('button')



// submit.textContent = 'Sign-Up'

// account.textContent = 'Already have an account?'


// username.type = 'text'
// username.placeholder = 'Username'

// email.type = 'email'
// email.placeholder = 'Email'

// password.type = 'password'
// password.placeholder = 'Password'



// signUpHead.textContent = 'Sign Up'

// const style = document.createElement('style')

// style.textContent = `
// .main{
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     height: 100vh;
//     background-color: #f0f2f5;
// }

// .signUpStyle{
//     background: white;
//     padding: 30px;
//     width: 300px;
//     border-radius: 10px;
//     box-shadow: 0 4px 10px rgba(0,0,0,0.1);
// }

// .signUpHead{
//     text-align: center;
//     margin-bottom: 20px;
//     font-weight: 700;
//     font-family: Arial, sans-serif;
//     color: #333;
// }

// .inputField{
//     width: 100%;
//     padding: 10px;
//     margin-bottom: 15px;
//     border: 1px solid #ccc;
//     border-radius: 6px;
//     font-size: 14px;
//     outline: none;
//     box-sizing: border-box;
// }

// .inputField:focus{
//     border-color: #0059ffff;
// }

// .submitBtn{
//     width: 100%;
//     padding: 10px;
//     background-color: #0059ffff;
//     color: white;
//     border: none;
//     border-radius: 6px;
//     font-size: 16px;
//     cursor: pointer;
// }

// .submitBtn:hover{
//     background-color: #0059ffff;
// }

// .switchLink{
//     display: block;
//     margin-top: 15px;
//     text-align: center;
//     color: #007BFF;
//     cursor: pointer;
//     font-size: 14px;
// }

// .switchLink:hover{
//     text-decoration: underline;
// }
// `

// document.head.appendChild(style)

// mainContainer.classList.add('main')
// signUp.classList.add('signUpStyle')
// signUpHead.classList.add('signUpHead')
// username.classList.add('inputField')
// email.classList.add('inputField')
// password.classList.add('inputField')
// submit.classList.add('submitBtn')
// account.classList.add('switchLink')



// document.body.appendChild(mainContainer)
// mainContainer.appendChild(signUp)
// signUp.appendChild(signUpHead)
// signUp.appendChild(username)
// signUp.appendChild(email)
// signUp.appendChild(password)
// signUp.appendChild(submit)
// signUp.appendChild(account)

// function change(){
//     if(account.textContent === 'Already have an account?'){
//         signUpHead.textContent = 'Log In'
//         email.style.display = 'none'
//         account.textContent = 'Do not have an account?'
//         submit.textContent = 'Log In'
//     }else{
//         account.textContent = 'Already have an account?'
//         signUpHead.textContent = 'Sign Up'
//         email.style.display = 'block'
//         submit.textContent = 'Sign Up'
//     }
// }


// function popUp(){
//     let alertWord = 'You succesfully Logged In'
//     if (submit.textContent === 'Sign Up'){
//         alertWord = 'You succesfully Signed Up'
//     }
//     alert(alertWord)
// }


// account.addEventListener('click', change)
// submit.addEventListener('click', popUp)


// const tasks = []



// const style = document.createElement("style")
// const container = document.createElement("div")
// const title = document.createElement("h2")
// const taskList = document.createElement("div")
// const addBtn = document.createElement("button")




// const modalBg = document.createElement("div")
// const modal = document.createElement("div")
// const modalTitle = document.createElement("h3")
// const inputTitle = document.createElement("input")
// const description = document.createElement("textarea")
// const status = document.createElement("select")
// const opt1 = document.createElement("option")
// const opt2 = document.createElement("option")
// const opt3 = document.createElement("option")
// const saveBtn = document.createElement("button")
// const closeBtn = document.createElement("button")





// style.textContent = `

// body{
//     font-family: Arial;
//     background: lightgray;
//     display:flex;
//     justify-content:center;
//     margin-top:40px;
//     }

//     .container{
//     width:500px;
//     background:white;
//     padding:20px;
//     border-radius:10px;
//     }

//     .title{
//     text-align:center;
//     }

//     .taskCard{
//     border:1px solid gray;
//     padding:10px;
//     margin-top:10px;
//     border-radius:8px;
//     }

//     .badge{
//     padding:4px 8px;
//     border-radius:5px;
//     color:white;
//     }

//     .pending{
//     background:orange;
//     }

//     .progress{
//     background:blue;
//     }

//     .completed{
//     background:green;
//     }

//     .deleteBtn{
//     background:red;
//     color:white;
//     margin-top:5px;
//     border: none;
//     padding: 12px 14px;
//     border-radius: 8px;
//     }

//     .addBtn{
//     width:100%;
//     padding:10px;
//     margin-top:15px;
//     background:blue;
//     color:white;
//     border: none;
//     padding: 12px 14px;
//     border-radius: 8px;
//     }

//     .modalBg{
//     position:fixed;
//     top:0;
//     left:0;
//     width:100%;
//     height:100%;
//     background:gray;
//     display:none;
//     justify-content:center;
//     align-items:center;
//     }

//     .modal{
//     background:white;
//     padding: 20px;
//     width: 300px;
//     border-radius:10px;
//     }

//     .input{
//     display: block;
//     width: 285px;
//     margin-bottom:10px;
//     padding: 8px;
//     }

//     .saveBtn{
//     background:blue;
//     color:white;
//     width:100%;
//     margin-bottom:5px;
//     border: none;
//     padding: 12px 14px;
//     border-radius: 8px;
//     }

//     .closeBtn{
//     background:red;
//     color:white;
//     width:100%;
//     border-radius: 8px;
//     border: none;
//     padding: 12px 14px;
//     }

// `

// container.classList.add("container")
// title.classList.add("title")
// addBtn.classList.add("addBtn")
// modalBg.classList.add("modalBg")
// modal.classList.add("modal")
// inputTitle.classList.add("input")
// description.classList.add("input")
// status.classList.add("input")
// saveBtn.classList.add("saveBtn")
// closeBtn.classList.add("closeBtn")





// title.innerText = "Interactive To-Do List"
// addBtn.innerText = "Add Task"
// modalTitle.innerText = "Add Task"
// inputTitle.placeholder = "Task title"
// description.placeholder = "Task description"
// opt1.innerText = "pending"
// opt2.innerText = "in progress"
// opt3.innerText = "completed"
// saveBtn.innerText = "Save Task"
// closeBtn.innerText = "Close"




// status.appendChild(opt1)
// status.appendChild(opt2)
// status.appendChild(opt3)
// document.head.appendChild(style)
// document.body.appendChild(container)
// container.appendChild(title)
// container.appendChild(taskList)
// container.appendChild(addBtn)
// document.body.appendChild(modalBg)
// modalBg.appendChild(modal)
// modal.appendChild(modalTitle)
// modal.appendChild(inputTitle)
// modal.appendChild(description)
// modal.appendChild(status)
// modal.appendChild(saveBtn)
// modal.appendChild(closeBtn)





// addBtn.addEventListener("click", function () {
//     modalBg.style.display = "flex"
// })

// closeBtn.addEventListener("click", function () {
//     modalBg.style.display = "none"
// })



// function renderTasks(){

//     taskList.innerHTML = ""

//     tasks.forEach(function(task,index){

//     const card = document.createElement("div")
//     card.classList.add("taskCard")

//     const t = document.createElement("h4")
//     t.innerText = task.title

//     const d = document.createElement("p")
//     d.innerText = task.description

//     const badge = document.createElement("span")
//     badge.classList.add("badge")

//     if(task.status === "pending"){
//     badge.classList.add("pending")
// }

// if(task.status === "in progress"){
//     badge.classList.add("progress")
// }

// if(task.status === "completed"){
//     badge.classList.add("completed")
// }

// badge.innerText = task.status

// const delBtn = document.createElement("button")
// delBtn.innerText = "Delete"
// delBtn.classList.add("deleteBtn")

// delBtn.addEventListener("click",function(){

// tasks.splice(index,1)
// renderTasks()

// })

// card.appendChild(t)
// card.appendChild(d)
// card.appendChild(badge)
// card.appendChild(document.createElement("br"))
// card.appendChild(delBtn)

// taskList.appendChild(card)

// })

// }



// saveBtn.addEventListener("click",function(){

// const newTask = {

// title: inputTitle.value,
// description: description.value,
// status: status.value

// }

// tasks.push(newTask)

// renderTasks()

// inputTitle.value = ""
// description.value = ""

// modalBg.style.display = "none"

// })



//task 2

// const passCard = document.createElement("div")
// const header = document.createElement("h2")
// const intputLine = document.createElement("input")
// const btn = document.createElement("button")
// const style = document.createElement('style')


// header.textContent = 'Generate Password'
// intputLine.placeholder = 'Password'
// intputLine.type = 'text'
// btn.textContent = 'Weak'

// style.textContent = `

//     body{
//         display: flex;
//         justify-content: center;
//         align-items: center;
//         height: 100vh;
//     }

//     .card{
//         display: flex;
//         flex-direction: column;
//         gap: 10px;
//         justify-content: center;
//         align-items: center;
//         width: 500px;
//         height: 100px;
//         box-shadow: 0 4px 10px rgba(0,0,0,0.1);
//         border-radius: 8px;
//         padding-top: 12px;
//         padding-bottom: 10px;
//     }

//     .inputLinee{
//         width: 400px;
//         padding: 12px 14px;
//         border-color: lightgrey;
//         border-radius: 6px;
//     }

//     .pending{
//         display: none;
//         background-color: red;
//         color: white;
//         border: none;
//         border-radius: 8px;
//         padding: 12px 14px;
//     }
// `

// passCard.classList.add("card")
// intputLine.classList.add("inputLinee")
// btn.classList.add("pending")

// document.head.appendChild(style)
// document.body.appendChild(passCard)
// passCard.appendChild(intputLine)
// passCard.appendChild(btn)



// function checkPassword(){

//     const password = intputLine.value

//     if(password.length === 0){
//         btn.style.display = "none"
//         return
//     }

//     btn.style.display = "block"

//     let strength = 0

//     if(password.length >= 6) strength++
//     if(/[A-Z]/.test(password)) strength++
//     if(/[a-z]/.test(password)) strength++
//     if(/[0-9]/.test(password)) strength++
//     if(/[^A-Za-z0-9]/.test(password)) strength++

//     if(strength <= 2){
//         btn.textContent = "Weak"
//         btn.style.backgroundColor = "red"
//     }
//     else if(strength <= 4){
//         btn.textContent = "Medium"
//         btn.style.backgroundColor = "orange"
//     }
//     else{
//         btn.textContent = "Strong"
//         btn.style.backgroundColor = "green"
//     }
// }


// intputLine.addEventListener("input", checkPassword)


//Task 3
// const calcContainer = document.createElement("div")
// const display = document.createElement("input")
// const btnContainer = document.createElement("div")


// calcContainer.classList.add("calcContainer")
// display.classList.add("display")
// btnContainer.classList.add("btnContainer")



// display.type = "text"
// const buttons = [
//     "C","DEL","%","÷",
//     "7","8","9","×",
//     "4","5","6","−",
//     "1","2","3","+",
//     "0",".","="
// ]

// // function
// function handleClick(e){
//     const value = e.target.textContent

//     if(value === "C"){
//         display.value = ""
//     }
//     else if(value === "DEL"){
//         display.value = display.value.slice(0,-1)
//     }
//     else if(value === "="){
//         try{
//             display.value = eval(display.value.replace("×","*").replace("÷","/"))
//         }catch{
//             display.value = "Error"
//         }
//     }
//     else{
//         display.value += value
//     }
// }

// // create buttons
// buttons.forEach(text=>{
//     const btn = document.createElement("button")
//     btn.textContent = text
//     btn.classList.add("btn")

//     btn.addEventListener("click", handleClick)

//     btnContainer.appendChild(btn)
// })

// // append
// calcContainer.appendChild(display)
// calcContainer.appendChild(btnContainer)
// document.body.appendChild(calcContainer)


// // style
// const style = document.createElement("style")
// style.textContent = `

// body{
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     height: 100vh;
// }

// .calcContainer{
//     width:250px;
//     margin:20px;
//     padding:20px;
//     box-shadow:0 4px 10px rgba(0,0,0,0.2);
//     border-radius:10px;
// }
// .display{
//     width:230px;
//     padding:10px;
//     margin-bottom:10px;
// }
// .btnContainer{
//     display:grid;
//     grid-template-columns:repeat(4,1fr);
//     gap:10px;
// }
// .btn{
//     padding:15px;
//     background:#eee;
//     border:none;
//     border-radius:6px;
// }
// `
// document.head.appendChild(style)




// const traffic = document.createElement("div")
// const red = document.createElement("div")
// const yellow = document.createElement("div")
// const green = document.createElement("div")


// traffic.classList.add("traffic")
// red.classList.add("light")
// yellow.classList.add("light")
// green.classList.add("light")

// traffic.appendChild(red)
// traffic.appendChild(yellow)
// traffic.appendChild(green)

// document.body.appendChild(traffic)

// // style
// const style2 = document.createElement("style")
// style2.textContent = `
// body{
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     height: 100vh;   
// }
// .traffic{
//     width:85px;
//     padding:20px;
//     background:black;
//     border-radius:10px;
//     display:flex;
//     flex-direction:column;
//     gap:20px;
//     margin:20px;
// }
// .light{
//     width:80px;
//     height:80px;
//     border-radius:50%;
//     background:gray;
// }
// `
// document.head.appendChild(style2)


// // logic
// let state = 0

// function changeLight(){

//     red.style.background = "gray"
//     yellow.style.background = "gray"
//     green.style.background = "gray"

//     if(state === 0){
//         red.style.background = "red"
//     }
//     else if(state === 1){
//         yellow.style.background = "yellow"
//     }
//     else{
//         green.style.background = "green"
//     }

//     state++

//     if(state > 2){
//         state = 0
//     }
// }

// // start
// changeLight()
// setInterval(changeLight, 5000)