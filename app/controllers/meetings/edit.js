import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        async saveMeeting(meeting) {
          let meetingModel = this.get('model.meeting');
          meetingModel.set('meetingDate', meeting.meetingDate);          
          await meetingModel.save();
              
          this.transitionToRoute('meetings');
        },

        async onDeleteReport(report) {
          await report.destroyRecord(); 
          this.get('store').unloadRecord(report);
        },

        onAddReport() {
          this.transitionToRoute('report.create');
        }
      } 
});
