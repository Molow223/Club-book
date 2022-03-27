import Controller from '@ember/controller';

export default Controller.extend({

  actions: {
    async saveSpeaker(speaker) {
      let newSpeaker = this.get('store').createRecord('speaker', speaker);
      newSpeaker.serialize();
      await newSpeaker.save();

      this.transitionToRoute('speakers.index');
    },
  },
});
