import Ember from 'ember';
import layout from '../templates/components/ma-line-edit';

export default Ember.Component.extend({
  layout,
  classNames: ['ma-floating-line-edit'],

  init: function(){
    this._super(...arguments);

    let value = this.get('value');
    if(value !== "" || value !== undefined || value !== null){
      this.set('classLabel', 'focused');
    }
  },

  didInsertElement: function() {
    var input = Ember.$(this.element).find('input');
    var self = this;

    input.keyup(function(e){ self.keyUp(e); });
  },

  valueChange: Ember.observer('value', function(){
    var value = this.get('value');
    if(value === "" || value === undefined || value === null){
      this.set('classLabel', '');
    }else{
      this.set('classLabel', 'focused');
    }    
  }),

  click: function(){
    var input = Ember.$(this.element).find('input');
    input.focus();
  },

  focusIn: function(){
    this.set('classLabel', 'focused');
  },

  focusOut: function(){
    var value = this.get('value');
    if(value === "" || value === undefined || value === null){
      this.set('classLabel', '');
    }
  },

  keyUp: function(){
    var input = Ember.$(this.element).find('input');
    this.set('value', input.val());
  },


});
