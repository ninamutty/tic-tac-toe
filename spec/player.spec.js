//player.spec.js
import Player from 'app/models/player';
// import GameView from 'app/views/game_view';


describe('Player', function() {
  describe('name', function() {

    it('allows you to set a name to a player', function() {
      var newPlayer = new Player({name: "Mario"});
      expect(newPlayer.get("name")).toEqual("Mario");
    });// close it

    it('creates two distinct players', function() {
      var mario = new Player({name: "Mario"});
      var luigi = new Player({name: "Luigi"});
      expect(mario.get("name")).toEqual("Mario");
      expect(luigi.get("name")).toEqual("Luigi");
    });
  })//close describe name
}) //close describe Player
