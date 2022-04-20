import DS from 'ember-data';

export default DS.Model.extend({
    date: DS.attr('date'),
    grade: DS.attr('number'),
    urlVideo: DS.attr('string'),
    urlPresentation: DS.attr('string'),
    review: DS.attr('string'),
  
    meetings: DS.belongsTo('meeting'),
    books: DS.belongsTo('book'),
    speakers: DS.belongsTo('speaker') 
});
