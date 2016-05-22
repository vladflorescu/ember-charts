import Ember from 'ember';
import config from 'ember-charts/config/environment';

export default Ember.Controller.extend({
  activeDataset: Ember.inject.service(),

  actions: {
    requestDataset(datasetDescription) {
      let id = datasetDescription.get('datasetId');
      let modelName = datasetDescription.get('isUnidimensional')
                    ? 'unidimensional-dataset'
                    : 'bidimensional-dataset';

      this.get('store').findRecord(modelName, id).then(dataset => {
        console.log('dataset');
        this.set('activeDataset.instance', dataset);
      });
    },

    uploadDocument(file) {
      let formData = new FormData();
      formData.append('file', file[0]);

      this.toggleProperty('isFileUploading');

      Ember.$.ajax({
        url: `${config.apiHost}/${config.apiPrefix}/documents/upload`,
        data: formData,
        type: 'POST',
        contentType: false,
        processData: false
      })
      .then(resp => {
        this.set('didUploadedSuccessfully', true);

        let modelName = Object.keys(resp)[0];
        let dataset = this.get('store').createRecord(modelName, resp[modelName]);
        this.set('activeDataset.instance', dataset);

        this.get('datasetDescriptions').pushObject(
          this.store.createRecord('datasetDescription', {
            datasetId: dataset.get('id'),
            title: dataset.get('title'),
            isUnidimensional: /^unidimensional/.test(modelName) ? true : false
          })
        );
      }, error => {
        this.set('didUploadedSuccessfully', false);
      })
      .always(() => {
        this.toggleProperty('isFileUploading');
      });
    },

    removeDatasetDescription(datasetDesc) {
      datasetDesc.destroyRecord();
      this.get('datasetDescriptions').removeObject(datasetDesc);
    }
  }
});
