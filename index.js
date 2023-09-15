let firstCard = 7 , secondCard = 3 ;
let sum = firstCard + secondCard ;
console.log(sum)
let hasBlackJack = false ;
let isAlive = true ;
let message = "" ;


function startGame(){
    if (sum < 21 ){
        message = "do you wanna draw a new Card n***😶"
       }
    
    if (sum === 21 ){
        message = "You lucky ni***  , ITs a BLACK JACK🥳 "
        hasBlackJack = true ;
        }
        
    if (sum > 21 ){
        message = "n**** your luck is fucked , just like my life 😭"
        isAlive = false ;
        }
        console.log(message); 
}



