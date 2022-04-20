import Controller from '@ember/controller';

export default Controller.extend({

  actions: {
    async deleteBook(book) {
      await book.destroyRecord(); 
      this.transitionToRoute('books');
    },
  },
});
