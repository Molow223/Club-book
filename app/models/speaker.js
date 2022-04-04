import DS from 'ember-data';

export default DS.Model.extend({
  firstName: DS.attr(),
  lastName: DS.attr(),
  img: DS.attr(),
  
  books: DS.hasMany('book'),
});
