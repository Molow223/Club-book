import DS from 'ember-data';

export default DS.Model.extend({
    reservationDate: DS.attr('date'),
    /*title: DS.attr('string'),
    img: DS.attr('string'),
    author: DS.attr('string'),
    progress: DS.attr('string'),
    review: DS.attr('string'),*/
    
    reports: DS.hasMany('report'),

});
