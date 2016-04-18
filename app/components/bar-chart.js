import Ember from 'ember';
import c3AbstractChart from './c3-abstract-chart';

export default c3AbstractChart.extend({
  didRender() {
    this.generateChart('bar', { axis: { x: { tick: { format: () => 'Values' }}}});
  }
});
