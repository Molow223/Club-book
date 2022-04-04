import Route from '@ember/routing/route';
import RSVP from 'rsvp';
import { Promise } from 'rsvp';
import { later } from '@ember/runloop';

import { PER_PAGE } from '../controllers/books';

export default Route.extend({
  queryParams: {
    search: {
      refreshModel: true,
    },
    page: {
      refreshModel: true,
    },
    author: {
      refreshModel: true,
    },
  },

  model({ search, page, author }) {
    const query = {
      _page: page,
      _limit: PER_PAGE,
    };
    if (search) {
      query.q = search;
    }
    if (author) {
      query.author = author;
    }

    return RSVP.hash({
      authors: this.store.findAll('speaker'),
      books: this.store.query('book', query),
    });
  },

  setupController(controller, model) {
    this._super(...arguments);
  },

  actions: {
    loading(transition, originRoute) {
      return false;
    },
  },
});
