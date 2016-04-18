import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('c3-abstract-chart', 'Integration | Component | c3 abstract chart', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });"

  this.render(hbs`{{c3-abstract-chart}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:"
  this.render(hbs`
    {{#c3-abstract-chart}}
      template block text
    {{/c3-abstract-chart}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
