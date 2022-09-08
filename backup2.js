// /*
const box1 = document.querySelector(".box-1");
const box2 = document.querySelector(".box-2");
const box3 = document.querySelector(".box-3");
const box4 = document.querySelector(".box-4");
const box5 = document.querySelector(".box-5");
const box6 = document.querySelector(".box-6");
const box7 = document.querySelector(".box-7");
const box8 = document.querySelector(".box-8");
const box9 = document.querySelector(".box-9");
const message = document.querySelector(".message");
const initBtn = document.querySelector(".init");

const allBoxes = document.querySelectorAll(".box");
const playerMove = "X";
const botMove = "O";

const players = ["player", "bot"];
let currentPlayer;
let currentMovesCount = 0;
let totalNumberOfMoves = 9;
let optionsList = [0, 1, 2, 3, 4, 5, 6, 7, 8];
let availableOptions = optionsList.map((option) => option);
let inPlay = true;

const boxes = [
  { boxNum: box1, id: 1, alreadyPicked: false },
  { boxNum: box2, id: 2, alreadyPicked: false },
  { boxNum: box3, id: 3, alreadyPicked: false },
  { boxNum: box4, id: 4, alreadyPicked: false },
  { boxNum: box5, id: 5, alreadyPicked: false },
  { boxNum: box6, id: 6, alreadyPicked: false },
  { boxNum: box7, id: 7, alreadyPicked: false },
  { boxNum: box8, id: 8, alreadyPicked: false },
  { boxNum: box9, id: 9, alreadyPicked: false },
];

initBtn.addEventListener("click", () => {
  init();
});

function init() {
  inPlay = true;
  initBtn.style.display = "none";
  let chooseFirstPlayer = Math.floor(Math.random() * players.length);
  currentPlayer = players[chooseFirstPlayer];
  currentMovesCount = 0;
  boxes.forEach((box) => {
    box.boxNum.textContent = "";
    box.alreadyPicked = false;
  });
  availableOptions = optionsList.map((option) => option);
  message.textContent =
    currentPlayer === "bot" ? "Bot's Turn" : "Player's Turn";

  currentPlayer === "bot" ? botTurn() : playerTurn();
}
init();

function registerMove(boxPicked, pickedBy, i) {
  gameOver();
  win();

  if (
    currentMovesCount < totalNumberOfMoves &&
    inPlay &&
    availableOptions.length !== 0
  ) {
    !boxPicked.alreadyPicked ? moved(boxPicked, pickedBy, i) : botTurn();

    win();
    // gameOver()
  } else {
    // botTurn();
    gameOver();
  }
}

function moved(boxPicked, pickedBy, i) {
  currentMovesCount++;
  boxPicked.boxNum.textContent = pickedBy === "player" ? playerMove : botMove;

  boxPicked.alreadyPicked = true;

  availableOptions.splice(boxes.indexOf(i), 1);
  console.log(availableOptions);

  currentPlayer = pickedBy === "player" ? "bot" : "player";

  message.textContent =
    currentPlayer === "player" ? "Player's Turn" : "Bot's Turn";

  pickedBy === "player" ? botTurn() : playerTurn();
}

function playerTurn() {
  boxes.forEach((box, i) => {
    boxes[i].boxNum.addEventListener("click", () => {
      registerMove(boxes[i], "player", i);
    });
    // function playerTurn() {
    //   console.log(availableOptions);
    //   availableOptions.forEach((option, i) => {
    //     boxes[i].boxNum.addEventListener("click", () => {
    //       console.log("clicked");
    //       console.log(boxes[i]);
    //       registerMove(boxes[i], "player", i);
    //     });
  });
}

function botTurn() {
  setTimeout(() => {
    let botPick = Math.floor(Math.random() * availableOptions.length);
    let botPicked = availableOptions[botPick];
    let botChoice = boxes[botPicked];
    registerMove(botChoice, "bot", botPicked);
  }, 1200);
}

function win() {
  if (boxes.map((box) => box.boxNum.textContent !== "")) {
    if (
      box1.textContent !== "" &&
      box2.textContent !== "" &&
      box3.textContent !== "" &&
      box1.textContent === box2.textContent &&
      box2.textContent === box3.textContent
    ) {
      message.textContent =
        currentPlayer === "bot" ? "Player WON!" : "Bot WON!";
      inPlay = false;
    }
    if (
      box4.textContent !== "" &&
      box5.textContent !== "" &&
      box6.textContent !== "" &&
      box4.textContent === box5.textContent &&
      box5.textContent === box6.textContent
    ) {
      message.textContent =
        currentPlayer === "bot" ? "Player WON!" : "Bot WON!";
      inPlay = false;
    }
    if (
      box7.textContent !== "" &&
      box8.textContent !== "" &&
      box9.textContent !== "" &&
      box7.textContent === box8.textContent &&
      box8.textContent === box9.textContent
    ) {
      message.textContent =
        currentPlayer === "bot" ? "Player WON!" : "Bot WON!";
      inPlay = false;
    }
    if (
      box1.textContent !== "" &&
      box4.textContent !== "" &&
      box7.textContent !== "" &&
      box1.textContent === box4.textContent &&
      box4.textContent === box7.textContent
    ) {
      message.textContent =
        currentPlayer === "bot" ? "Player WON!" : "Bot WON!";
      inPlay = false;
    }
    if (
      box2.textContent !== "" &&
      box5.textContent !== "" &&
      box8.textContent !== "" &&
      box2.textContent === box5.textContent &&
      box5.textContent === box8.textContent
    ) {
      message.textContent =
        currentPlayer === "bot" ? "Player WON!" : "Bot WON!";
      inPlay = false;
    }
    if (
      box3.textContent !== "" &&
      box6.textContent !== "" &&
      box9.textContent !== "" &&
      box3.textContent === box6.textContent &&
      box6.textContent === box9.textContent
    ) {
      message.textContent =
        currentPlayer === "bot" ? "Player WON!" : "Bot WON!";
      inPlay = false;
    }
    if (
      box1.textContent !== "" &&
      box5.textContent !== "" &&
      box9.textContent !== "" &&
      box1.textContent === box5.textContent &&
      box5.textContent === box9.textContent
    ) {
      message.textContent =
        currentPlayer === "bot" ? "Player WON!" : "Bot WON!";
      inPlay = false;
    }
    if (
      box3.textContent !== "" &&
      box5.textContent !== "" &&
      box7.textContent !== "" &&
      box3.textContent === box5.textContent &&
      box5.textContent === box7.textContent
    ) {
      message.textContent =
        currentPlayer === "bot" ? "Player WON!" : "Bot WON!";
      inPlay = false;
    }
  }
}

function gameOver() {
  if (
    !currentMovesCount > totalNumberOfMoves ||
    !inPlay ||
    availableOptions == ""
  ) {
    initBtn.style.display = "inline-block";
    message.textContent = "Game Over";
    inPlay = false;
  }
}

function test() {
  message.addEventListener("click", () => {
    console.log("tested");
  });
}
test();
