
//Creating a Constructor
function Book(Name, Author, Type, idx) {
  this.inputName = Name;
  this.inputAuthor = Author;
  this.type = Type;
  this.idx = idx;


}


function Display() {

}
Display.prototype.clear = function () {
  let libraryForm = document.getElementById('libraryForm');
  libraryForm.reset();
}

// validate a book
Display.prototype.validate = function (book) {
  if (book.inputName.length < 2 || book.inputAuthor.length < 2) {
    return false;
  }
  else {
    return true;
  }
}
// displaying succsess or danger meassge
Display.prototype.show = function (alerte, messag, alertm) {
  let message = document.getElementById('message');
  message.innerHTML = `<div class="alert alert-${alerte} alert-dismissible fade show" role="alert">
  <strong>${alertm}</strong> ${messag}
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>`;
  setTimeout(function () {
    message.innerHTML = '';
  }, 3000);
}

// dispalying the code
Display.prototype.add = function (book) {
  let Table = document.getElementById('Table');



  let html = ` 
  
  <tr id="${book.idx}">
  
    <td>${book.inputName}</td>
    <td>${book.inputAuthor}</td>
    <td>${book.type}</td>
    <td> <button type="button" id="${book.idx}"onclick="deleteNote(this)" class="btn btn-primary">Delete</button></td>
  </tr>`;

  Table.innerHTML += html;

}


// For deleting the particular row
function deleteNote(button) {
  let butto = button.id;
  let row = document.getElementById(butto)
  row.remove();
}




//Adding event listener


let submit = document.getElementById('submit');
submit.addEventListener('click', showNotes);
function showNotes(e) {
  e.preventDefault();

  let inputName = document.getElementById('inputName').value;
  let inputAuthor = document.getElementById('inputAuthor').value;
  let type;
  let programming = document.getElementById('programming');
  let fiction = document.getElementById('fiction');
  let cooking = document.getElementById('cooking');
  if (fiction.checked) {
    type = fiction.value;
  }
  else if (programming.checked) {
    type = programming.value;
  }
  else {
    type = cooking.value;
  }
  const idx = Math.random();


  let book = new Book(inputName, inputAuthor, type, idx);







  let display = new Display();


  if (display.validate(book)) {
    display.add(book);
    display.clear();

    display.show('success', 'your request is accepted', 'Great');
  }
  else {
    display.show('danger', 'your Book is not added,try again!', 'Try by adding 2 or more word');
  }
}






























