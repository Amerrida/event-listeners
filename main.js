const toDoInputElem = document.getElementById('toDoInput'); //type your id's//
const notesInputElem = document.getElementById('notesInput');// type your id's//

const submitToDoInputButton = document.getElementById('submitToDoInputButton');

const activateDeletes =() => {
    const deleteButtons =document.getElementsByClassName('deleteButtons');

for (let i = 0; i < deleteButtons.length; i++){
    const element = deleteButtons[i];
    element.addEventListener("click", (e) => {
        //card that the button was on
        const buttonIclicked = e.target;
        const cardTodoDelete = buttonIclicked.parentNode.parentNode;
        cardTodoDelete.remove();
        //.remove()
        //.parentNode
        
        console.log ("they clicked delete!!");
    })
}
}

const printToDom =(stringToPrint, whereToPrint) => {
    document.getElementById(whereToPrint).innerHTML += stringToPrint;
}

const buildNewToDoCard = (toDo, notes) => {
    let DOMString =`<div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${toDo}</h5>
      <p class="card-text">${notes}.</p>
      <button href="#" class="btn btn-primary deleteButtons">Delete this</button>
    </div>
  </div>`;

    printToDom(DOMString, 'toDoCards');
    //this is calling the delete button//
    activateDeletes()
    
}

//now add the event listener itself//

submitToDoInputButton.addEventListener("click", (e) => {
    e.preventDefault ();
    buildNewToDoCard(toDoInputElem.value,notesInputElem.value);

    console.log('toDo:  ', toDoInputElem.value);
    console.log ('notes:  ', notesInputElem.value);
});