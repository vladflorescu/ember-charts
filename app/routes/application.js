import Ember from 'ember';

export default Ember.Route.extend({
  activeDataset: Ember.inject.service(),

  model() {
    // return this.store.findAll('datasetDescription');
    return [
      this.store.createRecord('datasetDescription', {
        id: 1,
        name: 'Sample Data Set',
        isUnidimensional: true
      }),
      this.store.createRecord('datasetDescription', {
        id: 2,
        name: 'Another Sample Data Set',
        isUnidimensional: true
      }),
      this.store.createRecord('datasetDescription', {
        id: 3,
        name: 'You got it',
        isUnidimensional: false
      }),
    ];
  },

  setupController(controller, model) {
    this._super(...arguments);
    controller.set('datasetDescriptions', model);

    // sample data
    this.set('activeDataset.instance', this.store.createRecord('unidimensionalDataset', {
      values: Ember.A([
        { key: 'vlad', val: 10 },
        { key: 'iustin', val: 7 },
        { key: 'vladut', val: 12 },
        { key: 'stan', val: 3 }
      ])
    }));
  },

  redirect() {
    this.transitionTo('charts');
  }
});
