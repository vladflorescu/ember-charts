import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'aside',

  actions: {
    requestDataset(datasetDescription) {
      this.attrs['on-request-dataset'](datasetDescription);
    }
  }
});
