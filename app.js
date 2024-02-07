const result = document.getElementById("result");
const result2 = document.getElementById("result2");



function go(){
    let playerAnswerInput = document.getElementById("playerAnswer");
    let playerAnswer = playerAnswerInput.value.toLowerCase();

    if (playerAnswer !== "r" && playerAnswer !== "p" && playerAnswer !== "s") {
        
        alert("Please enter 'r', 'p', or 's' to choose rock paper or scissors!");
        playerAnswerInput.value = "";
        return;

        
    }
    const playerAns = document.getElementById("playerAns");

    if (playerAnswer === "r"){
    playerAns.innerText = "Rock";
    } else if (playerAnswer === "p"){
        playerAns.innerText = "Paper";
        }
    else {
        playerAns.innerText = "Scissors";
    }

    let computerResponseNum = getRandomInt(1, 3);
    let computerResponseLetter = document.getElementById("computerAns");
    

    
    


    if (computerResponseNum === 1){
         computerResponseLetter.innerText = "Rock"
         
    } else if (computerResponseNum === 2){
         computerResponseLetter.innerText = "Paper"
         
    } else {
         computerResponseLetter.innerText = "Scissors"
        
    }



    if (computerResponseLetter.innerText === playerAns.innerText){
        result.innerText = "DRAW!"
        result2.innerText = "Too bad | Type and SHOOT to play again..."
    }
    else if (computerResponseLetter.innerText === "Rock" && playerAns.innerText === "Scissors" || computerResponseLetter.innerText === "Paper" && playerAns.innerText === "Rock" || computerResponseLetter.innerText === "Scissors" && playerAnswer === "Paper") {
        result.innerText = "COMPUTER WINS :( "
        result2.innerText = "Sucker | Type and SHOOT to play again..."
    } else {
        result.innerText = "YOU WIN :) "
        result2.innerText = "Well done (you had a 33% chance) | Type and SHOOT to play again..."
    }

    playerAnswerInput.value = "";
    
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

