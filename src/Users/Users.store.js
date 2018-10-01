import store from '@/store';

store.registerModule('Users', {
  namespaced: true,

  state: {
    entities: {
      1: {
        id: 1,
        email: 'demo-user-a@fake.mail',
      },
      2: {
        id: 2,
        email: 'demo-user-b@fake.mail',
      },
      3: {
        id: 3,
        email: 'demo-user-c@fake.mail',
      },
    },
  },

  getters: {

    list(state) {
      return ids => ids
        .filter(id => Boolean(state.entities[id]))
        .map(id => state.entities[id]);
    },

    item(state) {
      return id => state.entities[id];
    },
  },
});
