import Ember from 'ember';

export default Ember.Component.extend({
    classNames: ['ma-knob'],

    offset: 0,
    
    didInsertElement: function() {
        Ember.run.scheduleOnce('afterRender', this, function() {
            var offset = $(this.element).find(".ma-control").width() / 2;
            var width = $(this.element).width();
            this.set("indicatorOffset", offset);
            this.set("width", width);
        });
    },
    
    mouseDown: function mouseDown(e) {
        this.set('changeMode', true);

        var self = this;
        var mousemove = function mousemove(e) {
            e.preventDefault();
            self.mouseMove(e);
        };
        var mouseup = function mouseup(e) {
            self.set('changeMode', false);

            document.removeEventListener('mousemove', mousemove, false);
            document.removeEventListener('mouseup', mouseup, false);
        };

        document.addEventListener('mousemove', mousemove);
        document.addEventListener('mouseup', mouseup);
    },

    mouseMove: function mouseMove(e) {
        if (this.get('changeMode')) {
            var offset = $(this.element).offset();
            var centerX = this.get('width') / 2;
            var centerY = this.get('width') / 2;

            var x = (e.pageX - offset.left - centerX) / (this.get('width') / 2);
            var y = (e.pageY - offset.top - centerY) / (this.get('width') / 2);

            var length = Math.sqrt(x * x + y * y);
            var nx = 1 / length * x;
            var ny = 1 / length * y;

            var deg = 0;
            if (y <= 0) {
                deg = 180 / Math.PI * Math.acos(nx);
            } else {
                deg = 360 - 180 / Math.PI * Math.acos(nx);
            }

            this.set('value', Math.floor(deg));
        }
    },

    controlOffset : Ember.computed('value', function(){
        var offset = this.get('indicatorOffset');
        var width = this.get('width');
 
        var value = Math.PI / 180 * this.get('value');
        var x = Math.cos(value) * 0.3 * width-offset,
            y = -Math.sin(value) * 0.3 * width-offset;
            
        return {x: x, y: y};
    }),
    
    /*
    valueChanged: (function () {
        
        
        
        var ctx = $(this.element)[0].getContext('2d');
        ctx.clearRect(0, 0, this.get('width'), this.get('height'));
        ctx.clearRect(0, 0, this.get('width'), this.get('height'));

        ctx.save();
        ctx.translate(0.5, 0.5);
        ctx.beginPath();
        ctx.arc(this.get('width') / 2, this.get('height') / 2, this.get('height') / 2 - 2, 0, 2 * Math.PI);
        ctx.stroke();

        var value = Math.PI / 180 * (this.get('value')-this.get('offset'));
        var centerX = this.get('width') / 2;
        var centerY = this.get('height') / 2;

        var x = Math.cos(value) * centerX * 0.6,
            y = Math.sin(value) * centerY * 0.6;
            
            

        ctx.beginPath();
        ctx.arc(centerX + x, centerY - y, this.get('width') / 14, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.restore();
    }).observes('value'),
    */
});

