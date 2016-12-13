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
  this.allPlayers = [],
  this.display = function() {
    var displayString = ""
    for (var i=1; i<10; i++) {
      if (this.board[i] == null) {
        displayString += "   ";
      } else {
        displayString +=  " " + this.board[i] + " " ;
      }

      if (i%3 !== 0) {
        displayString += "|";
      } else if (i == 9) {
        displayString += "\n\n";
      } else {
        displayString += "\n-----------\n"
      }
    }
    return displayString
  } //end this.display
}; //end contructor

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
  if (this.allPlayers[0].winner == true || this.allPlayers[1].winner == true) {
    throw new Error("The Game is Over");
  }

  if (this.board[location] !== null) {
    return this.board;
  }

  for (var player in this.allPlayers) {
    if (this.allPlayers[player].turn) {
      this.board[location] = this.allPlayers[player].symbol
      this.allPlayers[player].turn = false;
      if (this.hasWon() == this.allPlayers[player].symbol) {
        this.allPlayers[player].winner = true;
        break;
      }
    } else {
      this.allPlayers[player].turn = true;
    }
  }
  console.log(this.display());
  var nullSpacesLeft = false;
  for (var i = 1; i < 10; i++) {
    if (this.board[i] == null) {
      nullSpacesLeft = true;
    }
  }

  if (this.hasWon() == null && nullSpacesLeft == false) {
    throw new Error("It's a tie! You both lose.")
  }
  return this.board;
};

Game.prototype.hasWon = function () {
  var b = this.board;
  if (b[1] == b[4] && b[7] == b[4] && b[4] !== null) {
    return b[1]
  } else if (b[2] == b[5] && b[8] == b[5] && b[5] !== null) {
    return b[2]
  } else if (b[3] == b[6] && b[9] == b[6] && b[6] !== null) {
    return b[3]
  } else if (b[1] == b[2] && b[3] == b[2] && b[2] !== null) {
    return b[1]
  } else if (b[4] == b[6] && b[5] == b[6] && b[6] !== null) {
    return b[4]
  } else if (b[7] == b[8] && b[9] == b[8] && b[8] !== null) {
    return b[7]
  } else if (b[1] == b[5] && b[9] == b[5] && b[5] !== null) {
    return b[1]
  } else if (b[3] == b[5] && b[7] == b[5] && b[5] !== null) {
    return b[3]
  } else {
    return null;
  }
};




export default Game;
