import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    payload.room.id = payload.room.rates[0].rateToken || 1;

    return this._super(...arguments);
  },
});
