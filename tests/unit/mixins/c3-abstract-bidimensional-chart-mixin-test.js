import Ember from 'ember';
import C3AbstractBidimensionalChartMixinMixin from 'ember-charts/mixins/c3-abstract-bidimensional-chart-mixin';
import { module, test } from 'qunit';

module('Unit | Mixin | c3 abstract bidimensional chart mixin');

// Replace this with your real tests.
test('it works', function(assert) {
  let C3AbstractBidimensionalChartMixinObject = Ember.Object.extend(C3AbstractBidimensionalChartMixinMixin);
  let subject = C3AbstractBidimensionalChartMixinObject.create();
  assert.ok(subject);
});
