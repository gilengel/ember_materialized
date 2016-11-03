import Ember from 'ember';
import MaterialRippleEffect from '../mixins/ma-ripple-effect';
import layout from '../templates/components/ma-button';

export default Ember.Component.extend(MaterialRippleEffect, {
  classNames: ['ma-button'],
  tagName: 'a',

  layout
});
