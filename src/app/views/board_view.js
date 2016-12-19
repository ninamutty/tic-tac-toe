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

  playSpace: function() {
    console.log("playSpace");
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
