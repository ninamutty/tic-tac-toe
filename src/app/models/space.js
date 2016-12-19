import Backbone from 'backbone';

const Space = Backbone.Model.extend({
  initialize: function(options) {
    this.set("value", options.value);
    this.set("index", options.index);
  }
}); //end Space Model

export default Space;
