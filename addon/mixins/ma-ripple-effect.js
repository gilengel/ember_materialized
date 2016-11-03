import Ember from 'ember';

export default Ember.Mixin.create({
  mouseDown: function(e){
    var element = e.currentTarget;


    var rippleEffectElement =  $('<div>', {'class' : 'ma-ripple-effect'});
    $(element).children().css('position', 'relative');
    $(element).children().css("z-index", '2');


    var position = $(element).css('position');
    var overflow = $(element).css('overflow');
    $(element).css('position', 'relative');
    $(element).css('overflow', 'hidden');

    var parentWidth = $(element).width();
    var width = $(rippleEffectElement).width();
    var height = $(rippleEffectElement).height();

    var left = (e.clientX - width / 2) - $(element).offset().left;
    var top = (e.clientY - height / 2) - $(element).offset().top;


    $(rippleEffectElement).css('top',  top);
    $(rippleEffectElement).css('left', left);


    rippleEffectElement.appendTo($(element));
    setTimeout(function(){
      $(rippleEffectElement).css('background', 'transparent');
      $(rippleEffectElement).css('transform', 'scale('+((parentWidth ) / 10 * 2.5)+')');
      $(rippleEffectElement).css('transition', ' all 0.65s');
    }, 10);

    setTimeout(function(){
      $(element).css('position', position);
      $(element).css('overflow', overflow);
      rippleEffectElement.remove();
    }, 1000);
  }
});
