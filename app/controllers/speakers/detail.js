import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  dataService: service('data'),

  actions: {
    async deleteSpeaker(speaker) {
      //await this.dataService.deleteSpeaker(speaker);
      await speaker.destroyRecord();
      this.transitionToRoute('speakers');
    },
  },
});
