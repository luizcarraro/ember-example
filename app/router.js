import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('hotel', {path: 'hotel/:hotelId'}, function () {
  	this.route('room', {path: 'room/:roomToken'})
  });
});

export default Router;
