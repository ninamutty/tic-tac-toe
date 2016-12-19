import _ from 'underscore';
import Backbone from 'backbone';
import BoardView from 'app/views/board_view';

const GameView = Backbone.View.extend({
  initialize: function() {
    this.listenTo(this.model, 'update', this.render);

    this.render();
  },

  render: function() {
    const gameBoardView = new BoardView({
      model: this.model.get("board"),
      el: this.$('.board-div')
    });
    gameBoardView.render();

    return this;
  }

}); //end GameView

export default GameView;












//
// render: function() {
//   // console.log(">>> BREADCRUMBS: 2");
//
//   const tripsView = new TripListView({
//     //check that .tripList is right
//     model: this.model.tripsList,
//     el: this.$('#tictactoe-board')
//   })
//   tripsView.render();
//
//   // console.log(">>> BREADCRUMBS: Last");
//   return this;
// }
