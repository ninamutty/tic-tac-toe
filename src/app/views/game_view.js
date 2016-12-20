import _ from 'underscore';
import $ from 'jquery';
import Backbone from 'backbone';
import BoardView from 'app/views/board_view';
import Player from 'app/models/player';
import Game from 'app/models/game';

const GameView = Backbone.View.extend({
  initialize: function() {
    this.listenTo(this.model, 'update', this.render);

    this.input = {
      name: this.$('.player-form input[name="name"]')
    };

    this.render();
  },

  render: function() {
    const board = new BoardView({
      model: this.model.get("board"),
      el: this.$('.board-div')
    });
    this.listenTo(board, 'winner', this.winner);
    this.listenTo(board, 'draw', this.draw);

    board.render();

    return this;
  },

  events: {
    'submit .player-form': 'createPlayer',
    'click .btn-cancel': 'cancelInput',
    'click .btn-new-game': 'callNew'
    // function(ev) { newGame.call(this, ev); }
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
      console.log("There are Two Players Already");
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
  }, //end cancelInput

  winner: function(board) {
    console.log("WINNER");
    this.outcome = board.hasWon();
    if (this.outcome == "X") {
      this.$("#modalText").html("We Have a Winner! Congratulations " + this.model.get("allPlayers")[0].get("name") + "!!");
    } else {
      this.$("#modalText").html("We Have a Winner! Congratulations " + this.model.get("allPlayers")[1].get("name") + "!!");
    }
    this.$("#myModal").show();

    /// send info to API
    /// add new game button that triggers a new game
  },

  draw: function(board) {
    console.log("TIE");
    this.outcome = "draw";
    this.$("#modalText").html("We Have a Tie! You're both losers!");
    this.$("#myModal").show();
    /// send info to API
    /// add new game button that triggers a new game
  },

  format: function() {
    var gameComplete = {
      outcome: this.outcome,
      players: [this.model.get("allPlayers")[0].get("name"), this.model.get("allPlayers")[1].get("name")],
      board: 
    };
    return task;

  },

  callNew: function(e) {
    e.preventDefault();
    this.allPlayers = [];
    this.$("#player1-name").html("");
    this.$("#player2-name").html("");
    this.$("#myModal").hide();
    newGame.call();
  }

}); //end GameView

export default GameView;





var newGame = function() {
  // e.preventDefault();
  console.log("newGame");

  var game = new Game({
    spaces: [{
      value: ' ',
      index: 0,
    }, {
      value: ' ',
      index: 1,
    }, {
      value: ' ',
      index: 2,
    }, {
      value: ' ',
      index: 3,
    }, {
      value: ' ',
      index: 4,
    }, {
      value: ' ',
      index: 5,
    }, {
      value: ' ',
      index: 6,
    }, {
      value: ' ',
      index: 7,
    }, {
      value: ' ',
      index: 8,
    }]
  }); // end game

  var gameView = new GameView({
    el: $('#game'),
    model: game
  });
}
