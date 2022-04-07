// variaveis globais
let flippedCard = false;
let firstCard, secondCard;
let blockBoard = false;
let contadorJogadas = 0;
let totalNumberCards = Number(prompt("Digite o número de cartas"));
const stringCards = ['bobross','explody','fiesta','metal','revertit','triplets','unicorn']
window.onload = addCards()

//flipar cartas
function flipcard (element) {
    if(blockBoard === true) {
        return
    }
    if (element === firstCard){
        return
    }
    if (totalNumberCards !== document.querySelectorAll('.flip').length){
        if (flippedCard === false) {
            flippedCard  = true;
            firstCard = element;
            element.classList.add('flip')
            contadorJogadas++
        } else {
            flippedCard = false;
            secondCard = element;
            element.classList.add('flip')
            blockBoard=true
            checkMatch()
            contadorJogadas++ 
           
        } if(totalNumberCards === document.querySelectorAll('.flip').length){setTimeout(()=>{
            alert(`Você venceu em ${contadorJogadas}`)
            let restart = prompt('Gostaria de reiniciar a partida?')
            if (restart === 'sim'){
                totalNumberCards = Number(prompt("Digite o número de cartas"))
                console.log(totalNumberCards)
                addCards()
                contadorJogadas=0
            }
        },400) 
    }
}
}

function checkMatch (){
    
    if (firstCard.classList.value !== secondCard.classList.value){
        setTimeout(() => {
            firstCard.classList.remove('flip')
            secondCard.classList.remove('flip')
            blockBoard = false
        }, 1000);  
        
    }  else {setTimeout(() => {
        blockBoard = false
        
    }, 1000);}
    
}

function reset (){
    [flippedCard, block] = [false, false]
    [firstCard, secondCard] = [null,null]
}
function winGame(){
    
     
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
