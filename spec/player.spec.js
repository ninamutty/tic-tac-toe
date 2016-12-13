//player.spec.js
import Player from 'player'

describe('Player', function() {
  describe('name', function() {
    it('allows you to set a name to a player', function() {
      var newPlayer = new Player();
      newPlayer.name = "Mario"
      expect(newPlayer.name).toEqual("Mario")
    })// close it

    it('creates two distinct players', function() {
      var mario = new Player();
      mario.name = 'Mario';
      var luigi = new Player();
      luigi.name = 'Luigi';
      expect(mario.name).toEqual("Mario")
      expect(luigi.name).toEqual("Luigi")
    })
  })//close describe name
}) //close describe Player
