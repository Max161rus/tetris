'use strict';

const gameField = document.querySelector('.wrapper__game');
const glassesField = document.querySelector('.wrapper__table');
let elTetrisWrapper; // element

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

    if (x === 10) {
      x = 0;
      y++;
    }

  }
}

gridForm(); 

function drawElement (random) {

  elTetrisWrapper = document.createElement('div');
  elTetrisWrapper.style.position = 'absolute';
  elTetrisWrapper.style.marginLeft = '150px';

  let color = Math.floor((Math.random() * 65535)).toString(16);

  const service = 6 - color.length; 

  for (let i = 0; i < service; i++){
    color = color + '0';
  }

  if (random === 1) { 
    elTetrisWrapper.style.display = 'grid';
    elTetrisWrapper.style.width = '200px';
    elTetrisWrapper.style.gridTemplateColumns = '1fr 1fr 1fr 1fr';
    
    for (let i = 0; i < 4; i++){ 
      const el = document.createElement('div');
      el.classList.add('wrapper__game-cube');
      el.classList.add(`id_${i + 1}`);
      el.style.backgroundColor = `#${color}`;
      elTetrisWrapper.appendChild(el);
    }
    gameField.appendChild(elTetrisWrapper);
  }

  if (random === 2) {
    elTetrisWrapper.style.display = 'grid';
    elTetrisWrapper.style.width = '100px';
    elTetrisWrapper.style.gridTemplateColumns = '1fr 1fr';
    
    for (let i = 0; i < 4; i++){ 
      const el = document.createElement('div');
      el.classList.add('wrapper__game-cube');
      el.classList.add(`id_${i + 1}`);
      el.style.backgroundColor = `#${color}`;
      elTetrisWrapper.appendChild(el);
    }
    gameField.appendChild(elTetrisWrapper);
  }

  if (random === 3) {
    elTetrisWrapper.style.display = 'grid';
    elTetrisWrapper.style.width = '150px';
    elTetrisWrapper.style.gridTemplateColumns = '1fr 1fr 1fr';
    
    for (let i = 0; i < 4; i++){ 
      const el = document.createElement('div');
      el.classList.add('wrapper__game-cube');
      el.classList.add(`id_${i + 1}`);
      el.style.backgroundColor = `#${color}`;
      elTetrisWrapper.appendChild(el);
    }
    gameField.appendChild(elTetrisWrapper);
  }

  if (random === 4) {
    elTetrisWrapper.style.display = 'grid';
    elTetrisWrapper.style.width = '150px';
    elTetrisWrapper.style.gridTemplateColumns = '1fr 1fr 1fr';
    
    for (let i = 0; i < 4; i++){ 
      const el = document.createElement('div');
      el.classList.add('wrapper__game-cube');
      el.classList.add(`id_${i + 1}`);
      el.style.backgroundColor = `#${color}`;
      elTetrisWrapper.appendChild(el);   
    }
    gameField.appendChild(elTetrisWrapper);
    document.querySelector('.id_4').style.gridColumn = '3';
  }

  if (random === 5) {
    elTetrisWrapper.style.display = 'grid';
    elTetrisWrapper.style.width = '150px';
    elTetrisWrapper.style.gridTemplateColumns = '1fr 1fr 1fr';
    
    for (let i = 0; i < 4; i++){ 
      const el = document.createElement('div');
      el.classList.add('wrapper__game-cube');
      el.classList.add(`id_${i + 1}`);
      el.style.backgroundColor = `#${color}`;
      elTetrisWrapper.appendChild(el);   
    }
    gameField.appendChild(elTetrisWrapper);
    document.querySelector('.id_4').style.gridColumn = '2';
  }
  
  if (random === 6) {
    elTetrisWrapper.style.display = 'grid';
    elTetrisWrapper.style.width = '150px';
    elTetrisWrapper.style.gridTemplateColumns = '1fr 1fr 1fr';
    
    for (let i = 0; i < 4; i++){ 
      const el = document.createElement('div');
      el.classList.add('wrapper__game-cube');
      el.classList.add(`id_${i + 1}`);
      el.style.backgroundColor = `#${color}`;
      elTetrisWrapper.appendChild(el);   
    }
    gameField.appendChild(elTetrisWrapper);
    document.querySelector('.id_3').style.gridColumn = '2';
  }

  if (random === 7) {
    elTetrisWrapper.style.display = 'grid';
    elTetrisWrapper.style.width = '150px';
    elTetrisWrapper.style.gridTemplateColumns = '1fr 1fr 1fr';
    
    for (let i = 0; i < 4; i++){ 
      const el = document.createElement('div');
      el.classList.add('wrapper__game-cube');
      el.classList.add(`id_${i + 1}`);
      el.style.backgroundColor = `#${color}`;
      elTetrisWrapper.appendChild(el);   
    }
    gameField.appendChild(elTetrisWrapper);
    document.querySelector('.id_1').style.gridColumn = '2';
  }

  down(1000);

}


// servise function

// let i = 0;

// setInterval(() => {
//   i++;
//   if (i === 8){
//     i = 1;
//   }
//   drawElement(i);
// setTimeout(() => {
//   elTetrisWrapper.remove();
// }, 1000);

// }, 2000);


drawElement(5);

function down (speed) {
  let margin = 0;
  const interval = setInterval(() => {
    margin = margin + 50;
    elTetrisWrapper.style.marginTop = `${margin}px`;
    if(margin === 900){
      clearInterval(interval);
      let random;
      while (1){
        random = Math.floor(Math.random() * 10);
        if(random >= 1 && random <= 7){
          break;
        }
      }
      console.log(random);
      drawElement(random);
    }
  }, speed)
}

