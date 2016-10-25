import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['ma-floating-action-button'],
  classNameBindings: [
                        'isExtended:extend-content',
                        'isShrinked:shrinked-content'   
                    ],
  
  isExtended: false,
  isShrinked: true,
  
  click: function(evt){
    this.setProperties({
      isExtended: !this.isExtended,
      isShrinked: !this.isShrinked
    });

    
  }
});
