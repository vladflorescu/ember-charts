import Ember from 'ember';

const { computed, observer } = Ember;

export default Ember.Controller.extend({
  activeDataset: Ember.inject.service(),

  charts: Ember.A([
    { id: '1', label: 'Bar Chart', componentName: 'bar-chart', isUnidimensional: true, isBidimensional: true },
    { id: '2', label: 'Line Chart', componentName: 'xy-line-chart', isUnidimensional: true, isBidimensional: true },
    { id: '3', label: 'Pie Chart', componentName: 'pie-chart', isUnidimensional: true, isBidimensional: false },
    { id: '4', label: 'Area Chart', componentName: 'area-chart', isUnidimensional: false, isBidimensional: true },
    { id: '5', label: 'Scatter Plot', componentName: 'scatter-plot', isUnidimensional: false, isBidimensional: true}
  ]),

  unidimensionalCharts: computed.filter('charts', c => c.isUnidimensional),
  bidimensionalCharts:  computed.filter('charts', c => c.isBidimensional),

  selectedChart: computed('selectedChartId', function() {
    return this.get('charts').findBy('id', this.get('selectedChartId'));
  }).readOnly(),

  availableCharts: computed('activeDataset.instance', function() {
    if (this.get('activeDataset.instance.constructor.modelName') === 'unidimensional-dataset') {
      return this.get('unidimensionalCharts');
    }
    return this.get('bidimensionalCharts');
  }).readOnly(),

  isSelectedChartUnidimensional: computed('selectedChart', function() {
    return _.includes(this.get('unidimensionalCharts'), this.get('selectedChart'));
  }).readOnly(),

  isSelectedChartBidimensional: computed('selectedChart', function() {
    return _.includes(this.get('bidimensionalCharts'), this.get('selectedChart'));
  }).readOnly(),

  activeDatasetDidChange: observer('activeDataset.instance', function() {
    if (this.get('activeDataset.instance.constructor.modelName') === 'unidimensional-dataset') {
      if (!this.get('isSelectedChartUnidimensional')) this.set('selectedChartId', null);
    } else {
      if (!this.get('isSelectedChartBidimensional')) this.set('selectedChartId', null);
    }
  }),
});
