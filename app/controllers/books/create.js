import Controller from '@ember/controller';

export default Controller.extend({

  actions: {
    async saveBook(book) {
      let newBook = this.get('store').createRecord('book', book);
      newBook.serialize();
      await newBook.save();

      this.transitionToRoute('books.index');
    },
  },
});
