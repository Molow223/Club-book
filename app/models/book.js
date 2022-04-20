import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  author: DS.attr('string'),
  size: DS.attr('number'),
  progress: DS.attr('string'),
  img: DS.attr('string'),
  tags: DS.attr(),

  reports: DS.hasMany('report'),
});
