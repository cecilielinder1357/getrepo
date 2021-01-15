
// This is where all the HTML code will be made. 
document.addEventListener('DOMContentLoaded',  () => {
  
// Creating card options with names with the variable
// "const", which is a var that behaves like let/var,
// but cannot be reassigned.
const cardArray = [
    {   
      // Making two of each card, since they're gonna match.
      // Here is fries.
      name: 'fries' ,
      img: 'images/fries.png'
    } , 
    {   
      // Here is the other card,
      name: 'fries' ,
      img: 'images/fries.png'
    } ,  
    {   
      // Cheeseburger nr 1
      name: 'cheeseburger' ,
      img: 'images/cheeseburger.png'
    } ,
    {   
      // Cheeseburger nr 2
      name: 'cheeseburger' ,
      img: 'images/cheeseburger.png'
    } ,
    {   
      // Hotdog nr 1
      name: 'hotdog' ,
      img: 'images/hotdog.png'
    } ,
    {   
      // Hotdog nr 2
      name: 'hotdog' ,
      img: 'images/hotdog.png'
    } ,
    {   
      // Ice-cream nr 1
      name: 'ice-cream' ,
      img: 'images/ice-cream.png'
    } ,
    {   
      // Ice-crem nr 2
      name: 'ice-cream' ,
      img: 'images/ice-cream.png'
    } ,
    {   
      // Milkshake nr 1
      name: 'milkshake' ,
      img: 'images/milkshake.png'
    } ,
    {   
      // Milkshake nr 2
      name: 'milkshake' ,
      img: 'images/milkshake.png'
    } ,
    {   
      // Pizza nr 1
      name: 'pizza' ,
      img: 'images/pizza.png'
    } ,
    {   
      // Pizza nr 2
      name: 'pizza' ,
      img: 'images/pizza.png'
    }
]

// To refresh the game with a new card positions to randomize the
// cardArray, sort and math.random are used.
cardArray.sort(() => 0.5 - Math.random())

// Picking up the class grid by the use of the 'querySelector' for 
// my HTML and define it as 'grid' for our Javascript.
// The querySelector method returns the first element that matches
// a specified CSS selector in the other documents 'style.html' 
// and 'index.html'.
const grid = document.querySelector('.grid')
// Making the user see the result.
const resultDisplay = document.querySelector('#result')
// Making an empty array/variable of cards chosen.
var cardsChosen= []
// Making an empty array/variable of the cards ID.
var cardsChosenId= []
// Making an empty array/variable for the two matching cards.
var cardsWon = []

// Creating the gameboard.

// Creating a loop for looping over the cardArray.
// Need to start at 0 to get all 12 cards.
function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        // for each card an image element is created, 
        // calling it 'createElement('img')'.
        var card = document.createElement('img')
        // For each card the 'setAttribute' is set
        // to link to the relative path image.
        // This method gets the value (images/blank)
        // of an attribute on the element (card).
        card.setAttribute('src', 'Images/blank.png')
        // Also setting a 'data-id" to loop over each one 
        // to give each one from 1-11, since there are 12
        // cards in the cardArray. 
        card.setAttribute('data-id', i)
        // Adding an eventlistener if the cards have
        // been clicked on and evoke a flipcard function.
        card.addEventListener('click' , flipCard)
        // The image elements (or cards) are going to be 
        // put into the div with the class name of 'grid' 
        // (in index.hmtl) using appendChild. 
        grid.appendChild(card)
    }
}

// To make the game work it needs matches and to flip cards.

// Check for matches.
function CheckForMatch() {
    // Picking out all the matches created in
    // the first function using the querySelectorAll() method, 
    // calling them cards. This method returns all elements in
    // the documkents that matches a specified CDD selector (cards).
    var cards = document.querySelectorAll('img') 
    // There are 2 values in the cardsChosen array as well as our
    // cardsChosen id array at this point. Let's use both the values
    // here and use them as constants, set to 0 to get the first
    // value in the array and to assign it to the constant option OneId.
    const optionOneId = cardsChosenId[0]
    // Do the same for the second value.
    const optionTwoId = cardsChosenId[1]
    console.log(optionOneId + " dette er id 1")
    console.log(optionTwoId + " dette er id 2")
    // Using the same logic, but for the cardsChosen, checking
    // that the first item in the array, deeply equals the second
    // item in the cardsChosen array.
    if (cardsChosen[0] === cardsChosen[1]) {
        // If the answer is true, an alert pops up.... 
        alert('You found a match!')
        // ... and assigning both cards to the white.png image style.
        cards[optionOneId].setAttribute('src', 'Images/white.png')
        cards[optionTwoId].setAttribute('src', 'Images/white.png')
        // Pushing the two matching cards to the empty array to
        // be stored.
        cardsWon.push(cardsChosen)
        // If the cards don't match, the cards will be flipped 
        // back over to be played again, giving players a blank png...
    }   else {
        cards[optionOneId].setAttribute('src', 'Images/blank.png')
        cards[optionTwoId].setAttribute('src', 'Images/blank.png')
        // ... with an alert.
        alert('Sorry, try again!')
    }
    // If either of these two things happen, the cardsChosen  and
    // cardsChosenId still will have to be cleared to play again.
    cardsChosen = []
    cardsChosenId = []
    // Writing this to the user by piciking up the span element
    // with the ID result of the HTML. This can be done by using text
    // content. It can be passed through exactly how many times it has
    // stored something in our cardsWon array, so one point for every
    // match
    resultDisplay.textContent = cardsWon.length
    // If the cards won deeply equal the length of our cardArray 
    // divided by 2, there are collected all the possible cards
    // in our cardArray...
    if (cardsWon.length === cardArray.length/2) {
        //.. this is alerted to the player by the browser.
        resultDisplay.textContent = 'Congratulations! You found found them all!'
    }
}

// Flip the card, creating the function.
function flipCard() {
    // Setting the variable of the data-id attribute
    // in the createBoard function above.
    var cardId = this.getAttribute('data-id')
    // The cards will be pushed from the cardArray
    // based on the card id. If the cardId is 4,
    // it will match the 5th card in the cardArray.
    // Once the card is located, the name will be fetched.
    cardsChosen.push(cardArray[cardId].name)
    // Then pushing the cardID in the separate empty 
    // array with just the ID.
    cardsChosen.push(cardId)
    // Because FlipCard is already in a function, 
    // technically a card is already picked, so this
    // setAttribute will add an image to that sqare
    // based on the cardId it holds.
    this.setAttribute('src', cardArray[cardId].img)
    // There have to be onlye 2 cards in the cardsChosen array,
    // so this if statement says that if the cards chosen 
    // array is equal to 2, it will not evoke the function
    // for CheckForMatch. 
    if (cardsChosen.length === 2 ) {
        // This setTimeout will give the function
        // some time so it doesn't happen too quickly,
        // checking for a match after exactly 500 milliseconds.
        setTimeout(CheckForMatch, 500)
    }
}

createBoard()

});