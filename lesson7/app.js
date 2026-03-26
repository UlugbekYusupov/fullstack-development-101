const heading = document.getElementsByClassName('intro')[0]
console.log(heading.textContent) // getting the text content of the heading element



const paragraph = document.getElementById('question')
console.log(paragraph.textContent) // getting the text content of the paragraph element

const paragraph2 = document.querySelector('#question2')
console.log(paragraph2.textContent) // getting the text content of the paragraph element using querySelector


const paragraphs = document.querySelectorAll('p')
paragraphs.forEach((p) => {
    console.log(p.textContent) // getting the text content of all paragraph elements using querySelectorAll and forEach loop
})


