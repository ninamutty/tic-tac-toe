import Backbone from 'backbone';

const Player = Backbone.Model.extend({
  initialize: function(options) {
    this.set("name", options.name);
    this.set("symbol", options.symbol);
    this.set("turn", false);
    this.set("winner", false);
  }
}); //end Player Model

export default Player;
