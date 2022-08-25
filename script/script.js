
const wrapperGame = document.querySelector('.wrapper__game'); // получаем элемент - обертку игрового поля

const gameField = []; // create a game field (24 строки, в 2х верхних элемент появляется, в двух нижних исчезает нижняя часть элемента)

const figure = { // создание матриц элементов
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
      if (i > 21) {
        gameField[i][j] = 1;
      } else {
        gameField[i][j] = 0;
      }
    }
  }
}

zerosInGameField();

function apdateGameField() { // обновляем поле gameField, удаляем с него те элементы, которые не имеют под собой единицы
  for (let row = 21; row > 0; row--) {
    for (let col = 0; col < gameField[0].length; col++) {
      if (gameField[row][col] === 1 && gameField[row + 1][col] === 1) {
        gameField[row][col] = 1;
      } else {
        gameField[row][col] = 0;
      }
    }
  }
}

let boolean = 1;

  function chekUnitsDown() {
    for (let row = 0; row < gameField.length - 1; row++) {
      for (let col = 0; col < gameField[0].length; col++) {
        if (gameField[row][col] === 1 && gameField[row + 1][col] === 0) {
          boolean = 0;
          return;
        }
      }
    }
  }

  // gameField[14] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  // gameField[15] = [1, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  // gameField[16] = [1, 0, 0, 0, 0, 0, 0, 0, 0, 1]
  // gameField[17] = [1, 0, 0, 0, 0, 0, 0, 0, 0, 1]
  // gameField[18] = [1, 0, 0, 0, 0, 0, 0, 0, 0, 1]
  // gameField[19] = [1, 0, 0, 0, 0, 0, 0, 0, 0, 1]
  // gameField[20] = [1, 0, 0, 1, 1, 1, 1, 0, 0, 1]
  // gameField[21] = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]

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

    let index;
    let row = rowDown;

    matrix.length === 4 ? index = 3 : index = 4;

    let col = index;

    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix.length; j++) {
        if (gameField[row][col] !== 1) {
          gameField[row][col] = matrix[i][j];
        }
        col++;
      }
      col = index;
      row++;
    }
    //clearTop(matrix, row, index);
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
      boolean = 1;
      chekUnitsDown();
      console.log(boolean);
      apdateGameField();
      positionRow++;
      if (boolean === 1) {
        clearInterval(timer);
        elementDown(100, figure.L);
      }
    }, speed)
  };

  elementDown(100, figure.I);


//  writeGameField(figure.I, 20);
//  drawElement(gameField);
//  chekUnitsDown()
//  apdateGameField();
//  console.log(boolean)
//console.log(gameField);
//console.log(chekUnitsDown());

