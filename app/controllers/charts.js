import Ember from 'ember';

const { computed } = Ember;

export default Ember.Controller.extend({
  activeDataset: Ember.inject.service(),

  availableCharts: computed('charts', function() {
    if (this.get('activeDataset.instance.constructor.modelName') === 'unidimensional-dataset') {
      return Ember.A([
        { label: 'Bar Chart', componentName: 'bar-chart' },
        { label: 'Pie Chart', componentName: 'pie-chart' }
      ]);
    }
    return Ember.A();
  }).readOnly()
});
