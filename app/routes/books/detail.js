import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  dataService: service('data'),

  /*actions: {
    async deleteBook(book) {
      try {
        await this.dataService.deleteBook(book);
        this.transitionToPoute('books');
      } catch (e) {
        this.transitionToRoute('404', { error: 'Connection faild' });
      }
    },
  },*/

  model({ id }) {
    return this.store.findRecord('book', id);
  },
});
