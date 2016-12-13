// player.js

var Player = function() {
  this.symbol = null;
}

Player.prototype.name = function (name) {
  this.name = name;
};

// Player.prototype.hasWon = function () {
//   if (board[1] )
// };


module.exports = Player;
