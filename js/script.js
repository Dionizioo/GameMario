const mario = document.querySelector('.mario'); // Cria a variável para o mario
const pipe = document.querySelector('.pipe'); // Cria a variável para o pipe
const startGame = document.querySelector('.start-game'); // Cria a variável para o start game
const scoreElement = document.querySelector('.score'); // Cria a variável para o score

const gameBoard = document.querySelector('.game-board'); // Cria a variável para o game board

let score = 0; // Cria a variável para o score

// Mudança de Cenario

const changeScenario = () => {
    // Exemplo: muda para uma cor diferente quando a pontuação atinge 10
    if (score >= 10) {
        gameBoard.style.background = 'linear-gradient(#ffcc00, #ff6600)';
    }
}



// Cria a função para o evento de clique
const jump = () => {
    mario.classList.add('jump'); // Adiciona a classe de pulo ao mario

    setTimeout(() => {
        mario.classList.remove('jump'); // Remove a classe de pulo ao mario após 500ms
    }, 500);
}

// Cria a função para o evento quando o mario encostar na pipe
const loop = setInterval(() => { 
    const pipePosition = pipe.offsetLeft; // Cria a variável para a posição do pipe
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', ''); // Cria a variável para a posição do mario e converte de string para number

    // Condição que verifica se o jogo acabou
    // Verifica se o mario está encostado na pipe
    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) { // Se a posição do pipe for menor ou igual a 120px e a altura do mario for menor a 80px
       
        pipe.style.animation = 'none'; // Remove a animação do pipe
        pipe.style.left = `${pipePosition}px`; // Mantém a posição do pipe na mesma posição

        mario.style.animation = 'none'; // Remove a animação do mario
        mario.style.bottom = `${marioPosition}px`; // Mantém a posição do mario na mesma posição

        mario.src = 'img/mario-dead.gif'; // Troca a imagem do mario para a imagem de morte
        mario.style.width = '100px'; // Diminui a largura do mario para 75px
        mario.style.marginLeft = '50px'; // Diminui a margem esquerda do mario para 50px

        startGame.src = 'img/gameover.png'; // Troca a imagem do start game para a imagem de game over

        clearInterval(loop); // Para o loop
        
        document.addEventListener('keydown', () => {
            location.reload(); // Recarrega a página
        });
    
    } else if (pipePosition <=180  && !mario.classList.contains('jump')){
        // Incrementa a pontuação apenas se o mario não estiver pulando e passou pelo pipe
        score++;
        scoreElement.textContent = `Score: ${score}`; // Atualiza o valor exibido na tela

        
    }
    
}, 10); // Cria a variável para o loop

// Adiciona o evento de clique ao mario
document.addEventListener('keydown', jump);
