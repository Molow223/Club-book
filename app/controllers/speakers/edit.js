import Controller from '@ember/controller';
import { inject as service } from '@ember/service';


export default Controller.extend({
  dataService: service('data'),
  actions: {
    async saveSpeaker(speaker) {
      const speakerModel = this.model;
      speakerModel.set('firstName', speaker.firstName);
      speakerModel.set('lastName', speaker.lastName);
      speakerModel.set('img', speaker.img);

      await speakerModel.save();

      this.transitionToRoute('speakers.index');
    }
  }
});
