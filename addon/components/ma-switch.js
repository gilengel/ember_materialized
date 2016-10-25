import Ember from 'ember';
import layout from '../templates/components/ma-switch';

export default Ember.Component.extend({
  classNames: ['ma-switch'],
  checked: false,

  didInsertElement: function didInsertElement() {
      Ember.run.scheduleOnce('afterRender', this, function () {
          // make sure the value passed by the handlebar template is rendered

          //this.statusChanged();
      });
  },

  statusChanged: (function () {
      var checked = this.get('checked');
      Ember.$(this.element).find('input')[0].checked = checked;

      var label = $(this.element).find('label');
      var self = $(this.element).find('.knob');
      var value = $(this.element).width() / 2;
      if (checked) {
          label.css('margin-left', value + 'px');
          self.addClass('checked');
          label.addClass('checked');
      } else {
          label.css('margin-left', '0px');
          self.removeClass('checked');
          label.removeClass('checked');
      }
  }).observes('checked'),

  click: function click() {
      // toggle value
      this.set('checked', !this.get('checked'));
  }
});
