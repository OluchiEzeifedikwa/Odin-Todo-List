const myLibrary = [];

function Book(title, description, duedate, priorities, notes, checklist) {
   this.title = title;
   this.description = description;
   this.duedate = duedate;
   this.priorities = priorities;
   this.notes = notes;
   this.checklist = checklist;
   this.info = function() {
       return { title, description, duedate, priorities, notes, checklist };
   }
}


const project1 = new Book('HOME', "Tolkien", "295 pages", "hello", "hello", 'hello');
const project2 = new Book('WORK', "Tolkien", "400 pages", "hi", "hello", "hello");
const project3 = new Book('WORK', "Tolkien", "400 pages", "hi", "hello", "hello", "hello" );
// const todolist4 = new Book('WORK', "Tolkien", "400 pages", "hi", "hello", "hello", "hello" );
console.log(project1);
console.log(project2);



console.log(Object.getPrototypeOf(project1) === Book.prototype);
// console.log(Object.getPrototypeOf(lotr) === Book.prototype);

myLibrary.push(project1);
myLibrary.push(project2);
myLibrary.push(project3);
// myLibrary.push(project4);

console.log(myLibrary);

// function createDefaultCard() {
//     // console.log('length of array', myLibrary.length)
//     for (let i = 0; i < myLibrary.length; i++) {
//         console.log('counter', i)
//         let lib = myLibrary[i].info()
//         createCard(lib.title, lib.description, lib.duedate, lib.notes, lib.priorities, lib.checklist)
//     }
// }

// createDefaultCard()



const createCard = (bookTitle, bookDescription, bookNotes, bookPriorities, bookChecklist) => {
// function createCard(bookTitle, bookDescription, bookDuedate, bookNotes, bookPriorities, bookChecklist) {
    const card = document.createElement('button')
    const title = document.createElement('h4')
    const description = document.createElement('p')
    // const duedate = document.createElement('p')
    const priorities = document.createElement('p')
    const notes = document.createElement('p')
    const checklist = document.createElement('input')
    // const hasRead = document.createElement('p')
    const removeBtn = document.createElement('button')
    const icon = document.createElement('i')
    

    notes.style.border = '2px solid blue';
    notes.style.backgroundColor = 'white';
    notes.style.cursor = 'text';
    notes.style.position = 'relative';
    notes.style.padding = '5px';
    notes.style.borderRadius = '20px';
    notes.style.borderInlineStartColor = 'black';

    
    card.classList.add('card')
    removeBtn.classList.add('removeBtn')
    icon.classList.add('fa', 'fa-trash-o')
    notes.classList.add('fa', 'fa-pencil')

    // removeBtn.textContent = 'Remove'
    // const isRead = hasReadBook ? 'yes' : 'no'
    // hasRead.textContent = 'Have you read? ' + isRead
    title.textContent = 'TITLE: ' + bookTitle
    description.textContent = 'Description: ' + bookDescription
    // duedate.textContent = 'Duedate: ' + bookDuedate
    priorities.textContent = 'Priorities: ' + bookPriorities
    notes.textContent = 'Notes: ' + bookNotes
    checklist.textContent = 'Checklist: ' + bookChecklist

    
    checklist.setAttribute('type', 'radio')
    description.setAttribute('contenteditable', 'true');
    priorities.setAttribute('contenteditable', 'true');
    notes.setAttribute('contenteditable', 'true');
    notes.setAttribute('id', notes);



   
    

    removeBtn.appendChild(icon)
    card.appendChild(title)
    card.appendChild(description)
    card.appendChild(priorities)
    card.appendChild(notes)
    card.appendChild(checklist)
    // card.appendChild(hasRead)
    card.appendChild(removeBtn)

    const formContainer = document.getElementById('form-container');
    formContainer.appendChild(card)

    formContainer.style.display = 'none';
    
    
    // const formContainer = document.getElementById('form-container');
    // formContainer.appendChild(card)


    removeBtn.addEventListener('click', removeCard)
}


// function addUserInput() {
const addUserInput = () => {
  const form = document.getElementById('form1');
  const title = document.getElementById('title').value;
  const description = document.getElementById('description').value;
  const priorities = document.getElementById('priorities').value;
  const notes= document.getElementById('notes').value;
  const read = document.getElementById('read').checked;
 
  createCard(title, description, priorities, notes, read)
 
  form.addEventListener('submit', (e) => {
       e.preventDefault();
      //   display.innerHTML = {Title};
      //   display.innerHTML = 'button';    
 });
 };
 addUserInput();
 export { addUserInput }
 
  


const createDefaultCard = () => {
    // console.log('length of array', myLibrary.length)
    for (let i = 0; i < myLibrary.length; i++) {
        console.log('counter', i)
        let lib = myLibrary[i].info()
        createCard(lib.title, lib.description, lib.duedate, lib.notes, lib.priorities, lib.checklist)
    }
}

createDefaultCard()

export { createCard }
// export { createDefaultCard }

 
// const addForm = () => {
//     const form1 = document.getElementById('form1');
//     form1.style.display = 'block';
// }


//  const button = document.querySelector('button');
//  button.addEventListener('click', addForm);



 
// const form1 = document.getElementById('form1');
// const openButton = document.querySelector('.open-button');
// openButton.addEventListener('click', () => {
//     form1.style.display = 'block';

// })
    
 


function removeCard(e) {
  e.target.parentElement.remove();
 //   const card = document.getElementById('card');
 //   card.remove();
}







// function addUserInput() {
//  const form = document.getElementById('form1');
//  const title = document.getElementById('title').value;
//  const author = document.getElementById('author').value;
//  const num = document.getElementById('num').value;
//  const read = document.getElementById('read').checked;

//  createCard(title, author, num, read)

//  form.addEventListener('submit', (e) => {
//       e.preventDefault();
//      //   display.innerHTML = {Title};
//      //   display.innerHTML = 'button';    
// });
// };
 
// createDefaultCard()













      


   
   




















// const createTodoList = () => {
//     const bigCard = document.querySelector('.big-card');
//     const card = document.createElement('div')
//     // const card = document.querySelectorAll('.card');
//     const openButton = document.querySelector('.open-button');
//     const title = document.createElement('p');
//     const description = document.createElement('p');
//     openButton.style.textContent = 'button';

//     title.textContent = 'Title: '
    

//     card.appendChild(title)
//     card.appendChild(description)
//     bigCard.appendChild(card)
    

    
//     // openButton.addEventListener('click', () => {
//     //     cards.forEach((card) => {
//     //         card.style.display = 'block';
//     //     })
//     }


   



// export { createTodoList }

// const createMenuTab = () => {
//     const content = document.querySelector('#content');
//     const para = document.createElement('p');
//     const img = document.createElement('img');
//     img.src = '../src/sandwich.png';
//     img.style.height = '200px';
//     para.textContent = "Maryann restaurant is here to serve you quality homemade and intercontinental meals"
//     para.style.color = 'blue';
    
//     content.appendChild(para)
//     content.appendChild(img)
// }

// export { createMenuTab }
