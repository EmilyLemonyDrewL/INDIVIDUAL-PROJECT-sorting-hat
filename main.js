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



//Empty array for the terrible death eating traitors move into
const expelled = [];


//render to DOM. Use divId because you want your elements to be printed within a specific div, and htmlToRender/.innerHTML, since you want to go in and alter or add to the html.

const renderToDom = (divId, htmlToRender) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = htmlToRender;
};


//Card structure/render to DOM

const cardsOnDom = (array) => {
let domString = "";
 for (const witch of array) {
  domString += `<div class="card mx-auto text-center border-warning" style="width: 14rem;">
  <div class="card-body text-center">
    <h5 class="card-title">${witch.name}</h5>
    <p class="card-house">${witch.house}</p>
    <button id="expelButton--${witch.id}" class="btn btn-dark">Expel(liarmus?)</button>
   </div>
 </div>`;
 }

  renderToDom("#student-cards", domString);
  
//add event listener to expel button
  document.querySelector("#student-cards").addEventListener('click', expelAStudent);
};
 

// README hint for the expel button: "Think of a way you can expel students without just hiding those divs on the page. "This would mean when the button is clicked you modify the array of students and pass the new array into your renderToDom() function. Double hint - put a unique id in the student object when you create them."
//Now the expelled student cards need to be rendered to DOM
const expelCardsOnDom = (array) => {
  let domString = "";
  for (const witch of array) {
    domString += `<div class="card mx-auto text-center border-warning" style="width: 14rem;">
     <div class="card-body text-center">
     <h4 class="card-expel">${witch.name} is now prohibited from entering school grounds.</h4>
     </div>
    </div>`;
  }


  renderToDom("#evil", domString);
};


//"Expel" the student
const expelAStudent = (e) => {
  if (e.target.id.includes("expelButton")) {
    const [, witchId] = e.target.id.split("--");
    const witchIndex = students.findIndex(
      (witch) => Number(witchId) === witch.id
    );

    //splice the card from the array and push to the new array
    const expelThem = students.splice(witchIndex, 1);
    expelled.push(...expelThem);

    expelCardsOnDom(expelled);
    cardsOnDom(students);
    }
  };



//show cards on DOM at start of server
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
    //Math.floor "static method that rounds down and returns an integer"
    //Math.random "you can set a range and it will return a pseudo random number from within the range"
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

//Make it to where the modal closes when you submit the new student form

//update readme and record a loom video.
