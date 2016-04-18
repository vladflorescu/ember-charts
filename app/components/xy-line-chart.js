import Ember from 'ember';
import C3AbstractChart from './c3-abstract-chart';
import C3AbstractBidimensionalChartMixin from '../mixins/c3-abstract-bidimensional-chart-mixin';

export default C3AbstractChart.extend(C3AbstractBidimensionalChartMixin, {
  getFormattedData() {
    if (this.get('data.firstObject.val.constructor') !== Array) {
      // unidimensionalDataset

      //    [{key: x0, val: y0}, ... , {key: xn, val: yn}]
      // => [[x0, y0], ... , [xn, yn]]
      let dataAsPairs = _.map(this.get('data'), _.toArray);

      // => [[x0, ... , xn], [y0, ... , yn]]
      let zippedData = _.unzip(dataAsPairs);

      // => [['x', x0, ... , xn], ['value', y0, ... , yn]]
      return _.unzipWith([['x', 'value'], zippedData], _.concat);
    } else {
      // bidimensionalDataset
      return this.bidimensionalChartDefaultFormatData();
    }
  },

  didRender() {
    let chartOptions = this.getXAxisRelatedChartOptions();
    this.generateChart(null, chartOptions);
  }
});
