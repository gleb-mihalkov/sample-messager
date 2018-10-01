import { registerModule } from '@/Common/Vue';

registerModule('Users', {
  namespaced: true,

  state: {
    entities: {},
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

  mutations: {

    add(state, value) {
      const { id } = value;
      const item = state.entities[id] || {};

      // eslint-disable-next-line
      state.entities[id] = {
        ...item,
        ...value,
      };
    },
  },

  actions: {

    add({ commit }, user) {
      commit('add', user);
    },
  },
});
