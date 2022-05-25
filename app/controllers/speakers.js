import Controller from '@ember/controller';

export const PER_PAGE = 5;

export default Controller.extend({
  queryParams: ['search', 'page'],
  search: '',
  page: '1',
  
});
