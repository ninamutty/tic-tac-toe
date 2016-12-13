//game.js

var Player = require('./player');

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
  }
}

Game.prototype.players = function (player1, player2) {
  var p1 = new Player();
  p1.name = player1;
  p1.symbol = "X";
  var p2 = new Player();
  p2.name = player2;
  p2.symbol = "O";
  var allPlayers = [p1,p2]
  return allPlayers
}; //close players

Game.prototype.play = function (location) {
  this.board[location] = symbol
};

// var newGame = new Game();
// var players = newGame.players("Mario", "Luigi");
// console.log(players[0].name);


module.exports = Game;
