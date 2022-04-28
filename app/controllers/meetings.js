import Controller from '@ember/controller';

export const PER_PAGE = 2;

export default Controller.extend({
    queryParams: ['search', 'page', 'speaker', 'book', 'searchDate'],
    search: '',
    page: 1,
    speaker: '',
    book: '',
    searchDate: '',

    actions: {
      async deleteMeeting(meeting) {
        await meeting.destroyRecord();
        this.get('store').unloadRecord(meeting);
        this.transitionToRoute('meetings');
      },
    }
});
