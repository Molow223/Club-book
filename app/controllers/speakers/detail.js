import Controller from '@ember/controller';

export default Controller.extend({

  actions: {
    async deleteSpeaker(speaker) {
      await speaker.destroyRecord();
      this.transitionToRoute('speakers');
    },
  },
});
