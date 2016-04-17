import Ember from 'ember';

export default Ember.Component.extend({
  formattedData: Ember.computed('data', function() {
    return _.map(this.get('data'), el => [el.key, el.val]);
  }).readOnly(),

  didRender() {
    if (Ember.isNone(this.get('chart'))) {
      this.set('chart', c3.generate({
        data: {
          bindTo: '#chart',
          columns: this.get('formattedData'),
          type:    'bar'
        },
        axis: { x: { tick: { format: () => 'Values' } }}
      }));
    } else {
      this.get('chart').load({
        columns: this.get('formattedData')
      });
    }
  }
});
