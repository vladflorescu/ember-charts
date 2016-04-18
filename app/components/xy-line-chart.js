import Ember from 'ember';
import c3AbstractChart from './c3-abstract-chart';

export default c3AbstractChart.extend({
  dataFormattingFunction() {
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

      let xAxisData   = _.concat(['x'], _.map(this.get('data'), d => d.key));

      let xVals       = _.map(this.get('data'), xval => xval.val);
      let yKeys       = _.map(xVals.get('firstObject'), yval => yval.key);
      let yValsZipped = _.unzipWith(xVals, function() {
        return _.map(arguments, yVal => yVal.val);
      });
      let yData = _.unzipWith([yKeys, yValsZipped], _.concat);

      return _.concat([xAxisData], yData);
    }
  },

  didRender() {
    let type = 'indexed';
    let firstKey = this.get('data.firstObject.key');
    let firstVal = this.get('data.firstObject.val');
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

    this.generateChart(null, chartOptions);
  }
});
