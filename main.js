const toDoInputElem = document.getElementById('toDoInput'); //type your id's//
const notesInputElem = document.getElementById('notesInput');// type your id's//

const submitToDoInputButton = document.getElementById('submitToDoInputButton');

const printToDom =(stringToPrint, whereToPrint) => {
    document.getElementById(whereToPrint).innerHTML += stringToPrint;
}

const buildNewToDoCard = (toDo, notes) => {
    let DOMString =`<div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${toDo}</h5>
      <p class="card-text">${notes}.</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>`

    printToDom(DOMString, 'toDoCards');
}
//now add the event listener itself//

submitToDoInputButton.addEventListener("click", (e) => {
    e.preventDefault ();
    buildNewToDoCard(toDoInputElem.value,notesInputElem.value);

    console.log('toDo:  ', toDoInputElem.value);
    console.log ('notes:  ', notesInputElem.value);
});