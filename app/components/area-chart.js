import Ember from 'ember';
import C3AbstractChart from './c3-abstract-chart';
import C3AbstractBidimensionalChartMixin from '../mixins/c3-abstract-bidimensional-chart-mixin';

export default C3AbstractChart.extend(C3AbstractBidimensionalChartMixin, {
  getFormattedData() {
    return this.bidimensionalChartDefaultFormatData();
  },

  didRender() {
    let chartOptions = this.getXAxisRelatedChartOptions();
    chartOptions = _.merge(chartOptions, { data: { types: _.fromPairs(_.map(this.get('data.firstObject.val'),
      val => [val.key, 'area-spline']
    ))}});

    this.generateChart(null, chartOptions);
  }
});
