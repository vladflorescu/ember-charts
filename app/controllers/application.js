import Ember from 'ember';
import config from 'ember-charts/config/environment';

export default Ember.Controller.extend({
  activeDataset: Ember.inject.service(),

  actions: {
    requestDataset(datasetDescription) {
      // let url = `${config.apiHost}/${config.apiPrefix}`;
      // url += datasetDescription.get('isBidimensional')
      //       ? '/unidimensional_datasets'
      //       : '/bidimensional_datasets';
      // url += datasetDescription;
      // Ember.$.ajax(url).then(dataset => {
      //   let modelName;
      //   if (datasetDescription.get('isUnidimensional')) {
      //     modelName = 'unidimensionalDataset';
      //   } else {
      //     modelName = 'bidimensionalDataset';
      //   }
      //   this.store.create(modelName, dataset);
      // })
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
          this.set('activeDataset.instance', this.get('store').createRecord(modelName, resp[modelName]));
        },
        error => {
          this.set('didUploadedSuccessfully', false);
        }
      ).always(() => {
        this.toggleProperty('isFileUploading');
      });
    }
  }
});
