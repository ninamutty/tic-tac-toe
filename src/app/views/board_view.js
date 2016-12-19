import _ from 'underscore';
import Backbone from 'backbone';
import SpaceView from 'app/views/space_view';

const BoardView = Backbone.View.extend({
  initialize: function(){
    this.listenTo(this.model, 'update', this.render);
  },

  render: function() {
    const boardSpaces = Backbone.$('#tictactoe-board');
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

    if (space.model.get("value") !== " ") {
      return this;
    } else {
      space.model.set("value", "X");
      space.render();
      return this;
    }

  },



  hasWon: function () {
    var b = this;
    var winningSolutions = [[0,3,6], [1,4,7], [2,5,8], [0,1,2], [3,4,5], [6,7,8], [0,4,8], [2,4,6]];

    var answer = null;
    for (var i=0; i < winningSolutions.length; i++) {
      if (b[winningSolutions[i][0]] == b[winningSolutions[i][1]] && b[winningSolutions[i][2]] == b[winningSolutions[i][1]] && b[winningSolutions[i][1]] !== null) {
        answer = b[winningSolutions[i][0]]
      }
    }
    return answer
  }

}); //end BoardView

export default BoardView;




















// render: function() {
//   console.log(">>> BREADCRUMBS: 4");
//   const cardList = Backbone.$('#trip-cards');
//   cardList.empty();
//
//   const self = this;
//   this.model.forEach(function(trip) {
//     const card = new TripView({
//       model: trip
//     });
//     self.listenTo(card, 'select', self.showDetails);
//
//     cardList.append(card.render().$el);
//   })
//   console.log(">>> BREADCRUMBS: 2nd to last");
//   return this;
// }
