// player.js

var Player = function() {
  this.symbol = null;
  this.turn = false;
}

Player.prototype.name = function (name) {
  this.name = name;
};

// Player.prototype.hasWon = function () {
//   if (board[1] )
// };


export default Player;
