import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['ma-toolbar-button'],
  classNameBindings: ['position'],
  mouseState: 'normal',
 
  mouseEnter: function(){
    this.set("mouseState", 'hover');
  },
  
  mouseLeave: function(){
    this.set("mouseState", 'normal');
    
    /*
    $(this.element).find(".ma-card").animate({
      width: "toggle",
      height: "toggle"
  }, 500, function() {
    // Animation complete.
  });
    */
  },
  

  
  didInsertElement: function(){
    
    /*
    $(this.element).find(".ma-card").animate({
      width: "toggle",
      height: "toggle"
  }, 0, function() {
    // Animation complete.
  });
  */
  },
  
  click: function() {
    this.set("mouseState", 'normal');
    
    /*
    $(this.element).find(".ma-card").animate({
      width: "toggle",
      height: "toggle"
    }, 500, function() {
      // Animation complete.
    });
    */
  }
});
