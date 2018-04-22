const buttonAdd = document.querySelector('.add');
const buttonClear = document.querySelector('.clear');
const input = document.querySelector('input');
const ul = document.querySelector('.todo_list');
const listItems = document.getElementsByTagName('li');

// Create the to do item 
buttonAdd.addEventListener('click', () => {
  if (input.value === '') {
    alert('Please enter a task')
  } else {
    let li = document.createElement('li');
    li.innerHTML = `<span class="item">${input.value}</span><a href="#" class="edit">Edit</a><a href="#" class="remove">Remove</a>`;
    ul.appendChild(li);
    input.value = '';
  }
});

//Mark task complete and remove item
ul.addEventListener('click', (event) => {
  event.preventDefault();
  if (event.target.tagName == 'SPAN') {
    event.target.parentNode.classList.toggle('complete');
  } else if (event.target.className == 'remove') {
     event.target.parentNode.parentNode.removeChild(event.target.parentNode);
  } 
});

//Edit the item
ul.addEventListener('click', (event) => {
  event.preventDefault();
  if (event.target.className == 'edit') {
    let text = event.target.parentNode.textContent;
    event.target.parentNode.innerHTML = `<input id="newItem" type="text" value="${text}"><button id="save" class="add" type="submit" class="btn">Save</button>`;
  }
});

//Submit the new item 
ul.addEventListener('click', (event) => {
  event.preventDefault();
  if (event.target.className == 'add') {
    let itemText = this.document.querySelector('#newItem').value;
    let newListItem = `<span class="item">${itemText}</span><a href="#" class="edit">Edit</a><a href="#" class="remove">Remove</a>`;
    event.target.parentNode.innerHTML = newListItem;
  }
});


