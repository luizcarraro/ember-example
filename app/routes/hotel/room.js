import Ember from 'ember';

export default Ember.Route.extend({

	model(params, transition) {
		return this.store.findRecord('room', params.roomToken, {
			adapterOptions: {
				hotelId: transition.params.hotel.hotelId
			}
		});
	}
});