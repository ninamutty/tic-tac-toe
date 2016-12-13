// player.js

var Player = function() {
  this.symbol = null;
  this.turn = false;
  this.winner = false;
}

Player.prototype.name = function (name) {
  this.name = name;
};


export default Player;
