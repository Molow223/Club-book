import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        async deleteMeeting(meeting) {
          await meeting.destroyRecord();
          this.get('store').unloadRecord(meeting);
          this.transitionToRoute('meetings');
        },
      }
});
