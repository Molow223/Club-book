import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        async saveMeeting(meeting) {    
          let newMeeting = this.get('store').createRecord('meetings', meeting);
          await newMeeting.save();
          this.transitionToRoute('meetings.edit', newMeeting.id);
        },

        async onDeleteReport(report) {
          await report.destroyRecord(); 
          this.get('store').unloadRecord(report);
        },

        
      }
});
