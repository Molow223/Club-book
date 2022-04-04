import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  dataService: service('data'),

  actions: {
    async deleteBook(book) {
      await this.dataService.deleteBook(book);
      this.transitionToRoute('books');
    },
  },
});
