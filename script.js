//Variáveis para os elementos HTML
let player1 = document.querySelector(".player--0");
let player2 = document.querySelector(".player--1");
let nameP1 = document.getElementById("name--0");
let scoreP1 = document.getElementById("score--0")
let currentP1 = document.getElementById("current--0");
let nameP2 = document.getElementById("name--1");
let scoreP2 = document.getElementById("score--1")
let currentP2 = document.getElementById("current--1");
let btnNew = document.getElementById("btn-NewGame");
let btnRoll = document.getElementById("btn-RollDice");
let btnHold = document.getElementById("btn-Hold");

let GameFinished = false; //Variável que verifica o termino do jogo

//Inicializando os placares com valor = 0
scoreP1.innerHTML = 0;
scoreP2.innerHTML = 0;
//Escondendo a imagem do dado no início
document.querySelector(".dice").classList.add('hidden');

//Evento de clique para o botão "NEW GAME"
btnNew.addEventListener('click', newGame);

function newGame() {

    document.querySelector(".dice").classList.add('hidden');
    scoreP1.innerHTML = 0;
    currentP1.innerHTML = 0;
    player1.classList.remove("player--winner");
    player1.classList.add("player--active");
    scoreP2.innerHTML = 0;
    currentP2.innerHTML = 0;
    player2.classList.remove("player--winner");
    player2.classList.remove("player--active");
    GameFinished = false;
}

//Evento de clique para o botão "ROLL DICE"
btnRoll.addEventListener('click', PlayRoll);

function PlayRoll() {

    if (GameFinished) return;

    let diceNumber = Math.trunc(Math.random() * 6) + 1;
    console.log(diceNumber);
    document.querySelector(".dice").classList.remove('hidden');
    document.getElementsByClassName("dice")[0].src = `./dice-${diceNumber}.png`;

    if (diceNumber === 1) {

        player1.classList.toggle("player--active");
        player2.classList.toggle("player--active");
        currentP1.innerHTML = 0;
        currentP2.innerHTML = 0;

    } else if (diceNumber > 1) {
        if (player1.classList.contains("player--active")) {
            currentP1.innerHTML = parseInt(currentP1.innerHTML) + parseInt(diceNumber);

        } else {
            currentP2.innerHTML = parseInt(currentP2.innerHTML) + parseInt(diceNumber);
        }
    }
}

//Evento de clique para o botão "HOLD"
btnHold.addEventListener('click', hold)

function hold() {

    if(GameFinished) return;

    if (player1.classList.contains("player--active")) {
        scoreP1.innerHTML = parseInt(scoreP1.innerHTML) + parseInt(currentP1.innerHTML);
        currentP1.innerHTML = 0;
        player1.classList.remove("player--active");
        player2.classList.add("player--active");
    }else{
        scoreP2.innerHTML = parseInt(scoreP2.innerHTML) + parseInt(currentP2.innerHTML);
        currentP2.innerHTML = 0;
        player2.classList.remove("player--active");
        player1.classList.add("player--active");
    }

    winner();
}

//Função que verifica o ganhador
function winner() {
    if (parseInt(scoreP1.innerHTML) >= 100)  {
        player1.classList.add("player--winner");
        console.log("winn");
        GameFinished = true;
    }else if (parseInt(scoreP2.innerHTML) >= 100){
        player2.classList.add("player--winner");
        console.log("winn");
        GameFinished = true;
    }
}