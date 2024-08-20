import './style.css';

// import { createTodoList } from "./todolist.js";

// createTodoList()

// import { createDefaultCard } from "./todolist.js";

// createDefaultCard()

import { createCard } from "./todolist.js";

createCard()

import { addUserInput } from "./todolist.js";

addUserInput()


// import { createForm } from "./todolist.js";
// 
// createForm()


const form1 = document.querySelector('#form1');
form1.addEventListener('submit', (e) => {
    e.preventDefault();
})

const library = document.querySelector('#library');
const formContainer = document.getElementById('form-container');
const openButton1 = document.querySelector('.open-button1');
openButton1.addEventListener('click', () => {
    formContainer.style.display = 'block';

})

const openButton = document.querySelector('.open-button');
openButton.addEventListener('click', () => {
    form1.style.display = 'block';

})



// const openButton = document.querySelector('.open-button');
// const bigCard = document.getElementById('bigCard')
// const cards = document.querySelectorAll('.card');
// const openButton = document.querySelector('.open-button');

// openButton.addEventListener('click', addForm);


// openButton.addEventListener('click', () => {
//     cards.forEach((card) => {
//         card.style.display = 'block';
//     })
// })

// const content = document.getElementById('content');
// const menuTab = document.querySelector('#menu-link');
// const aboutTab = document.querySelector('#about-link');
// const homeTab = document.querySelector('#home-link');


// menuTab.addEventListener('click', () => {
//     content.textContent = '';
//     createMenuTab();
// })