const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const scoreElement = document.querySelector('.score');

let score = 0;
let pipePassed = false;

function jump() {

    if (mario.classList.contains('jump')) {
        return;
    }

    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 700);
}

document.addEventListener('keydown', jump);
document.addEventListener('touchstart', jump);


const loop = setInterval(() => {

    const pipePosition = pipe.getBoundingClientRect().left;
    const marioPosition = mario.getBoundingClientRect().bottom;

    // CONTADOR
    if (pipePosition < 0 && !pipePassed) {

        score++;

        scoreElement.innerText = `Tubos: ${score}`;

        pipePassed = true;
    }

    // Quando o tubo volta para o começo
    if (pipePosition > window.innerWidth) {
        pipePassed = false;
    }


    // COLISÃO
    if (
        pipePosition <= 120 &&
        pipePosition > 0 &&
        marioPosition > window.innerHeight - 100
    ) {

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';

        mario.src = './imagens/game-over.png';
        mario.style.width = '75px';

        clearInterval(loop);
    }

}, 10);