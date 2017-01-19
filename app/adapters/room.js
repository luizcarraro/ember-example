import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
  urlForFindRecord(id, modelName, snapshot) {
    let baseUrl = this.buildURL();
    return `${baseUrl}/hotels/${snapshot.adapterOptions.hotelId}/rooms/${id}`;
  }
});
