import Ember from 'ember';
import MaRippleEffectMixin from 'ember_materialized/mixins/ma-ripple-effect';
import { module, test } from 'qunit';

module('Unit | Mixin | ma ripple effect');

// Replace this with your real tests.
test('it works', function(assert) {
  let MaRippleEffectObject = Ember.Object.extend(MaRippleEffectMixin);
  let subject = MaRippleEffectObject.create();
  assert.ok(subject);
});
