const result = document.getElementById("result");



function go(){
    let playerAnswerInput = document.getElementById("playerAnswer");
    let playerAnswer = playerAnswerInput.value.toLowerCase();

    if (playerAnswer !== "r" && playerAnswer !== "p" && playerAnswer !== "s") {
        
        alert("Please enter 'r', 'p', or 's' to choose rock paper or scissors!");
        playerAnswerInput.value = "";
        return;

        
    }
    const playerAns = document.getElementById("playerAns");
    playerAns.innerText = playerAnswer;

    let computerResponseNum = getRandomInt(1, 3);
    let computerResponseLetter = document.getElementById("computerAns");
    

    
    


    if (computerResponseNum === 1){
         computerResponseLetter.innerText = "r"
         
    } else if (computerResponseNum === 2){
         computerResponseLetter.innerText = "p"
         
    } else {
         computerResponseLetter.innerText = "s"
        
    }



    if (computerResponseLetter.innerText === playerAnswer){
        result.innerText = "DRAW!"
    }
    else if (computerResponseLetter.innerText === "r" && playerAnswer === "s" || computerResponseLetter.innerText === "p" && playerAnswer === "r" || computerResponseLetter.innerText === "s" && playerAnswer === "p") {
        result.innerText = "COMPUTER WINS :( "
    } else {
        result.innerText = "YOU WIN :) "
    }

    playerAnswerInput.value = "";
    
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

