import Backbone from 'backbone';
import Board from 'app/collections/board';
import Space from 'app/models/space';

const Game = Backbone.Model.extend({
  initialize: function(options) {
    this.set("allPlayers", []);
    this.set("outcome", "");

    // console.log(options.spaces);
    var spaces = options.spaces.map(function(attrs) {
      var space = new Space(attrs);
      // console.log(space);
      return space;
    });
    // console.log(spaces);

    this.set("board", new Board(spaces));
  }
}); //end Game Model

export default Game;
