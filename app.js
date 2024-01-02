let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector(".new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector(".msg");

let turnO = true; // playerX, playerY

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];
//
let resetGame = () => {
  turnO = true;
  enableBtns();
  msg.classList.add("hide");
};
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      box.innerText = "X";
      box.style.color = "blue";
      turnO = false;
    } else {
      box.innerText = "O";
      box.style.color = "red";
      turnO = true;
    }
    box.disabled = true;
    checkWinner();
  });
});
const disableBtns = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};
const enableBtns = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};
const showWinner = (winner) => {
  msg.innerText = `Congratulations! Winner is ${winner}`;
  msg.classList.remove("hide");
  disableBtns();
}
// const noWinner = () => {
//   msg.innerText = `Fail! No Winner`;
//   msg.classList.remove("hide");
//   disableBtns();
// }
let checkWinner = () => {
  for (let patterns of winPatterns) {
    let pos1 = boxes[patterns[0]].innerText;
    let pos2 = boxes[patterns[1]].innerText;
    let pos3 = boxes[patterns[2]].innerText;
    if (pos1 != "" && pos2 != "" && pos3 != "") {
      if (pos1 === pos2 && pos2 === pos3) {
        showWinner(pos1);
      }
    }
  }
};
newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
