// DOM - Document Object Model
// The DOM is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content. The DOM provides a structured representation of the document as a tree of objects, and it defines methods that allow developers to access and manipulate these objects.


// Get elements by ID
const title = document.getElementById('main-heading');

console.log(title);


// Get elements by class name
// const listItems = document.getElementsByClassName('list-item');

// console.log(listItems);

// Get elements by tag name
const listItems = document.getElementsByTagName('li');

console.log(listItems);

// Get elements by query selector
// const container = document.querySelector('div');

// console.log(container);


// Get elements by query selector all
const containers = document.querySelectorAll('div');
console.log(containers);



// Styling elements

const title1 = document.querySelector('#main-heading');
console.log(title1);

title1.style.color = 'green';


const listItems2 = document.querySelectorAll('.list-items');
console.log(listItems2);

for (let i = 0; i < listItems2.length; i++) {
  listItems2[i].style.fontSize = '20px';
  listItems2[i].style.backgroundColor = 'blue';
  listItems2[i].style.cursor = 'pointer';
}




// Creating and appending elements

const un = document.querySelector('.list-items');

const li = document.createElement('li');

// Styling the new list item
li.style.color = 'white';

// Modifying the content of the new list item
li.textContent = 'New Item';

// Adding the new list item to the unordered list
un.append(li);