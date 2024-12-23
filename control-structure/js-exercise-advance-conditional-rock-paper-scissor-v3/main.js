function rockPaperScissor(player1, player2) {
  // player 1
  if (player1 == "scissor" && player2 == "paper") {
    return "Player 1 Won!";
  }
  if (player1 == "rock" && player2 == "scissor") {
    return "Player 1 Won!";
  }
  if (player1 == "paper" && player2 == "rock") {
    return "Player 1 Won!";
  }
  // player 2

  if (player1 == "scissor" && player2 == "rock") {
    return "Player 2 Won!";
  }
  if (player1 == "rock" && player2 == "paper") {
    return "Player 2 Won!";
  }
  if (player1 == "paper" && player2 == "scissor") {
    return "Player 2 Won!";
  }

  if (((player1 == player2) === "paper", "rock", "scissor")) {
    return "Draw!";
  }
}

console.log(rockPaperScissor("scissor", "paper")); // "Player 1 Won!"
console.log(rockPaperScissor("rock", "paper")); // "Player 2 Won!"
console.log(rockPaperScissor("paper", "paper")); // "Draw!"
console.log(rockPaperScissor("rock", "rock")); // "Draw!"

module.exports = rockPaperScissor;
