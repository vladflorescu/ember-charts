import DS from 'ember-data';

const { attr } = DS;

// we don't have to keep all data from the user on the client side
export default DS.Model.extend({
  datasetId: attr('string'),
  title: attr('string'),
  isUnidimensional: attr('boolean')
});
