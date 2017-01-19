import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
  // urlForQueryRecord(slug, modelName) {
  //   let baseUrl = this.buildURL();
  //   console.log(baseUrl);
  //   return baseUrl + '/hotels/' + slug.hotelId + '/rooms/' + slug.roomToken;
  // }
	// findRecord (store, type, id, snapshot) {
	// 	console.log(store);
	// 	console.log(type);
	// 	console.log(id);
	// 	console.dir(snapshot);
	// }
  urlForFindRecord(id, modelName, snapshot) {
    let baseUrl = this.buildURL();
    return `${baseUrl}/hotels/${snapshot.adapterOptions.hotelId}/rooms/${id}`;
  }
});
