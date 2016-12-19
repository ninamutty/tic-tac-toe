import Backbone from 'backbone';
import Space from 'app/models/space';

const Board = Backbone.Collection.extend({
  // This Board represents a collection of Spaces
  model: Space
});

export default Board;
