import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  dataService: service('data'),
  actions: {
    async saveBook(book) {
      //await this.dataService.updateBook(book);
      let bookModel = this.model;
      //bookModel.set('id', book.id);
      bookModel.set('title', book.title);
      bookModel.set('author', book.author);
      bookModel.set('pages', book.pages);
      bookModel.set('img', book.img);
      bookModel.set('progress', book.progress);

      await bookModel.save();

      this.transitionToRoute('books');
    },
  },
});
