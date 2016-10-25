import Ember from 'ember';

export default Ember.Component.extend({
    classNames: ['ma-checkbox'],

    didInsertElement: function didInsertElement() {
        Ember.run.scheduleOnce('afterRender', this, function () {
            // make sure the value passed by the handlebar template is rendered
            this.statusChanged();
        });
    },

    statusChanged: (function () {
        var checked = this.get('checked');
        Ember.$(this.element).find('input')[0].checked = checked;

        var checkbox = $(this.element).find('i');
        if (checked) {
            checkbox.addClass('selected');
            checkbox.text('check_box');
        } else {
            checkbox.removeClass('selected');
            checkbox.text('check_box_outline_blank');
        }
    }).observes('checked'),

    click: function click() {
        // toggle value
        this.set('checked', !this.get('checked'));
    }
});