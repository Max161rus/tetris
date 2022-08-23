// const canvas = document.querySelector('#field');

// const context = canvas.getContext('2d');

const wrapperGame = document.querySelector('.wrapper__game');


function drawField () {
    for (let i = 0; i < 200; i++){
      const element = document.createElement('div');
      element.classList.add('wrapper__game-cube');
      wrapperGame.appendChild(element);
    }
}

drawField(); // отрисовали игровое поле

function drawElement (gameField) {
  let x = 0;
  let y = 2;

  const arrElements = document.querySelectorAll('.wrapper__game-cube');
  for (let i = 0; i < arrElements.length; i++){
    if(gameField[y][x] === 1){
      arrElements[i].classList.add('index_1');
    } else {
      arrElements[i].classList.remove('index_1');
    }
    x++;
    if (x === 10){
      x = 0;
      y++;
    } 
  }
}

const gameField = []; // create a game field (24 строки, в 2х верхних элемент появляется, в двух нижних исчезает нижняя часть элемента)

for (let i = 0; i < 24; i++) {
  gameField[i] = [];
  for (let j = 0; j < 10; j++) {
    gameField[i][j] = 0;
  }
}



const figure = {
  'I': [
    [0, 0, 0, 0],
    [1, 1, 1, 1],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
  ],
  'O': [
    [1, 1],
    [1, 1]
  ],
  'T': [
    [1, 1, 1],
    [0, 1, 0],
    [0, 0, 0]
  ],
  'L': [
    [0, 0, 1],
    [1, 1, 1],
    [0, 0, 0]
  ],
  'J': [
    [1, 0, 0],
    [1, 1, 1],
    [0, 0, 0]
  ],
  'Z': [
    [1, 1, 0],
    [0, 1, 1],
    [0, 0, 0]
  ],
  'S': [
    [0, 1, 1],
    [1, 1, 0],
    [0, 0, 0]
  ]
};

function writeGameField(matrix, rowDown) { // функция отрисовывает матрицу элемента в gameField  начиная с со строки rowDown
  console.log(rowDown);
  let index;
  let row = rowDown;

  matrix.length === 4 ? index = 3 : index = 4;

  let col = index;

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
        gameField[row][col] = matrix[i][j];
      col++;
    }
    col = index;
    row++;
  }
  clearTop(matrix, row, index);
}

function clearTop(matrix, rowGameField, col) { // очищаем область над элементом от единиц на спуске
  if (rowGameField - matrix.length !== 0) {
    for (let i = col; i < col + matrix.length; i++) {
      gameField[rowGameField - matrix.length - 1][i] = 0;
    }
  }
}

function elementDown(speed, matrix) { // функция движения элемента в низ с заданной скоростью
  let positionRow = 0;

  const timer = setInterval(() => {
    writeGameField(matrix, positionRow);
    drawElement(gameField);
    positionRow++;
    if (positionRow === 21) {
      clearInterval(timer);
      console.log(gameField)
      elementDown(200, figure.I);
    }
  }, speed)
};

elementDown(200, figure.L);


//writeGameField(figure.I, 20)

//console.log(gameField)
