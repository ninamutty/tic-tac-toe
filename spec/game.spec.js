//game.spec.js
import Game from 'game';

describe('Game', function() {
  describe('newGame', function() {
    it('should start a new game with an empty board', function() {
      var game = new Game();
      var emptyBoard = Game.board;
      for (var key in emptyBoard) {
        expect(emptyBoard[key]).toBeNull()
      }
    }); //close it
  }); //close describe newGame function

  describe('players', function() {
    it('should assign two players', function() {
      var newGame = new Game();
      var gamePlayers = newGame.players("Mario","Luigi");
      expect(gamePlayers[0].name).toEqual("Mario");
      expect(gamePlayers[1].name).toEqual("Luigi");
      expect(gamePlayers[0].symbol).toEqual("X");
      expect(gamePlayers[1].symbol).toEqual("O");
    });//close it

    it('should start on player one turn', function() {
      var newGame = new Game();
      var gamePlayers = newGame.players("Mario","Luigi");
      expect(gamePlayers[0].turn).toEqual(true);
      expect(gamePlayers[1].turn).toEqual(false);
    });

    it('should have two player', function() {
      var newGame = new Game();
      var gamePlayers = newGame.players("Mario","Luigi");
      expect(gamePlayers.length).toEqual(2);
    })
  }); //close describe players


  describe('play', function() {
    it('should switch players turns', function() {
      var newGame = new Game();
      newGame.players("Mario","Luigi");
      newGame.play(3);
      expect(newGame.allPlayers[0].turn).toEqual(false);
      expect(newGame.allPlayers[1].turn).toEqual(true);
    });

    it('should change the board with the play', function() {
      var newGame = new Game();
      newGame.players("Mario","Luigi");
      newGame.play(3);
      expect(newGame.board[3]).toEqual("X");
      for (var i=1; i < 10; i++) {
        if (i !== 3) {
          expect(newGame.board[i]).toEqual(null);
        }
      };
    });

    it('should can track multiple players plays', function() {
      var newGame = new Game();
      newGame.players("Mario","Luigi");
      newGame.play(3);
      newGame.play(5);

      expect(newGame.board[3]).toEqual("X");
      expect(newGame.board[5]).toEqual("O");
      for (var i=1; i < 10; i++) {
        if (i !== 3 && i !== 5) {
          expect(newGame.board[i]).toEqual(null);
        }
      };
    });

    it('should not let a player play a taken spot', function() {
      var newGame = new Game();
      newGame.players("Mario","Luigi");
      newGame.play(3);
      expect(newGame.board[3]).toEqual("X");
      newGame.play(3);
      expect(newGame.board[3]).toEqual("X");

      expect(newGame.allPlayers[0].turn).toEqual(false);
      expect(newGame.allPlayers[1].turn).toEqual(true);
    });

    it ('should set the winner', function() {
      var newGame = new Game();
      newGame.players("Mario","Luigi");
      newGame.play(1); // player 1
      newGame.play(4); // player 2
      newGame.play(2); // player 1
      newGame.play(5); // player 2

      expect(newGame.allPlayers[0].winner).toEqual(false);
      newGame.play(3); // player 1
      expect(newGame.allPlayers[0].winner).toEqual(true);
      expect(newGame.allPlayers[1].winner).toEqual(false);

    });

    it('should not allow a play if there is a winner', function() {
      var newGame = new Game();
      newGame.players("Mario","Luigi");
      newGame.play(1); // player 1
      newGame.play(4); // player 2
      newGame.play(2); // player 1
      newGame.play(5); // player 2
      newGame.play(3); // player 1

      expect(function() {newGame.play(8)}).toThrow(new Error("The Game is Over"))
    });

    it('should detect a tie', function() {
      var newGame = new Game();
      newGame.players("Mario","Luigi");
      newGame.play(1); // player 1
      newGame.play(2); // player 2
      newGame.play(5); // player 1
      newGame.play(3); // player 2
      newGame.play(6); // player 1
      newGame.play(4); // player 2
      newGame.play(7); // player 1
      newGame.play(9); // player 2

      expect(function() {newGame.play(8)}).toThrow(new Error("It's a tie! You both lose."))

    })
  }); // close describe play

  describe('hasWon', function() {
    it('should return a symbol for the winner', function() {
      var newGame = new Game();
      newGame.players("Mario","Luigi");
      newGame.play(1); // player 1
      newGame.play(3); // player 2
      newGame.play(9); // player 1
      newGame.play(5); // player 2
      newGame.play(7); // player 1
      newGame.play(8); // player 2
      newGame.play(4); // player 1

      expect(newGame.hasWon()).toEqual(newGame.allPlayers[0].symbol);
    });

    it('should return a symbol for the winner', function() {
      var newGame = new Game();
      newGame.players("Mario","Luigi");
      newGame.play(1); // player 1
      newGame.play(3); // player 2

      expect(newGame.hasWon()).toEqual(null);
    });
  }); //ending describe hasWon

});// close describe Game class
