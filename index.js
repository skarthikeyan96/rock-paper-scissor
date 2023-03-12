let paper = document.getElementById("main-board__paper");
let rock = document.getElementById("main-board__rock");
let scissor = document.getElementById("main-board__scissor");
let score = document.getElementById('final-score')
let options = ["rock", "paper", "scissor"];
let computerChoiceElt = document.getElementById('computer-choice')
let playAgain = document.getElementById('play-again')
let currentPlayerChoice = "";

const paperSvg = paper.getElementsByTagName('svg')[0]
const rockSvg = rock.getElementsByTagName('svg')[0]
const scissorSvg = scissor.getElementsByTagName('svg')[0]


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

    const scoreNumber = parseInt(score.innerText)
    if(playerChoice === "paper" && computerChoice === "rock") {
        alert("YOU WIN") 
        return scoreNumber + 1
    }
    if(playerChoice === "paper" && computerChoice === "paper") return scoreNumber
    if(playerChoice === "paper" && computerChoice === "scissor")  {
        alert("YOU LOSE") 
        return scoreNumber - 1
    }


    if(playerChoice === "rock" && computerChoice === "rock") return scoreNumber 
    if(playerChoice === "rock" && computerChoice === "paper") {
        alert("YOU LOSE") 
        return scoreNumber - 1
    }
    if(playerChoice === "rock" && computerChoice === "scissor") {
        alert("YOU WIN") 
        return scoreNumber + 1
    }



    if(playerChoice === "scissor" && computerChoice === "rock")  {
        alert("YOU LOSE") 
        return scoreNumber - 1
    }
    if(playerChoice === "scissor" && computerChoice === "paper"){
        alert("YOU WIN") 
        return scoreNumber + 1
    }
    if(playerChoice === "scissor" && computerChoice === "scissor") return scoreNumber 

}


const handleAfterPaperClick = () => {
  console.log("clicked on paper");
  currentPlayerChoice = paper // store html elemnt
  // remove other two options
  rock.style.display = "none";
  scissor.style.display = "none";

  // randomly chose another value
  const computerChoice = Math.floor(Math.random() * 3);
  const choice = computerPlay(computerChoice);

  // render the computer choice
  computerChoiceElt.appendChild(choice.cloneNode(true))

  computerChoiceElt.style.display = "block"
 console.log(computerChoice)

//  choice.style.display = "block"

 // calculate the score

 const scoreValue = calculateScore("paper", options[computerChoice]);


//  const finalScore = parseInt(`${parseInt(score)}${(scoreValue)}`);
score.innerText = scoreValue
// show the play again button
playAgain.style.display = "block"
currentPlayerChoice.style.pointerEvents= "none";
computerChoiceElt.style.pointerEvents= "none";
 console.log(scoreValue)
};

const handleAfterPlayAgainClick = () => {
    rock.style.display = "block";
    scissor.style.display = "block";
    paper.style.display = "block"
    currentPlayerChoice.style.pointerEvents= "auto";
    computerChoiceElt.style.display = "none"
    playAgain.style.display = "none"
    computerChoiceElt.innerHTML = ""
}

const handleAfterRockClick = () => {
    console.log("clicked on rock");
  currentPlayerChoice = rock // store html elemnt
  // remove other two options
  paper.style.display = "none";
  scissor.style.display = "none";

  // randomly chose another value
  const computerChoice = Math.floor(Math.random() * 3);
  const choice = computerPlay(computerChoice);

  // render the computer choice
  computerChoiceElt.appendChild(choice.cloneNode(true))

  computerChoiceElt.style.display = "block"
 console.log(computerChoice)

//  choice.style.display = "block"

 // calculate the score

 const scoreValue = calculateScore("rock", options[computerChoice]);


//  const finalScore = parseInt(`${parseInt(score)}${(scoreValue)}`);
score.innerText = scoreValue
// show the play again button
playAgain.style.display = "block"
currentPlayerChoice.style.pointerEvents= "none";

 console.log(scoreValue)
}

const handleAfterScissorClick = () => {
    console.log("clicked on rock");
  currentPlayerChoice = scissor // store html elemnt
  // remove other two options
  paper.style.display = "none";
  rock.style.display = "none";

  // randomly chose another value
  const computerChoice = Math.floor(Math.random() * 3);
  const choice = computerPlay(computerChoice);

  // render the computer choice
  computerChoiceElt.appendChild(choice.cloneNode(true))

  computerChoiceElt.style.display = "block"
 console.log(computerChoice)

//  choice.style.display = "block"

 // calculate the score

 const scoreValue = calculateScore("scissor", options[computerChoice]);


//  const finalScore = parseInt(`${parseInt(score)}${(scoreValue)}`);
score.innerText = scoreValue
// show the play again button
playAgain.style.display = "block"
currentPlayerChoice.style.pointerEvents= "none";

 console.log(scoreValue)
}
 
paper.addEventListener("click", handleAfterPaperClick);
rock.addEventListener("click", handleAfterRockClick);
scissor.addEventListener("click", handleAfterScissorClick);

playAgain.addEventListener('click', handleAfterPlayAgainClick)