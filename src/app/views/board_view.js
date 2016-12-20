import _ from 'underscore';
import $ from 'jquery';
import Backbone from 'backbone';
import SpaceView from 'app/views/space_view';
import Space from 'app/models/space';


const BoardView = Backbone.View.extend({
  initialize: function(){
    this.movesPlayed = 0;
    this.listenTo(this.model, 'update', this.render);
    this.boardSpaces = Backbone.$('#tictactoe-board');

  },

  render: function() {
    const boardSpaces = this.boardSpaces;
    boardSpaces.empty();

    const self = this;
    this.model.forEach(function(space) {
      var space = new SpaceView({
        model: space,
        // el: this.$('.board-space')
      });

      self.listenTo(space, 'select', self.playSpace);
      boardSpaces.append(space.render().$el);
    })
    return this;
  },


  playSpace: function(space) {
    console.log("playSpace");
    var that = this;
    if (space.model.get("value") !== " ") {
      return this;
    } else {
      if (this.movesPlayed % 2 == 0) {
        space.model.set("value", "X");
        this.movesPlayed += 1;
      } else {
        space.model.set("value", "O");
        this.movesPlayed += 1;
      }

      if (this.hasWon() == "X" || this.hasWon() == "O") {
        this.trigger("winner", this);
      } else if (this.movesPlayed >= 9) {
        this.trigger("draw", this);
      }

      space.render();
      return this;
    }
  },


  hasWon: function () {
    var b = this.model;
    // console.log(this);
    var winningSolutions = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [2,4,6], [0,4,8]]

    var answer = null;
    for (var i=0; i < winningSolutions.length; i++) {
      if((b.find({index: winningSolutions[i][0]}).get("value") == b.find({index: winningSolutions[i][1]}).get("value")) && (b.find({index: winningSolutions[i][2]}).get("value") == b.find({index: winningSolutions[i][1]}).get("value")) && (b.find({index: winningSolutions[i][0]}).get("value") == b.find({index: winningSolutions[i][2]}).get("value") )&& (b.find({index: winningSolutions[i][0]}).get("value") !== null)) {
        answer = b.find({index: winningSolutions[i][0]}).get("value");
        return answer;
      }
    }
  }

}); //end BoardView

export default BoardView;
