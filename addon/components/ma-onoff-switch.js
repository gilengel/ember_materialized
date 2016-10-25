import Ember from 'ember';

export default Ember.Component.extend({
    classNames: ['ma-switch'],

    didInsertElement: function didInsertElement() {
        Ember.run.scheduleOnce('afterRender', this, function () {
            // make sure the value passed by the handlebar template is rendered
            this.statusChanged();
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
/*
click: function(e){
    this.set("value", !this.get("value"));
    
    e.preventDefault();

    var self = $(this.element).find(".knob");
var input =  $(this.element).find("input");
var label = $(this.element).find("label");
var checked = input[0].checked;

input[0].checked = !checked;

var value = $(this.element).width() / 2;

$(this.element).find("label").addClass("checked");

    
    this.statusChanged();
 
}
*/