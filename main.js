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
  domString += `<div class="card mx-auto text-center border-warning" style="width: 14rem;">
  <div class="card-body text-center">
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
  const lionHouse = filter(students, "Gryffindor");
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

const formWorks = document.querySelector('form');
  //make the form functional
  const newStudent = (e) => {
    e.preventDefault();
    //Then, make an array to pull a random house from
    const houses = ["Gryffindor", "Hufflepuff", "Slytherin", "Ravenclaw"];
    //function = Math.floor(Math.random() * length of array);
    const randomHouse = Math.floor(Math.random() * houses.length);
    const newStudentObj = {
      id: students.length + 1,
      name: `${document.querySelector("#name").value}`,
      house: houses[randomHouse]
    }

    students.push(newStudentObj);
    cardsOnDom(students);
    form.reset();

  };

  formWorks.addEventListener('submit', newStudent);



//THings left to do:

// Make custom error message for the form, if bootstrap allows


//add different styling to the Death Eater cards


// README hint for the expel button: "Think of a way you can expel students without just hiding those divs on the page. "This would mean when the button is clicked you modify the array of students and pass the new array into your renderToDom() function. Double hint - put a unique id in the student object when you create them."

//I am guessing that I will need to create two seperate arrays, and use array methods and a click event to get things working.


//update readme and record a loom video. Be prepared to explain renderToDom.
