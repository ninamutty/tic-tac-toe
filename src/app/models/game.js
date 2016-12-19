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
  },

  hasWon: function () {
    var b = this.get("board");
    var winningSolutions = [[0,3,6], [1,4,7], [2,5,8], [0,1,2], [3,4,5], [6,7,8], [0,4,8], [2,4,6]];

    var answer = null;
    for (var i=0; i < winningSolutions.length; i++) {
      if (b[winningSolutions[i][0]] == b[winningSolutions[i][1]] && b[winningSolutions[i][2]] == b[winningSolutions[i][1]] && b[winningSolutions[i][1]] !== null) {
        answer = b[winningSolutions[i][0]]
      }
    }
    return answer
  }
}); //end Game Model

export default Game;
