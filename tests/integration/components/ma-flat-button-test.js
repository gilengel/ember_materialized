import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('ma-flat-button', 'Integration | Component | ma flat button', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{ma-flat-button}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#ma-flat-button}}
      template block text
    {{/ma-flat-button}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
