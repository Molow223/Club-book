import Route from '@ember/routing/route';
import { PER_PAGE } from '../controllers/speakers';

export default Route.extend({
  queryParams: {
    search: {
      refreshModel: true,
    },
    page: {
      refreshModel: true,
    },
  },

  model({ search, page }) {
    const query = {
      _page: page,
      _limit: PER_PAGE,
    };
    if (search) {
      return this.get('store').findAll('speaker', { q: search });
    }
    return this.get('store').findAll('speaker');
  },

  setupController() {
    this._super(...arguments);
  },

  actions: {
    loading() {
      return true;
    },
  },
});
