import EmberUploader from 'ember-uploader';

export default EmberUploader.FileField.extend({
  filesDidChange: function(file) {
    this.attrs['on-file-change'](file);
  }
});