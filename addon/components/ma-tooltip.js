import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['ma-tooltip'],
  classNameBindings: ['status'],
  status: 'hidden'
});
