import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'header',

  actions: {
    uploadDocument(file) {
      this.set('uploadStarted', true);
      this.attrs['on-upload-document'](file);
    }
  }
});
