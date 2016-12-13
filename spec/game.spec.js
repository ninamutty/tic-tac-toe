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
      expect(gamePlayers[1].name).toEqual("Luigi")
    });//close it
  }); //close describe players

});// close describe Game class
