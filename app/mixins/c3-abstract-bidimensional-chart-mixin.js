import Ember from 'ember';

export default Ember.Mixin.create({
  bidimensionalChartDefaultFormatData() {
    let xAxisData   = _.concat(['x'], _.map(this.get('data'), d => d.key));
    let xVals       = _.map(this.get('data'), xval => xval.val);
    let yKeys       = _.map(xVals.get('firstObject'), yval => yval.key);
    let yValsZipped = _.unzipWith(xVals, function() {
      return _.map(arguments, yVal => yVal.val);
    });
    let yData = _.unzipWith([yKeys, yValsZipped], _.concat);

    return _.concat([xAxisData], yData);
  }
});
