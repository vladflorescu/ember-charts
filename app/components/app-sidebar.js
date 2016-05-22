import Ember from 'ember';
import config from 'ember-charts/config/environment';

export default Ember.Component.extend({
  tagName: 'aside',

  activeDataset: Ember.inject.service(),

  actions: {
    requestDataset(datasetDescription) {
      this.attrs['on-request-dataset'](datasetDescription);
    },

    deleteDatasetWithDescription(datasetDescription) {
      let url = `${config.apiHost}/${config.apiPrefix}/`;
      url += datasetDescription.get('isUnidimensional')
          ? 'unidimensionalDatasets'
          : 'bidimensionalDatasets';

      url += `/${datasetDescription.get('datasetId')}`;

      Ember.$.ajax({
        url: url,
        type: 'DELETE',
      }).then(() => {
        if (datasetDescription.get('datasetId') === this.get('activeDataset.instance.id')) {
          this.set('activeDataset.instance', null);
        }
        this.attrs['on-remove-description'](datasetDescription);
      });
    }
  }
});
