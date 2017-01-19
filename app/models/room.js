import DS from 'ember-data';

export default DS.Model.extend({
	name: DS.attr('string'),
	rph: DS.attr('number'),
	group: DS.attr('string'),
	mealPlan: DS.attr('string'),
	category: DS.attr('string'),
	minPax: DS.attr('number'),
	maxPax: DS.attr('number'),
	quantityAvailable: DS.attr('number'),
	isAvailable: DS.attr('boolean'),
	rates: DS.attr('raw')
});
