import Ember from 'ember';

const { computed } = Ember;

export default Ember.Controller.extend({
  activeDataset: Ember.inject.service(),

  charts: [
    { label: 'Bar Chart', componentName: 'bar-chart' },
    { label: 'Pie Chart', componentName: 'pie-chart' }
  ],

  availableCharts: computed('charts', function() {
    return this.charts;
  }).readOnly()
});
