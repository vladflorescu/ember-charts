import Ember from 'ember';
import config from 'ember-charts/config/environment';

export default Ember.Controller.extend({
  datasetDescriptions: [{
    id: 1,
    name: 'Sample Data Set',
    isUnidimensional: true
  }, {
    id: 2,
    name: 'Another Sample Data Set',
    isUnidimensional: true
  }, {
    id: 3,
    name: 'You got it',
    isUnidimensional: false
  }],

  actions: {
    requestDataset(datasetDescription) {
      // let url = `${config.apiHost}/${config.apiPrefix}`;
      // url += datasetDescription.get('isBidimensional')
      //       ? '/unidimensional_datasets'
      //       : '/bidimensional_datasets';
      // url += datasetDescription;
      // Ember.$.ajax(`${config.apiHost}/${config.apiPrefix}/datasets`)
    }
  }
});
