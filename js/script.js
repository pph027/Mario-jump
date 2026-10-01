const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const scoreElement = document.querySelector('.score');

let score = 0;
let counted = false;


const jump = () => {

    if (mario.classList.contains('jump')) {
        return;
    }

    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 700);
};


document.addEventListener('keydown', jump);

document.addEventListener('touchstart', jump);


const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft;

    const marioPosition = +window
        .getComputedStyle(mario)
        .bottom
        .replace('px', '');

    if (pipePosition < 0 && !counted) {

        score++;

        scoreElement.innerText = `Tubos: ${score}`;

        counted = true;
    }


    if (pipePosition > 200) {
        counted = false;
    }


    if (
        pipePosition <= 120 &&
        pipePosition > 0 &&
        marioPosition < 80
    ) {

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';

        mario.src = './imagens/game-over.png';

        mario.style.width = '75px';
        mario.style.marginLeft = '50px';

        clearInterval(loop);
    }

}, 10);