let player ={
    name : "Kwesi",
    chips: 200
}
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")


let playerEL = document.getElementById("info")
playerEL.textContent = player.name + ": $ " + player.chips

function RandomCard(){
    
    let Anumber = Math.floor( Math.random()*13) +1
    if (Anumber > 10){
        return 10        
    }else if (Anumber === 1){
        return 11
    }else{
        return Anumber
    }
}

function startGame() {
    isAlive = true
    let firstCard = RandomCard()
    let secondCard = RandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    playGame()
    
     
}

function playGame(){
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i ++){
        cardsEl.textContent += cards[i] + "- "
    }


    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}


function newCard() {
    if (isAlive === true && hasBlackJack === false){
        let card = RandomCard()
        sum += card
        cards.push(card)
        playGame()
    }
    
}
