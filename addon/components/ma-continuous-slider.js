import Ember from "ember";

export default Ember.Component.extend({
  classNames: ["ma-slider"],

  action: "",
  min: 0,
  max: 100,
  stepSize: 1,

  _knobPosition: 0,


  didInsertElement: function didInsertElement() {
    var knob = Ember.$(".ma-control");

    knob.mousedown(this, function () {
      Ember.$(this).switchClass("normal", "hover", 200);
    });
    Ember.run.once(this, this.moveSlider);
  },

  _range: (function () {
    return this.get("max") - this.get("min");
  }).property("min", "max"),

  mouseDown: function() {



    this.set("mousedown", true);

    var self = this;
    var mousemove = function mousemove(e) {
      e.preventDefault();
      self.mouseMove(e);
    };
    var mouseup = function mouseup(e) {
      document.removeEventListener("mousemove", mousemove, false);
      document.removeEventListener("mouseup", mouseup, false);

      self.mouseUp(e);
    };

    document.addEventListener("mousemove", mousemove);
    document.addEventListener("mouseup", mouseup);


  },

  mouseUp: function() {
    this.set("mousedown", false);
    Ember.$(".ma-control").switchClass("hover", "normal", 200);
  },

  actionChanged: (function () {
    if (this.get("action") === "end") {
      Ember.$(".ma-control").switchClass("hover", "normal", 200);
    }
  }).observes("action"),

  valueChanged: Ember.observer("value", function(){
    this.moveSlider();
  }),

  knobProperties: Ember.computed('value', '_knobPosition', function(){
    return Ember.String.htmlSafe("left: "+this.get('_knobPosition')+"px");


  }),

  moveSlider: function(){
    var element = Ember.$(this.element);
    var percentage = this.get("value") / this.get("_range");

    var left = element.offset().left+11;
    var width = element.width()-33;
    var controlWidth = Ember.$(".ma-control").width();

    this.set('_knobPosition', left + width * percentage - controlWidth / 2);
  },

  mouseMove: function(e) {
    if (this.get("mousedown")) {
      var element = Ember.$(this.element);
      var width = element.width();
      var parentX = element.offset().left;

      var pos = e.pageX - parentX;
      pos = pos < 0 ? 0 : pos;
      pos = pos > width ? width: pos;
      var pw = pos / width;

      var step = this.get("stepSize");
      var multiplier = 1.0 / step;

      var value = Math.round(pw * this.get("_range") * multiplier) / multiplier;

      this.set("value", value);
      if (this.get("value") < this.get("min")) {
        this.set("value", this.get("min"));
      }

      if (this.get("value") > this.get("max")) {
        this.set("value", this.get("max"));
      }
    }
  }
});
