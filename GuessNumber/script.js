const form = document.querySelector("form")

let randomNum =  parseInt(Math.random()*100 +1)
let guessedNum = document.querySelector(".input-box")
let submitButton = document.querySelector(".button")
let prevGuess = document.querySelector(".previousGuess")
let remainGuess = document.querySelector(".remainingGuess")
let guessHint = document.querySelector(".hint")
let ansReveal = document.createElement("div")
let display = document.createElement("p")

let previousGuesses = [];
let userAttempts = 0



submitButton.addEventListener("click" , function(e){
    e.preventDefault()
    let guess = parseInt(guessedNum.value)
    
    if(validateGuess(guess) && checkAttempts(userAttempts)){
        
       if(checkGuess(guess)){
           display.innerHTML = `You have the right guess ${guess}. You won`
           document.querySelector(".result").appendChild(display)
       }else{
           display.innerHTML = `Wrong guess lad`
           document.querySelector(".result").appendChild(display)
           resetGuess(guess)
           
       }
    } 
})

validateGuess =(guess) =>{
     if(isNaN(guess) || guess < 0 ){
        return false;
     }
     return true;
}

checkAttempts= (userAttempts)=>{
    if(userAttempts == 10){
        alert("Game Over! Try again next time")
        endGame()
    }else {
        return true
    }
}

checkGuess = (guess) =>{
    if(guess == randomNum){
        return true;
    }else if(guess > randomNum){
        displayMessage("hint: Your Guess  exceeds the random number")
    }else if(guess < randomNum){
        displayMessage("hint: Your Guess is lower than the random number ")
    }else{
        return false
    }
}


displayMessage = (message) =>{
    const msg = document.createElement("p")
    msg.innerHTML = `${message}`
    document.body.append(msg)
}


resetGuess =(guess) =>{
   guessedNum.value =""
   userAttempts++
   remainGuess.innerHTML = `${10 - userAttempts}`

}