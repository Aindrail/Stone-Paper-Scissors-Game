const handOptions = {
  "rock": "assets/Rock.png",
  "paper": "assets/Paper.png",
  "scissors": "assets/Scissors.png"
} 
//Dictionary Object

let SCORE = 0;
let CompSCORE=0;
//=> is the new way to write function
const pickUserHand = (hand) => {
  //hide current div
  let hands = document.querySelector(".hands");
  hands.style.display = "none";
//show next page
  let contest = document.querySelector(".contest");
  contest.style.display = "flex";

  // set user Image
  document.getElementById("userPickImage").src = handOptions[hand];

  pickComputerHand(hand);
};

const pickComputerHand = (hand) => {
    let hands = ["rock", "paper", "scissors"];
    let cpHand = hands[Math.floor(Math.random() * hands.length)];
    
    // set computer image 
    document.getElementById("computerPickImage").src = handOptions[cpHand]
    
    referee(hand, cpHand);
};

const referee = (userHand, cpHand) => {
  if (userHand == "paper" && cpHand == "scissors") {
    setDecision("YOU LOSE!");
    setCompScore(CompSCORE + 1);
  }
  if (userHand == "paper" && cpHand == "rock") {
    setDecision("YOU WIN!");
    setScore(SCORE + 1);
  }
  if (userHand == "paper" && cpHand == "paper") {
    setDecision("It's a tie!");
  }
  if (userHand == "rock" && cpHand == "scissors") {
    setDecision("YOU WIN!");
    setScore(SCORE + 1);
  }
  if (userHand == "rock" && cpHand == "paper") {
    setDecision("YOU LOSE!");
    setCompScore(CompSCORE + 1);
  }
  if (userHand == "rock" && cpHand == "rock") {
    setDecision("It's a tie!");
  }
  if (userHand == "scissors" && cpHand == "scissors") {
    setDecision("It's a tie!");
  }
  if (userHand == "scissors" && cpHand == "rock") {
    setDecision("YOU LOSE!");
    setCompScore(CompSCORE + 1);
  }
  if (userHand == "scissors" && cpHand == "paper") {
    setDecision("YOU WIN!");
    setScore(SCORE + 1);
  }
};

const restartGame = () => {
  //hide contest and unhide hands(main page)
  let contest = document.querySelector(".contest");
  contest.style.display = "none";
//unhide hands
  let hands = document.querySelector(".hands");
  hands.style.display = "flex";
}

const setDecision = (decision) => {
  document.querySelector(".decision h1").innerText = decision;
  // document.querySelector(".decision h1").style.textShadow = "0 0 30px #ff0000" ;


  if(decision == "YOU LOSE!"){
 
    document.querySelector(".decision h1").style.textShadow = "0 0 15px #ff0000" ;
  }
  if(decision == "YOU WIN!"){
  
    document.querySelector(".decision h1").style.textShadow = "0 0 15px #00ff00" ;
  }
  if(decision == "It's a tie!"){
    document.querySelector(".decision h1").style.textShadow = "0 0 15px 	#ffff00" ;
  }
  
}

const setScore = (newScore) => {
  SCORE = newScore;
  document.querySelector(".score h1").innerText = newScore;
  
}
const setCompScore = (newScore) => {
  CompSCORE = newScore;
  document.querySelector(".botScore h1").innerText = newScore;
  
}
