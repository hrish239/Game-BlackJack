
let cards = []
let card = getRandomCard()
let sum = 0
let cardEl= document.getElementById("card-el")
let sumEl= document.getElementById("sum-el")
let massageEL = document.getElementById("massage-el")
let hasBlackjack= false
let isAlive= false
let massage = " "

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
    for(i=0;i<cards.length;i++){
        cardEl.textContent += card[i] + " "
    }
    sumEl.textContent = "Sum: " + sum
    if(sum <=20){
        massage = "Do you want to draw a new card?"
    }
    else if(sum===21){
        massage = "BlackJack!!!!"
    }
    else(sum>21)
    {
        massage = "You are out of game."
        isAlive = false
    }
    massageEL.textContent= massage;
}
function newCard(){
    sum += card
    PushManager.cards(card)
    renderGame()
}

