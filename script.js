let buttons = document.getElementById("buttons");
let userChoice = document.getElementById("user-choice");
let computerChoice = document.getElementById("computer-choice");
let winner = document.getElementById("winner");
let reset = document.getElementById("reset");
let usercount = document.getElementById("user-count");
let computercount = document.getElementById("computer-count");


let userScore =0;
let computerScore=0;
let clickcount =0;


buttons.addEventListener("click",function(event){
  let userSelection;
  let userDisplayText;
  let target=event.target;
  if(target.tagName !== "BUTTON")
    return
   userSelection = target.id;
  userDisplayText = target.innerText;
  
  clickcount++
  
    userChoice.innerText =` Your Choice :  ${userDisplayText}`;
  
  
  let computerSelection;
  let computerDisplayText;
  if(clickcount%10===0){
    computerSelection=userSelection;
    computerDisplayText = userDisplayText;
  }else{
    let allButtons = Array.from(document.querySelectorAll("#buttons button"));
    const randomButton = allButtons[Math.floor(Math.random()*allButtons.length)];
     computerSelection = randomButton.id;
     computerDisplayText = randomButton.innerText;
  }
  computerChoice.innerText=` Computer Choice :  ${computerDisplayText}`



if(userSelection === computerSelection){
  winner.innerText ="ITS A TIE !"
  winner.style.backgroundColor ="grey"
}else if((userSelection === "rock"&& computerSelection ==="scissor") ||
(userSelection === "paper" && computerSelection === "rock")||
(userSelection ==="scissor"&& computerSelection==="paper")){
  winner.innerText ='you win!'
  winner.style.backgroundColor="rgb(31, 196, 59)"
  userScore++
  usercount.innerText =`You: ${userScore}`
}else{
  winner.innerText="computer wins !"
  winner.style.backgroundColor="rgb(237, 91, 65)"
  computerScore++
  computercount.innerText =`Computer : ${computerScore}`
}


})

reset.addEventListener("click",function(){
  userScore =0;
  computerScore=0;
  clickcount =0;
  computercount.innerText ="computer:0"
  usercount.innerText ="user :0"
  userChoice.innerText = "Your choice:";
  computerChoice.innerText = "Computer choice:";
  winner.innerText = "Choose an option to start!";
 winner.style.backgroundColor = "transparent";

})

