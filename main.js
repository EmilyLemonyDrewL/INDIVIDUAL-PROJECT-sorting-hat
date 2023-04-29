//create an array of objects with 3 students to start with

const students = [
  {
    id: 1,
    name: "Lemony",
    house: "Hufflepuff"
  },
  {
    id: 2,
    name: "Stolas",
    house: "Slytherin",
  },
  {
    id: 3,
    name: "Howl Pendragon",
    house: "Ravenclaw",
  }
];

//badger img: https://plus.unsplash.com/premium_photo-1667238830949-753e7ea0d2d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1819&q=80

//snake img: https://images.unsplash.com/photo-1580192985016-7e15ef081dd8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1361&q=80

//lion img: https://images.unsplash.com/photo-1578924825286-9492be34ec50?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1829&q=80

//crow image: https://images.unsplash.com/photo-1584446922442-7ac6b8c118f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=912&q=80



//render to DOM
const renderToDom = (divId, htmlToRender) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = htmlToRender;
}


//show cards
const cardsOnDom = (students) => {
  let domString ="";
  for (const witch of students) {
    domString += `<div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${witch.name}</h5>
      <p class="card-house">${witch.house}</p>
    </div>
  </div>`
  };


  renderToDom("#students", domString);
}

//get form on DOM when sorting hat button is clicked

const formOnDom = () => {
  let domString = `<form>
  <div class="form-floating mb-3">
    <input type="text" class="form-control" id="name" placeholder="Name" required>
    <label for="floatingInput">Name</label>
  </div>
  <button type="submit" class="btn btn-dark" id="form-submit">Revelio!</button>
  </form>`;

  renderToDom("#form", domString);
}

const revealForm = document.querySelector("#sort-me-button");

revealForm.addEventListener('click', () => {
  formOnDom();
})




//filter for house
const filter = (students, houseString) => {
  const houseArray = [];
  

  for (const witch of students) {
  if (witch.house === houseString) {
    houseArray.unshift(witch);
  }
}

return cardsOnDom(houseArray);
}



//create card structure for the death eater traitors? maybe. You may not have to.

//work on form for students to fill out and place into a modal.Form should include a sort button. When the sort button is clicked, the form should disappear and the student card should appear. If the form is not filled out properly, an error message should display.

//Then, make sure the house is randomized for each student.


//create filter button(s) to sort by house, and get them working.

//use startapp function (make sure that the app does not start until the sorting hat is clicked)
const startApp = () => {
  cardsOnDom(students);
}

// event listener by click, get the expel button working. DOES NOT DELETE, but moves the student to the death eater traitors section. 

//Make sure the death eaters section is styled differently.

//go back and make sure all your javascript is working and that you have everything that is required before playing around with the css.

//update readme and record a loom video. Be prepared to explain renderToDom.
