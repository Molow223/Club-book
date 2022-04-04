import DS from 'ember-data';
import ApplicationSerializer from './application';

export default ApplicationSerializer.extend({
  attrs: {
    speaker: {
      serialize: 'records',
      deserialise: 'records',
    },
  },
  normalize(model, hash) {
    hash = this._super(...arguments);
    return hash;
  },
});
