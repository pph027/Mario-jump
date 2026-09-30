<!DOCTYPE html>  <html lang="en">  
<head>  
    <meta charset="UTF-8">  
    <meta name="viewport" content="width=device-width, initial-scale=1.0">  <link rel="stylesheet" href="./css/style.css">  
<script src="./js/script.js" defer></script>  

<title>Mario Jump</title>

</head>  
<body>  <div class="game-board">  <img src="./imagens/clouds.png" class="clouds">  
<img src="./imagens/mario.gif" class="mario">  
<img src="./imagens/pipe.png" class="pipe">  </div>  </body>  
</html>  o de cima é o HTML

const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

const jump = () => {

if (mario.classList.contains('jump')) {  
    return;  
}  

mario.classList.add('jump');  

setTimeout(() => {  
    mario.classList.remove('jump');  
}, 500);

}

const loop = setInterval(() => {

console.log('loop')  

const pipePosition = pipe.offsetLeft;  
const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');  

console.log(marioPosition);  
  
if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {  

    pipe.style.animation = 'none';  
    pipe.style.left = ${pipePosition}px;  

    mario.style.animation = 'none';  
    mario.style.left = ${marioPosition}px;  

    mario.src = './imagens/game-over.png';  
    mario.style.width = '75px'  
    mario.style.marginLeft = '50px'  

    clearInterval(loop);  

}

}, 10);

document.addEventListener('keydown', jump);