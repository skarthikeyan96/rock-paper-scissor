let paper = document.getElementById("main-board__paper");
let rock = document.getElementById("main-board__rock");
let scissor = document.getElementById("main-board__scissor");
let score = document.getElementById("final-score");
let options = ["rock", "paper", "scissor"];
let computerChoiceElt = document.getElementById("computer-choice");
let playAgain = document.getElementById("play-again");
let currentPlayerChoice = "";
const finalText = document.getElementById('final-text')
const playerChoiceElt = document.getElementById("player-choice");
const paperSvg = paper.getElementsByTagName("svg")[0];
const rockSvg = rock.getElementsByTagName("svg")[0];
const scissorSvg = scissor.getElementsByTagName("svg")[0];



const computerPlay = (choice) => {
  switch (choice) {
    case 0:
      return rockSvg;
    case 1:
      return paperSvg;
    case 2:
      return scissorSvg;
  }
};

const calculateScore = (playerChoice, computerChoice) => {
  const scoreNumber = parseInt(score.innerText);
  if (playerChoice === "paper" && computerChoice === "rock") {
    return {
        scoreValue: scoreNumber + 1,
        text: "YOU WIN"
    }
  }
  if (playerChoice === "paper" && computerChoice === "paper")
    return {
        scoreValue: scoreNumber,
        text: "TIED"
    }
  if (playerChoice === "paper" && computerChoice === "scissor") {
    return {
        scoreValue: scoreNumber - 1,
        text: "YOU LOSE"
    };
  }

  if (playerChoice === "rock" && computerChoice === "rock") return {
    scoreValue: scoreNumber,
    text: "TIED"
}
  if (playerChoice === "rock" && computerChoice === "paper") {
    return {
        scoreValue: scoreNumber - 1,
        text: "YOU LOSE"
    };
  }
  if (playerChoice === "rock" && computerChoice === "scissor") {
    return {
        scoreValue: scoreNumber + 1,
        text: "YOU WIN"
    }
  }

  if (playerChoice === "scissor" && computerChoice === "rock") {
    return {
        scoreValue: scoreNumber - 1,
        text: "YOU LOSE"
    };
  }
  if (playerChoice === "scissor" && computerChoice === "paper") {
    return {
        scoreValue: scoreNumber + 1,
        text: "YOU WIN"
    }
  }
  if (playerChoice === "scissor" && computerChoice === "scissor")
  return {
    scoreValue: scoreNumber,
    text: "TIED"
}
};

const handleAfterPaperClick = () => {
  currentPlayerChoice = paper; // store html elemnt
  // remove other two options
  paper.style.display = "none";
  rock.style.display = "none";
  scissor.style.display = "none";

  // randomly chose another value
  const computerChoice = Math.floor(Math.random() * 3);
  const choice = computerPlay(computerChoice);

  // render the player choice
  playerChoiceElt.appendChild(
    currentPlayerChoice.getElementsByTagName("svg")[0].cloneNode(true)
  );
  // render the computer choice
  computerChoiceElt.appendChild(choice.cloneNode(true));

  computerChoiceElt.style.display = "block";
  playerChoiceElt.style.display = "block";

  // calculate the score

  const {scoreValue, text} = calculateScore("paper", options[computerChoice]);

  //  const finalScore = parseInt(`${parseInt(score)}${(scoreValue)}`);
  score.innerText = scoreValue;
  finalText.innerText = text
  // show the play again button
  playAgain.style.display = "block";
  playerChoiceElt.style.pointerEvents = "none";
  computerChoiceElt.style.pointerEvents = "none";
};

const handleAfterPlayAgainClick = () => {
  rock.style.display = "block";
  scissor.style.display = "block";
  paper.style.display = "block";
  currentPlayerChoice.style.pointerEvents = "auto";
  computerChoiceElt.style.display = "none";
  playerChoiceElt.style.display = "none"
  playAgain.style.display = "none";
  computerChoiceElt.innerHTML = `<p id="computer-choice-text"> THE HOUSE PICKED </p>`;
  playerChoiceElt.innerHTML = ` <p id="player-choice-text"> YOU PICKED </p>`;
};

const handleAfterRockClick = () => {
  currentPlayerChoice = rock; // store html elemnt
  // remove other two options
  paper.style.display = "none";
  scissor.style.display = "none";
  rock.style.display = "none"

  // randomly chose another value
  const computerChoice = Math.floor(Math.random() * 3);
  const choice = computerPlay(computerChoice);

   // render the player choice
   playerChoiceElt.appendChild(
    currentPlayerChoice.getElementsByTagName("svg")[0].cloneNode(true)
  );
  // render the computer choice
  computerChoiceElt.appendChild(choice.cloneNode(true));

  computerChoiceElt.style.display = "block";
  playerChoiceElt.style.display = "block";

  // calculate the score

  const {scoreValue, text} = calculateScore("rock", options[computerChoice]);

  score.innerText = scoreValue;
  finalText.innerText = text

  // show the play again button
  playAgain.style.display = "block";
  playerChoiceElt.style.pointerEvents = "none";
  computerChoiceElt.style.pointerEvents = "none";

};

const handleAfterScissorClick = () => {
  currentPlayerChoice = scissor; // store html elemnt
  paper.style.display = "none";
  rock.style.display = "none";
  scissor.style.display = "none"

  // randomly chose another value
  const computerChoice = Math.floor(Math.random() * 3);
  const choice = computerPlay(computerChoice);

  // render the player choice
  playerChoiceElt.appendChild(
    currentPlayerChoice.getElementsByTagName("svg")[0].cloneNode(true)
  );
  // render the computer choice
  computerChoiceElt.appendChild(choice.cloneNode(true));

  computerChoiceElt.style.display = "block";
  playerChoiceElt.style.display = "block";



  // calculate the score

  const {scoreValue, text} = calculateScore("scissor", options[computerChoice]);

  //  const finalScore = parseInt(`${parseInt(score)}${(scoreValue)}`);
  score.innerText = scoreValue;
  finalText.innerText = text

  // show the play again button
  playAgain.style.display = "block";
  playerChoiceElt.style.pointerEvents = "none";
  computerChoiceElt.style.pointerEvents = "none";

  console.log(scoreValue);
};

paper.addEventListener("click", handleAfterPaperClick);
rock.addEventListener("click", handleAfterRockClick);
scissor.addEventListener("click", handleAfterScissorClick);

playAgain.addEventListener("click", handleAfterPlayAgainClick);
