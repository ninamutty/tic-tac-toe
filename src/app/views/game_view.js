import _ from 'underscore';
import $ from 'jquery';
import Backbone from 'backbone';
import BoardView from 'app/views/board_view';
import Player from 'app/models/player';

const GameView = Backbone.View.extend({
  initialize: function() {
    this.listenTo(this.model, 'update', this.render);

    this.input = {
      name: this.$('.player-form input[name="name"]')
    };

    this.render();
  },

  render: function() {
    // const playerView = new PlayerView({
    //   model: this.model.get("allPlayers"),
    //   el: this.$('.player-stuff')
    // });
    // playerView.render()

    const gameBoardView = new BoardView({
      model: this.model.get("board"),
      el: this.$('.board-div')
    });
    gameBoardView.render();

    return this;
  },

  events: {
    'submit .player-form': 'createPlayer',
    'click .btn-cancel': 'cancelInput',
  }, // end events

  createPlayer: function(e) {
    e.preventDefault();
    console.log("createPlayer");
    if (this.model.get("allPlayers").length <= 2) {
      var player = new Player(this.getInput());

      this.model.get("allPlayers").push(player);

      if (this.model.get("allPlayers").length <= 1) {
        this.model.get("allPlayers")[0].set("symbol", "X");
        $('#player1-name').html(this.model.get("allPlayers")[0].get("name"));
      } else {
        this.model.get("allPlayers")[1].set("symbol", "O");
        $('#player2-name').html(this.model.get("allPlayers")[1].get("name"));
      }
    } else {
      console.log("Two Players");
    }
    this.cancelInput();
  },


  getInput: function(event) {
    console.log("getInput");
    var player = {
      name: this.input.name.val(),
    }
    return player;
  }, // end getInput

  cancelInput: function() {
    console.log("cancelInput");
    this.input.name.val('');
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
