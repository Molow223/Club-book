import Controller from '@ember/controller';
import { inject as service } from '@ember/service';


export default Controller.extend({
  dataService: service('data'),


  actions: {
    async saveSpeaker(speaker) {
      let newSpeaker = this.store.createRecord('speaker', speaker);
      newSpeaker.serialize();
      await newSpeaker.save();

      this.transitionToRoute('speakers');
    },
  },
});
