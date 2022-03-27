import Component from '@ember/component';

export default Component.extend({

  actions: {
    submitForm(e) {
      e.preventDefault();

      this.onSubmit({
        id: self.get('idSpeaker'),
        firstName: self.get('firstName'),
        lastName: self.get('lastName'),
        img: self.get('img'),
      });
    }
  },

  didReceiveAttrs() {
    this._super(...arguments);

    this.setProperties({
      idSpeaker: this.get('speaker.id') ? self.get('speaker.id') : undefined,
      firstName: this.get('speaker.firstName'),
      lastName: this.get('speaker.lastName'),
      img: this.get('speaker.img'),
    })
  }
});
