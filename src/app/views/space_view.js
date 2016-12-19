import _ from 'underscore';
import Backbone from 'backbone';

const SpaceView = Backbone.View.extend({
  initialize: function(options) {
    this.value = null;
    this.position = options.position
  },

  render: function() {
    return this;
  },

  events: {
    'click .board-space': 'playSpace'
  },

  playSpace: function() {
    console.log('playSpace');
  }

}); //end SpaceView

export default SpaceView;
