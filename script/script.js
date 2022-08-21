'use strict';

const gameField = document.querySelector('.wrapper__game');

console.log(gameField);

// grid formation

function gridForm() {
  let x = 0; // abscissa
  let y = 0; // ordinate
  for (let i = 0; i < 200; i++) {
    const fieldCube = document.createElement('div');
    fieldCube.classList.add('wrapper__game-cube');
    fieldCube.classList.add(`x=${x}__y=${y}`);
    gameField.appendChild(fieldCube);
    x++;
    if(i === 9){
      x = 0;
      y++;
    }
  }
}

gridForm();

//work a home