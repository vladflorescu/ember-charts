import Ember from 'ember';
import C3AbstractChart from './c3-abstract-chart';
import C3AbstractBidimensionalChartMixin from '../mixins/c3-abstract-bidimensional-chart-mixin';

export default C3AbstractChart.extend(C3AbstractBidimensionalChartMixin, {
  getFormattedData() {
    if (this.get('data.firstObject.val.constructor') !== Array) {
      // unidimensional dataset
      return this._super(...arguments);
    } else {
      return this.bidimensionalChartDefaultFormatData();
    }
  },

  didRender() {
    let chartOptions;
    if (this.get('data.firstObject.val.constructor') !== Array) {
      chartOptions = _.merge(chartOptions, { axis: { x: { tick: { format: () => 'Values' }}}});
    } else {
      chartOptions = this.getXAxisRelatedChartOptions();
    }
    this.generateChart('bar', chartOptions);
  }
});
