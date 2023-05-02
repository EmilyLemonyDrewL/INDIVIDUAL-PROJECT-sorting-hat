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
    house: "Slytherin"
  },
  {
    id: 3,
    name: "H. Pendragon",
    house: "Ravenclaw"
  }
];



//render to DOM. Use divId because you want your elements to be printed within a specific div, and htmlToRender/.innerHTML, since you want to go in and alter or add to the html.

const renderToDom = (divId, htmlToRender) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = htmlToRender;
}




//Card structure

const cardsOnDom = (students) => {
let domString ="";
 for (const witch of students) {
  domString += `<div class="col-sm-4 card text-center" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${witch.name}</h5>
    <p class="card-house">${witch.house}</p>
    <button class="btn btn-dark" id="expel">Expel(liarmus?)</button>
   </div>
 </div>`;
 }

  renderToDom("#student-cards", domString);
}

//show cards on DOM at start of app
const startApp = () => {
  cardsOnDom(students);
}

startApp();









//get form to show on DOM when sorting hat button is clicked

const formOnDom = () => {

  let domString = `<form>
  <div class="form-floating mb-3">
  <label for="floatingInput">Name</label>
  <input type="text" class="form-control" id="name" placeholder="Name" required>
  </div>
  <button type="submit" class="btn btn-dark" id="getHouse">Revelio!</button>
  </form>`;

 
  renderToDom("#form", domString);

}

const revealForm = document.querySelector("#sort-me-button");

revealForm.addEventListener('click', () => {
  formOnDom();
})






//filter for sorting cards by house
const filter = (students, houseString) => {
  const houseArray = [];
  

  for (const witch of students) {
  if (witch.house === houseString) {
    houseArray.unshift(witch);
  }
}

return cardsOnDom(houseArray);
}

//target the buttons
const showLions = document.querySelector("#lion");
const showBadgers = document.querySelector("#badger");
const showSnakes = document.querySelector("#snake");
const showRavens = document.querySelector("#raven");
const showAllStudents = document.querySelector("#show-all");


//add click events to the buttons
showLions.addEventListener('click', () => {
  const lionHouse = filter(students, "Griffindor");
  cardsOnDom(lionHouse);
});

showBadgers.addEventListener('click', () => {
  const badgerHouse = filter(students, "Hufflepuff");
  cardsOnDom(badgerHouse);
});

showSnakes.addEventListener('click', () => {
  const snakeHouse = filter(students, "Slytherin");
  cardsOnDom(snakeHouse);
});

showRavens.addEventListener('click', () => {
  const ravenHouse = filter(students, "Ravenclaw");
  cardsOnDom(ravenHouse);
});

showAllStudents.addEventListener('click', () => {
  cardsOnDom(students);
});




// try to get the form functioning and assigning a random house

const form = document.querySelector('form');
  //make the form functional
  const newStudent = (e) => {
    e.preventDefault();
    //Then, make an array to pull a random house from
    const houses = ["Griffindor", "Hufflepuff", "Slytherin", "Ravenclaw"];
    //function = Math.floor(Math.random() * length of array);
    const randomHouse = Math.floor(Math.random() * 4);
    const newStudentObj = {
      id: students.length + 1,
      name: `${document.querySelector("#name").value}`,
      house: houses[randomHouse]
    }

    students.push(newStudentObj);
    cardsOnDom(students);
    form.reset();

  };

  form.addEventListener('submit', newStudent);


//Then, make sure the house is randomized for each student.
//array of houses
//let randomHouse = houses[Math.floor(Math.random() * houses.length)];
//let houses = ["Griffindor, Hufflepuff", "Slytherin", "Ravenclaw"];

//let whichHouse = houses[Math.floor(Math.random() * houses.length)];


// event listener by click, get the expel button working. DOES NOT DELETE, but moves the student to the death eater traitors section. 

//Make sure the death eaters section is styled differently.

//go back and make sure all your javascript is working and that you have everything that is required before playing around with the css.

//update readme and record a loom video. Be prepared to explain renderToDom.
