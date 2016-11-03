import Ember from 'ember';
import layout from '../templates/components/ma-list-line';
import MaterialRippleEffect from '../mixins/ma-ripple-effect';

export default Ember.Component.extend(MaterialRippleEffect, {
  tagName: 'li',
  layout
});
