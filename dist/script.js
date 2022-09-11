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
const btnContainer = document.querySelector(".button-container");
const btnInit = document.querySelector(".init");
const intro = document.querySelector(".intro");

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

const text = "Tic Tac Toe 😋";
const speed = 150;
const pause = 1500;
let botScore = 0;
let playerScore = 0;
let count = 0;

function typewriter(index = 1, direction = 1) {
  let displayed = text.slice(0, index);
  intro.textContent = displayed;
  count++;
  if (displayed.length >= text.length && count < text.length * 2) {
    setTimeout(() => {
      typewriter(index - 1, -1, true);
    }, pause);
  } else if (count < text.length * 2) {
    setTimeout(() => typewriter(index + direction, direction), speed);
  }
}

typewriter();

btnContainer.addEventListener("click", () => {
  init();
});

function start() {
  setTimeout(init, 5000);
}
start();

function init() {
  intro.classList.remove("introAnimate");
  inPlay = true;
  message.textContent = "ººº";
  btnContainer.style.display = "none";
  let chooseFirstPlayer = Math.floor(Math.random() * players.length);
  currentPlayer = players[chooseFirstPlayer];
  currentMovesCount = 0;
  boxes.forEach((box) => {
    box.boxNum.textContent = "";
    box.alreadyPicked = false;
  });
  availableOptions = optionsList.map((option) => option);

  setTimeout(() => {
    message.textContent =
      currentPlayer === "bot" ? "Bot's Turn" : "Player's Turn";
    currentPlayer === "bot" ? botTurn() : playerTurn();
  }, 3000);
}

function registerMove(boxPicked, pickedBy, i) {
  gameOver();
  win();

  if (currentMovesCount < totalNumberOfMoves && inPlay) {
    !boxPicked.alreadyPicked
      ? moved(boxPicked, pickedBy, i)
      : pickedBy === "player"
      ? playerTurn()
      : botRetry();
    win();
  }
  console.log(currentMovesCount);
}

function moved(boxPicked, pickedBy, i) {
  currentMovesCount++;
  boxPicked.boxNum.textContent = pickedBy === "player" ? playerMove : botMove;

  playerClicked = true;

  boxPicked.alreadyPicked = true;

  // availableOptions.splice(boxes.indexOf(i), 1);
  availableOptions.pop();
  console.log(availableOptions);

  currentPlayer = pickedBy === "player" ? "bot" : "player";

  message.textContent =
    currentPlayer === "player" ? "Player's Turn" : "Bot's Turn";

  pickedBy === "player" ? botTurn() : playerTurn();
}

function playerTurn() {
  gameOver();
  boxes.forEach((box, i) => {
    box.boxNum.addEventListener("click", () => {
      registerMove(box, "player", i);
    });
  });
}

function botPlay() {
  gameOver();
  let botPick = Math.floor(Math.random() * boxes.length);
  let botChoice = boxes[botPick];
  console.log(botPick, botChoice);
  registerMove(botChoice, "bot", botPick);
}

function botTurn() {
  setTimeout(() => {
    botPlay();
  }, 1200);
}
function botRetry() {
  botPlay();
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

      btnContainer.style.display = "flex";
      return true;
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

      btnContainer.style.display = "flex";
      return true;
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

      btnContainer.style.display = "flex";
      return true;
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

      btnContainer.style.display = "flex";
      return true;
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

      btnContainer.style.display = "flex";
      return true;
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

      btnContainer.style.display = "flex";
      return true;
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
      btnContainer.style.display = "flex";
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

      btnContainer.style.display = "flex";
      return true;
    }
  }
}

function gameOver() {
  if (availableOptions.length === 0) {
    btnContainer.style.display = "flex";
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
