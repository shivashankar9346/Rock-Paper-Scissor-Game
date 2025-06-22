let buttons = document.getElementById("buttons");
let userChoice = document.getElementById("user-choice");
let computerChoice = document.getElementById("computer-choice");
let winner = document.getElementById("winner");
let reset = document.getElementById("reset");
let usercount = document.getElementById("user-count");
let computercount = document.getElementById("computer-count");

let userScore = 0;
let computerScore = 0;
let clickCount = 0;


buttons.addEventListener("click", function (event) {
  const target = event.target;
  if (target.tagName !== "BUTTON") return;

  const userSelection = target.id;  
  const userDisplayText = target.innerText; 
  clickCount++;


  let computerSelection;
  if (clickCount % 10 === 0) {
    computerSelection = userSelection; 
  } else {
    const choices = ["rock", "paper", "scissor"];
    computerSelection = choices[Math.floor(Math.random() * 3)];
  }
  const computerDisplayText = document.getElementById(computerSelection).innerText;



  userChoice.innerText = `Your choice: ${userDisplayText}`;
  computerChoice.innerText = `Computer choice: ${computerDisplayText}`;

 
  if (userSelection === computerSelection) {
    winner.innerText = "It's a tie!";
    winner.style.backgroundColor ="grey"
  } else if (
    (userSelection === "rock" && computerSelection === "scissor") ||
    (userSelection === "paper" && computerSelection === "rock") ||
    (userSelection === "scissor" && computerSelection === "paper")
  ) {
    winner.innerText = "You win! 🎉";
    winner.style.backgroundColor="rgb(31, 196, 59)"
    userScore++;
    usercount.innerText = `you: ${userScore}`;
  } else {
    winner.innerText = "Computer wins!";
    winner.style.backgroundColor="rgb(237, 91, 65)"
    computerScore++;
    computercount.innerText = `computer: ${computerScore}`;
  }
});


reset.addEventListener("click", function () {
  userScore = 0;
  computerScore = 0;
  clickCount = 0;
  usercount.innerText = "you: 0";
  computercount.innerText = "computer: 0";
  userChoice.innerText = "Your choice:";
  computerChoice.innerText = "Computer choice:";
  winner.innerText = "Choose an option to start!";
 winner.style.backgroundColor = "transparent";
});
