let gridDisplay = document.querySelector("#grid");
let result = document.querySelector("#result");
//create an card array that stores the name of the card & the images
let cardArr = [
  {
    name: "pegasus",
    imgURL: "./Images/01-pegasus.png",
  },
  {
    name: "hippogriff",
    imgURL: "./Images/02-hippogriff.png",
  },
  {
    name: "phoenix",
    imgURL: "./Images/03-phoenix.png",
  },
  {
    name: "basilisk",
    imgURL: "./Images/04-basilisk.png",
  },
  {
    name: "chimera",
    imgURL: "./Images/05-chimera.png",
  },
  {
    name: "medusa",
    imgURL: "./Images/06-medusa.png",
  },
  {
    name: "pegasus",
    imgURL: "./Images/01-pegasus.png",
  },
  {
    name: "hippogriff",
    imgURL: "./Images/02-hippogriff.png",
  },
  {
    name: "phoenix",
    imgURL: "./Images/03-phoenix.png",
  },
  {
    name: "basilisk",
    imgURL: "./Images/04-basilisk.png",
  },
  {
    name: "chimera",
    imgURL: "./Images/05-chimera.png",
  },
  {
    name: "medusa",
    imgURL: "./Images/06-medusa.png",
  },
];

let cardsChosen = [];
let cardsChosenID = [];
let cardsWon = [];

//sort random array 0.5 * math random
cardArr.sort(() => 0.5 - Math.random());
console.log(cardArr);

function createBoard() {
  for (let i = 0; i < cardArr.length; i++) {
    let card = document.createElement("img");
    card.setAttribute("src", "./Images/00-default.png");
    card.setAttribute("data-id", i);
    //event listener inside a for loop function!
    card.addEventListener("click", flipCard);
    gridDisplay.append(card);
  }
}
createBoard();

function checkMatch() {
  let cards = document.querySelectorAll("img");
  let optionOneID = cardsChosenID[0];
  let optionTwoID = cardsChosenID[1];
  console.log("Checking for match...");

  if (cardsChosen[0].name == cardsChosen[1].name) {
    cards[optionOneID].setAttribute("src", "./Images/09-cleared.png");
    cards[optionTwoID].setAttribute("src", "./Images/09-cleared.png");
    cards[optionOneID].removeEventListener("click", flipCard);
    cards[optionTwoID].removeEventListener("click", flipCard);
    alert("matched!");
    cardsWon.push(cardsChosen);
  } else {
    cards[optionOneID].setAttribute("src", "./Images/00-default.png");
    cards[optionTwoID].setAttribute("src", "./Images/00-default.png");
    alert("Try again!!!");
  }

  result.innerHTML = `Your Score: ${cardsWon.length}`;
  cardsChosen = [];
  cardsChosenID = [];

  if (cardsWon.length == cardArr.length / 2) {
    result.innerHTML = "Congratulations!! You win the game!";
  }
}

function flipCard() {
  // get the card ID, and store that in an array
  let cardID = this.getAttribute("data-id");
  cardsChosen.push(cardArr[cardID]);
  cardsChosenID.push(cardID);
  console.log(cardID);
  console.log(cardsChosen);
  this.setAttribute("src", cardArr[cardID].imgURL);
  if (cardsChosen.length === 2) {
    setTimeout(checkMatch(), 500);
  }
}
//create a flipCard function
