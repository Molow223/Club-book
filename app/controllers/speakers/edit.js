import Controller from '@ember/controller';

export default Controller.extend({
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
