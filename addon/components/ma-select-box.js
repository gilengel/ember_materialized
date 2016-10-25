import Ember from "ember";

export default Ember.Component.extend({
    classNames: ["ma-select"],

    move: function move(list, height, index) {
        var marginTop = -(height * index);
        marginTop -= parseFloat(list.css("paddingTop")) - 1;

        list.css("top", marginTop + "px");
    },

    didInsertElement: function didInsertElement() {
        this._super();
        Ember.run.scheduleOnce("afterRender", this, function () {
            var self = this;

            var list = Ember.$(this.element).find("ul");

            Ember.$(this.element).find("li").each(function (index) {
                if (self.get("value") == Ember.$(this).text()) {
                    self.move(list, Ember.$(this).height(), index);
                }
            }).click(function () {
                var el = Ember.$(this);
                self.set("value", el.text());
                self.move(list, el.height(), el.index());
            });

            list.hide();
            Ember.$(this.element).find(".value").click(function () {
                list.show();
            });

            list.click(function () {
                Ember.$(this).hide();
            });
        });
    }
});