import Ember from 'ember';

export default Ember.Component.extend({
  layoutName: 'components/c3-abstract-chart',

  formattedData: Ember.computed('data', function() {
    return this.dataFormattingFunction
      ? this.dataFormattingFunction()
      : _.map(this.get('data'), el => [el.key, el.val]);
  }).readOnly(),

  generateChart(type, options = {}) {
    if (Ember.isNone(this.get('chart'))) {
      this.set('chart', c3.generate(_.merge(options, {
        data: {
          bindTo: '#chart',
          columns: this.get('formattedData'),
          type:    type
        }
      })));
    } else {
      this.get('chart').load({
        columns: this.get('formattedData')
      });
    }
  }
});
