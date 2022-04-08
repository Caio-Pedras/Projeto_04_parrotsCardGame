// variaveis globais
let flippedCard = false;
let firstCard, secondCard;
let blockBoard = false;
let contadorJogadas = 0;
let totalNumberCards = Number(prompt("Digite o número de cartas"));
const stringCards = ['bobross','explody','fiesta','metal','revertit','triplets','unicorn']
let blockTimer = false
let timer = Number(document.querySelector('p').innerHTML)
let clock;
addCards()

function flipcard (element) {
    if(blockBoard === true) {
        return
    }  
    timerStart()
        if (flippedCard === false) {
            flippedCard  = true;
            firstCard = element;
            flipPlay(element)

        } else {
            flippedCard = false;
            secondCard = element;
            flipPlay(element)
            blockBoard=true
            checkMatch()
        } if(totalNumberCards === document.querySelectorAll('.flip').length){
            setTimeout(winGame,400) 
        }
    }
function flipPlay(selectedCard){
    selectedCard.classList.add('flip')
    contadorJogadas++ 
}

function checkMatch (){
    if (firstCard.classList.value !== secondCard.classList.value){
        setTimeout(unflipCards, 1000);  
        
    }  else {setTimeout(blockBoard=false, 1000)      
    }
}
function unflipCards(){
        firstCard.classList.remove('flip')
        secondCard.classList.remove('flip')
        blockBoard = false 
}


function winGame () {
        alert(`Você venceu em ${contadorJogadas} jogadas e em ${timer} segundos`)
        let restart = prompt('Gostaria de reiniciar a partida?')
        if (restart === 'sim'){
            reset ()
        }
}

function reset (){
    totalNumberCards = Number(prompt("Digite o número de cartas"))
    contadorJogadas=0
    document.querySelector('p').innerHTML = 0
    blockTimer = false
    addCards()
}

function addCards() {

    if (totalNumberCards>= 4 && totalNumberCards <= 14 && totalNumberCards%2 === 0){
        let gameBoard = document.querySelector(".gameboard")
        gameBoard.innerHTML =[]
        
        for (let i = 0; i < totalNumberCards/2; i++){
            let cardLayout =`<div class="card ${stringCards[i]}" onclick="flipcard(this)">
            <div class="frontFace">
                <img src="./Imagens/front.png" >
            </div>
            <div class="backFace">
                <img src="./Imagens/${stringCards[i]}parrot.gif">
            </div>
        </div>`
            gameBoard.innerHTML += cardLayout + cardLayout
        }        
    } else {
        totalNumberCards = Number(prompt("Digite o número de cartas"))
        addCards()  
    }
        shufle(totalNumberCards)
}

//embaralahar cartas
function shufle(number){
    let cards = document.querySelectorAll('.card')
    cards.forEach(card => {
        let randomPos = Math.floor(Math.random()*number) 
        card.style.order = randomPos;
    });
}

function timerStart(){
    if(blockTimer === false){
        blockTimer = true
        clock = setInterval(timerPlus, 1000)
    } else return
}
   
function timerPlus (){   
    timer = Number(document.querySelector('p').innerHTML)
    timer ++;
    document.querySelector('p').innerHTML = timer
    if (totalNumberCards === document.querySelectorAll('.flip').length){
    clearInterval(clock)
    } 
}