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

    // // Sample unidimensional data
    // this.set('activeDataset.instance', this.store.createRecord('unidimensionalDataset', {
    //   // Sample Category Data
    //   values: Ember.A([
    //     { key: 'vlad', val: 10 },
    //     { key: 'iustin', val: 7 },
    //     { key: 'vladut', val: 12 },
    //     { key: 'stan', val: 3 }
    //   ])

    //   // Sample Date Data
    //   values: Ember.A([
    //     { key: '15-12-1996', val: 10 },
    //     { key: '12-05-1994', val: 7 },
    //     { key: '12-09-1999', val: 12 },
    //     { key: '03-05-1992', val: 3 }
    //   ])
    // }));

    // Sample bidimensional data
    this.set('activeDataset.instance', this.store.createRecord('bidimensionalDataset', {
      values: Ember.A([{
        key: 'Vlad',
        val: Ember.A([{
          key: 'Rosii',
          val: 5
        }, {
          key: 'ceapa',
          val: 2
        }, {
          key: 'ardei',
          val: 1
        }])
      }, {
        key: 'Leontin',
        val: Ember.A([{
          key: 'Rosii',
          val: 6
        }, {
          key: 'ceapa',
          val: 7
        }, {
          key: 'ardei',
          val: 6
        }])
      }, {
        key: 'Ion',
        val: Ember.A([{
          key: 'Rosii',
          val: 7
        }, {
          key: 'ceapa',
          val: 7
        }, {
          key: 'ardei',
          val: 7
        }])
      }, {
        key: 'Allx',
        val: Ember.A([{
          key: 'Rosii',
          val: 3
        }, {
          key: 'ceapa',
          val: 4
        }, {
          key: 'ardei',
          val: 3
        }])
      }])
    }));
  },

  redirect() {
    this.transitionTo('charts');
  }
});
