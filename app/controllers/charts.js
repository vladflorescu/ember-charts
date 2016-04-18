import Ember from 'ember';

const { computed } = Ember;

export default Ember.Controller.extend({
  activeDataset: Ember.inject.service(),

  availableCharts: computed('charts', function() {
    if (this.get('activeDataset.instance.constructor.modelName') === 'unidimensional-dataset') {
      return Ember.A([
        { label: 'Bar Chart', componentName: 'bar-chart' },
        { label: 'Pie Chart', componentName: 'pie-chart' },
        { label: 'Line Chart', componentName: 'xy-line-chart' }
      ]);
    }
    return Ember.A([
      { label: 'Bar Chart', componentName: 'bar-chart' },
      { label: 'Line Chart', componentName: 'xy-line-chart' },
      { label: 'Area Chart', componentName: 'area-chart' },
      { label: 'Scatter Plot', componentName: 'scatter-plot' }
    ]);
  }).readOnly()
});
