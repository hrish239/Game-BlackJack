
let cards = []
let sum = 0
let cardEl= document.getElementById("card-el")
let sumEl= document.getElementById("sum-el")
let massageEl = document.getElementById("massage-el")
let hasBlackjack= false
let isAlive= false
let massage = " "
let player = {
    name:"James",
    chips: 145
}
let playerEl = document.getElementById("player-el")
playerEl.textContent=player.name + " $"+ player.chips

function getRandomCard(){
   let randomNumber = Math.floor(Math.random()*13)+1
   if(randomNumber> 10){
    return 10
}
   else if (randomNumber===1){ 
    return 11
   }
   else {
    return randomNumber
   }
}
function startGame(){
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard,secondCard]
    sum = firstCard + secondCard

    renderGame()
}

function renderGame(){
    cardEl.textContent = "Card: "
    for( let i=0;i<cards.length;i++){
        cardEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum: " + sum
    if(sum <=20){
        massage = "Do you want to draw a new card?"
    }
    else if(sum===21){
        massage = "BlackJack!!!!"
        hasBlackjack = true
    }
    else if (sum>21)
    {
        massage = "You are out of game."
        isAlive = false
    }
    massageEl.textContent= massage;
}
function newCard(){
    if (isAlive ===true && hasBlackjack === false){
    let card= getRandomCard()
        sum += card
       cards.push(card)
        renderGame()
    }
    
}

