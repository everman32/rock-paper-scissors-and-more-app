export default class GameLogic {
  constructor(availableMoves) {
    this.availableMoves = availableMoves;
    this.playerMove = null;
    this.computerMove = null;
    this.result = {
      win: "win",
      lose: "lose",
      draw: "draw",
    };
  }

  computerMakeMove() {
    return (this.computerMove = Math.floor(
      Math.random() * this.availableMoves.length
    ));
  }

  playerMakeMove(choise) {
    return (this.playerMove = Number.parseInt(choise, 10));
  }

  calculateWinner(
    playerMove = this.playerMove,
    computerMove = this.computerMove
  ) {
    if (computerMove === playerMove) return this.result.draw;
    if (
      (playerMove > computerMove &&
        playerMove - computerMove <= this.availableMoves.length / 2) ||
      (playerMove < computerMove &&
        computerMove - playerMove > this.availableMoves.length / 2)
    )
      return this.result.lose;
    return this.result.win;
  }
}
