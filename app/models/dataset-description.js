import DS from 'ember-data';

const { attr } = DS;

// we don't have to keep all data on the client side
export default DS.Model.extend({
  name: attr('string'),
  isUnidimensional: attr('boolean')
});
