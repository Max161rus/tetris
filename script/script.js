// const canvas = document.querySelector('#field');

// const context = canvas.getContext('2d');

const wrapperGame = document.querySelector('.wrapper__game'); // получаем элемент - обертку игрового поля

const gameField = []; // create a game field (24 строки, в 2х верхних элемент появляется, в двух нижних исчезает нижняя часть элемента)

const figure = { // создание матриц элементов
  'I': [
    [0, 0, 1, 0],
    [0, 0, 1, 0],
    [0, 0, 1, 0],
    [0, 0, 1, 0]
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

function drawField() { // функция отрисовывает игровое поле
  for (let i = 0; i < 200; i++) {
    const element = document.createElement('div');
    element.classList.add('wrapper__game-cube');
    wrapperGame.appendChild(element);
  }
}

drawField();

function zerosInGameField() { // набивает матрицу игрового поля нулями
  for (let i = 0; i < 24; i++) {
    gameField[i] = [];
    for (let j = 0; j < 10; j++) {
      gameField[i][j] = 0;
    }
  }
}

zerosInGameField();

gameField[21] = [0, 0, 0, 0, 1, 0, 1, 1, 0, 0]
gameField[20] = [0, 0, 0, 0, 1, 0, 1, 1, 0, 0]
gameField[19] = [0, 0, 0, 0, 1, 0, 1, 1, 0, 0]
gameField[18] = [0, 0, 0, 0, 1, 0, 1, 1, 0, 0]
gameField[17] = [0, 0, 0, 0, 1, 0, 1, 1, 0, 0]
gameField[16] = [0, 0, 0, 0, 1, 0, 1, 1, 0, 0]
gameField[15] = [0, 0, 0, 0, 1, 0, 1, 1, 0, 0]
gameField[14] = [0, 0, 0, 0, 1, 0, 1, 1, 0, 0]


function drawElement(gameField) { // функция закрашивает цветом элементы соответствующие единицам в матрице gameField
  let x = 0;
  let y = 2;

  const arrElements = document.querySelectorAll('.wrapper__game-cube');
  for (let i = 0; i < arrElements.length; i++) {
    if (gameField[y][x] === 1) {
      arrElements[i].classList.add('index_1');
    } else {
      arrElements[i].classList.remove('index_1');
    }
    x++;
    if (x === 10) {
      x = 0;
      y++;
    }
  }
}

function writeGameField(matrix, rowDown) { // функция отрисовывает матрицу элемента в gameField  начиная с со строки rowDown
 // console.log(rowDown);
  let index;
  let row = rowDown;

  matrix.length === 4 ? index = 3 : index = 4;

  let col = index;

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      if((gameField[row][col] === 1) && (matrix[0][j] === 0) && (matrix[i] === matrix[0]) || 
      (gameField[row][col] === 1) && (matrix[1][j] === 0) && (matrix[i] === matrix[1])){
        gameField[row][col] = 0;
      }
      if (gameField[row][col] !== 1) {
        gameField[row][col] = matrix[i][j];
       } 
        col++;
    }
    col = index;
    row++;
  }
  clearTop(matrix, row, index);
}

function clearTop(matrix, rowGameField, col) { // очищаем область над элементом от единиц на спуске

  const linearArr = []; // создадим линейный массив

  linearArr.length = matrix.length;

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      if (matrix[i][j] === 1) {
        linearArr[j] = 1;
      }
    }
  }

  //console.log(linearArr);

  let counter = 0; // переменная ходит по массиву linearArr

  if (rowGameField - matrix.length !== 0) {
    for (let i = col; i < col + matrix.length; i++) {
      if (linearArr[counter] === 1) { // 
        gameField[rowGameField - matrix.length - 1][i] = 0;
      }
      counter++;
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
     // console.log(gameField)
      elementDown(200, figure.I);
    }
  }, speed)
};

elementDown(200, figure.I);


// writeGameField(figure.Z, 2)
// drawElement(gameField);
// console.log(gameField)


