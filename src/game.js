//game.js
import Player from 'player'

var Game = function() {
  this.board = {
    1: null,
    2: null,
    3: null,
    4: null,
    5: null,
    6: null,
    7: null,
    8: null,
    9: null
  },
  this.allPlayers = []
}

Game.prototype.players = function (player1, player2) {
  var p1 = new Player();
  p1.name = player1;
  p1.symbol = "X";
  p1.turn = true;

  var p2 = new Player();
  p2.name = player2;
  p2.symbol = "O";
  p2.turn = false;

  this.allPlayers = [p1,p2]
  return this.allPlayers
}; //close players



Game.prototype.play = function (location) {
  // console.log(this.allPlayers);
  for (var player in this.allPlayers) {
    // console.log(">>>>>" + this.allPlayers[player].name);
    if (this.allPlayers[player].turn) {
      this.board[location] = this.allPlayers[player].symbol
      this.allPlayers[player].turn = false;
    } else {
      this.allPlayers[player].turn = true;
    }
  }
  return this.board;
};

// var newGame = new Game();
// var players = newGame.players("Mario", "Luigi");
// console.log(players[0].name);









export default Game;
