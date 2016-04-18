import Ember from 'ember';
import C3AbstractChart from './c3-abstract-chart';

export default C3AbstractChart.extend({
  didRender() {
    this.generateChart('pie');
  }
});
