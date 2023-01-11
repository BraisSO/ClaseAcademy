let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

let aleatorio = Math.floor(Math.random() * 9 + 1);

function compareGuesess(human, machine, number) {
  if (human < number) {
    var diferenciaH = number - human;
  }

  if (human > number) {
    var diferenciaH = human - number;
  }

  if (machine < number) {
    var diferenciaM = number - machine;
  }

  if (human > number) {
    var diferenciaM = human - machine;
  }

  if (human === number || diferenciaH < diferenciaM || diferenciaH ===      diferenciaM) {
    return true;
  } else {
    return false;
  }
  };

  function updateScore(winner) {
    if (winner === "human") {
      humanScore++;
    }

    else if (winner === "computer") {
      computerScore++;

    } else {
      console.log("Not a valid winner");
    }
  }

 function advanceRound(){
   currentRoundNumber++; 
 }

