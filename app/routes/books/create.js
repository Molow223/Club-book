import Route from '@ember/routing/route';
import EmberObject from '@ember/object';

export default Route.extend({
  model() {
    return EmberObject.create({
      title: '',
      author: '',
      pages: '',
      img: '',
      progress: '',
    });
  },
});
