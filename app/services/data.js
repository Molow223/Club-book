import Service from '@ember/service';
import ENV from 'club-book/config/environment';
import { A } from '@ember/array';

export default Service.extend({
    init() {
        this._super(...arguments);
        this.set('speakers', A());
        this.set('books', A());
    },

    async getSpeakersData(search) {
        let queryParams = '';
        if (search) {
            queryParams = `?q=${search}`;
        }
        const response = await fetch(`${ENV.backendURL}/speakers${queryParams}`);
        let speakers = await response.json();
        this.speakers.clear();
        this.speakers.pushObjects(speakers);
        return this.speakers;
    },

    getSpeakerData(id) {
        return this.speakers.find((speaker) => speaker.id === parseInt(id));
    },

    deleteSpeaker(speaker) {
        this.speakers.removeObject(speaker);
        return fetch(`${ENV.backendURL}/speakers/${speaker.id}`, {
            method: 'DELETE',
        });
    },

    async createSpeaker(speaker) {
        return await fetch(`${ENV.backendURL}/speakers`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(speaker),
        });
    },

    async updateSpeaker(speaker) {
        //this.speakers.removeObject(speaker);
        return fetch(`${ENV.backendURL}/speakers/${speaker.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(speaker),
        });
    },

    async getBooksData(search) {
        let queryParams = '';
        if (search) {
            queryParams = `?q=${search}`;
        }
        let response = await fetch(`${ENV.backendURL}/books${queryParams}`);
        let books = await response.json();
        this.books.clear();
        this.books.pushObjects(books);
        return this.books;
    },

    getBookData(id) {
        return this.books.find((book) => book.id === parseInt(id));
    },

    async createBook(book) {
        return await fetch(`${ENV.backendURL}/books`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(book),
        });
    },
    async updateBook(book) {
        this.books.removeObject(book);
        return await fetch(`${ENV.backendURL}/books/${book.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(book),
        });
    },
    deleteBook(book) {
        this.books.removeObject(book);
        return fetch(`${ENV.backendURL}/books/${book.id}`, {
            method: 'DELETE',
        });
    },
});
