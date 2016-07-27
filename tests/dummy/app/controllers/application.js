import Ember from 'ember';

export default Ember.Controller.extend({
  connectionStatus: Ember.inject.service(),
  init () {
    this._super(...arguments);
    let connection = this.get('connectionStatus');
    connection.setup(this);
  },
  status: Ember.computed('connectionStatus.online', function () {
    return this.get('connectionStatus.online') ?
      'Online' :
      'Offline';
  }),
  actions: {
    online (event) {
      this.notifications.success(event.type, {
        autoClear: true,
        clearDuration: 1000
      });
    },
    offline (event) {
      this.notifications.error(event.type, {
        autoClear: true,
        clearDuration: 1000
      });
    }
  }
});
