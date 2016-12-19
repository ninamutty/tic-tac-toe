import $ from 'jquery';
import Backbone from 'backbone';
import _ from 'underscore';
import Space from 'app/models/space';
import SpaceView from 'app/views/space_view';
import BoardView from 'app/views/board_view';
import Board from 'app/collections/board';
import Game from 'app/models/game';
import GameView from 'app/views/game_view';
import Player from 'app/models/player';
import PlayerView from 'app/views/player_view';

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








// $(document).ready(function() {
//   var board = new Board(boardData);
//   var game = new Game(board);
//
//   var gameView = new GameView({
//     el: $('#game'),
//     model: game
//   });
//   gameView.render();
//
// }); //end document.ready
