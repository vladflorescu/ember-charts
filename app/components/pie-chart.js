import Ember from 'ember';
import c3AbstractChart from './c3-abstract-chart';

export default c3AbstractChart.extend({
  formattedData: Ember.computed('data', function() {
    return _.map(this.get('data'), el => [el.key, el.val]);
  }).readOnly(),

  didRender() {
    this.generateChart('pie');
  }
});
