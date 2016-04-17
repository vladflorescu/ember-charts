import DS from 'ember-data';
import config from 'ember-charts/config/environment';

export default DS.RESTAdapter.extend({
  host: config.apiHost,
  namespace: config.apiPrefix
});
