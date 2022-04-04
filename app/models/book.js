import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  author: DS.attr(),
  pages: DS.attr(),
  img: DS.attr(),
  progress: DS.attr(),
  isbn: DS.attr(),
  
  speaker: DS.belongsTo('speaker'),
});
