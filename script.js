let _00 = document.getElementById("00");
let _01 = document.getElementById("00");
let _02 = document.getElementById("00");
let _10 = document.getElementById("00");
let _11 = document.getElementById("00");
let _12 = document.getElementById("00");
let _20 = document.getElementById("00");
let _21 = document.getElementById("00");
let _22 = document.getElementById("00");

let gameMatrix = [
  [2, 2, 2],
  [2, 2, 2],
  [2, 2, 2],
];

let currentTurn = 0;

let changeState = (elementId, xPosition, yPosition) => {
  if (gameMatrix[xPosition][yPosition] == 2) {
    gameMatrix[xPosition][yPosition] = currentTurn;
    document.getElementById(elementId).innerText = currentTurn.toString();
    if (currentTurn == 0) {
      currentTurn = 1;
    } else {
      currentTurn = 0;
    }
    console.log(elementId);
  }
  checkMatrix();
};

let checkMatrix = () => {
  if (gameMatrix[0][0] == 0 && gameMatrix[0][1] == 0 && gameMatrix[0][2] == 0) {
    alert("0 WON THE GAME");
    window.location.reload();
  }
  if (gameMatrix[1][0] == 0 && gameMatrix[1][1] == 0 && gameMatrix[1][2] == 0) {
    alert("0 WON THE GAME");
    window.location.reload();
  }
  if (gameMatrix[2][0] == 0 && gameMatrix[2][1] == 0 && gameMatrix[2][2] == 0) {
    alert("0 WON THE GAME");
    window.location.reload();
  }
  if (gameMatrix[0][0] == 0 && gameMatrix[1][0] == 0 && gameMatrix[2][0] == 0) {
    alert("0 WON THE GAME");
    window.location.reload();
  }
  if (gameMatrix[0][1] == 0 && gameMatrix[1][1] == 0 && gameMatrix[2][1] == 0) {
    alert("0 WON THE GAME");
    window.location.reload();
  }
  if (gameMatrix[0][2] == 0 && gameMatrix[1][2] == 0 && gameMatrix[2][2] == 0) {
    alert("0 WON THE GAME");
    window.location.reload();
  }
  if (gameMatrix[0][0] == 0 && gameMatrix[1][1] == 0 && gameMatrix[2][2] == 0) {
    alert("0 WON THE GAME");
    window.location.reload();
  }
  //
  if (gameMatrix[0][0] == 1 && gameMatrix[0][1] == 1 && gameMatrix[0][2] == 1) {
    alert("1 WON THE GAME");
    window.location.reload();
  }
  if (gameMatrix[1][0] == 1 && gameMatrix[1][1] == 1 && gameMatrix[1][2] == 1) {
    alert("1 WON THE GAME");
    window.location.reload();
  }
  if (gameMatrix[2][0] == 1 && gameMatrix[2][1] == 1 && gameMatrix[2][2] == 1) {
    alert("1 WON THE GAME");
    window.location.reload();
  }
  if (gameMatrix[0][0] == 1 && gameMatrix[1][0] == 1 && gameMatrix[2][0] == 1) {
    alert("1 WON THE GAME");
    window.location.reload();
  }
  if (gameMatrix[0][1] == 1 && gameMatrix[1][1] == 1 && gameMatrix[2][1] == 1) {
    alert("1 WON THE GAME");
    window.location.reload();
  }
  if (gameMatrix[0][2] == 1 && gameMatrix[1][2] == 1 && gameMatrix[2][2] == 1) {
    alert("1 WON THE GAME");
    window.location.reload();
  }
  if (gameMatrix[0][0] == 1 && gameMatrix[1][1] == 1 && gameMatrix[2][2] == 1) {
    alert("1 WON THE GAME");
    window.location.reload();
  }
};
