import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('ma-single-list-line', 'Integration | Component | ma single list line', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{ma-single-list-line}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#ma-single-list-line}}
      template block text
    {{/ma-single-list-line}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
