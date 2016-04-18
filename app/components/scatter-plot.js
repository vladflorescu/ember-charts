import Ember from 'ember';
import C3AbstractChart from './c3-abstract-chart';
import C3AbstractBidimensionalChartMixin from '../mixins/c3-abstract-bidimensional-chart-mixin';

export default C3AbstractChart.extend(C3AbstractBidimensionalChartMixin, {
  getFormattedData() {
    return this.bidimensionalChartDefaultFormatData();
  },

  didRender() {
    let chartOptions = this.getXAxisRelatedChartOptions();
    this.generateChart('scatter', chartOptions);
  }
});
