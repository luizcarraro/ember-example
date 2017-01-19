import Ember from 'ember';

export function plusone(params/*, hash*/) {
  return params[0] + 1;
}

export default Ember.Helper.helper(plusone);
