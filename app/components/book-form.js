import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  dataService: service('data'),

  actions: {
    submitForm(e) {
      e.preventDefault();

      const self = this;
      this.onSubmit({
        id: self.get('id'),
        title: self.get('title'),
        author: self.get('author'),
        pages: self.get('pages'),
        img: self.get('img'),
        progress: self.get('progress'),
      });
    },
  },

  didReceiveAttrs() {
    this._super();
    const self = this;
    this.setProperties({
      id: self.get('book.id') ? self.get('book.id') : undefined,
      title: self.get('book.title'),
      author: self.get('book.author'),
      pages: self.get('book.pages'),
      img: self.get('book.img'),
      progress: self.get('book.progress'),
    });
  },
});
