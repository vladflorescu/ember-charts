import Ember from 'ember';

export default Ember.Component.extend({
  layoutName: 'components/c3-abstract-chart',

  formattedData: Ember.computed('data', function() {
    return this.getFormattedData();
  }).readOnly(),

  getFormattedData() {
    return _.map(this.get('data'), el => [el.key, el.val]);
  },

  getXAxisRelatedChartOptions() {
    let type = 'indexed';
    let firstKey = this.get('data.firstObject.key');
    if (firstKey.constructor !== Number) {
      let firstKeyAsDate = moment(firstKey, 'DD-MM-YYYY', true);
      if (firstKeyAsDate.isValid()) {
        type = 'timeseries';
      } else {
        type = 'category';
      }
    }

    let chartOptions = { data: { x: 'x'}, axis: { x: { type: type }}};
    if (type === 'timeseries') {
      chartOptions.data.xFormat = '%d-%m-%Y';
      chartOptions.axis.x.tick  = { format: '%d-%m-%Y' };
    }

    return chartOptions;
  },

  generateChart(type, options = {}) {
    // if (Ember.isNone(this.get('chart'))) {
      this.set('chart', c3.generate(_.merge(options, {
        data: {
          bindTo: '#chart',
          columns: this.get('formattedData'),
          type:    type
        }
      })));
    // } else {
    //   this.get('chart').load({
    //     columns: this.get('formattedData'),
    //     unload: this.get('chart').categories()
    //   });
    // }
  }
});
