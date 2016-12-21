import Backbone from 'backbone';
import Board from 'app/collections/board';
import Space from 'app/models/space';

const Game = Backbone.Model.extend({
  initialize: function(options) {
    this.set("allPlayers", []);
    this.set("outcome", "");

    var spaces = options.spaces.map(function(attrs) {
      var space = new Space(attrs);
      return space;
    });
    this.set("board", new Board(spaces));
  },

  url: 'http://localhost:3000/api/v1/games',
  parse: function(data) {
    return data;
  }
}); //end Game Model

export default Game;
