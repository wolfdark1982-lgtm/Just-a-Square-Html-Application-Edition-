const square = document.createElement('div');
square.style.width = '500px';
square.style.height = '500px';
square.style.backgroundColor = 'grey';
square.style.position = 'absolute';
document.body.appendChild(square);
let positionX = 0;
let positionY = 0;
const jumpHeight = 120; 
const jumpSpeed = 5;    
const speed = 10;
document.addEventListener('keydown', (event) => {
  if (event.key === 'a' || event.key === 'A') {
    positionX -= speed;
    square.style.left = positionX + 'px';
  } else if (event.key === 'd' || event.key === 'D') {
    positionX += speed;
    square.style.left = positionX + 'px';
  }
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowLeft' || event.key === 'A') {
    positionX -= speed;
    square.style.left = positionX + 'px';
  } else if (event.key === 'ArrowRight' || event.key === 'D') {
    positionX += speed;
    square.style.left = positionX + 'px';
  }
});
