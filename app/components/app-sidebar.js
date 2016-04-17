import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'aside',
  classNames: ['pull-left'],

  actions: {
    requestDataset(datasetDescription) {
      this.attrs['on-request-dataset'](datasetDescription);
    }
  }
});
