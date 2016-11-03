import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('ma-single-line-list', 'Integration | Component | ma single line list', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{ma-single-line-list}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#ma-single-line-list}}
      template block text
    {{/ma-single-line-list}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
