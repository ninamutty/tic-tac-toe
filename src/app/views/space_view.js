import _ from 'underscore';
import Backbone from 'backbone';

const SpaceView = Backbone.View.extend({
  initialize: function(options) {
    this.value = options.value;
    this.position = options.position;
    this.template = _.template(Backbone.$('#tmpl-tictactoe-board').html());
  },

  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this;
  },

  events: {
    'click .board-space': 'clickSpace'
  },

  clickSpace: function() {
    console.log('clickSpace');
  }

}); //end SpaceView

export default SpaceView;
