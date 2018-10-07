import { registerModule } from '@/common/vue';

import fetchUsers from './fetch-users-list';

registerModule('usersList', {
  namespaced: true,

  state: {
    data: null,
  },

  getters: {

    isFetched(state) {
      return state.data !== null;
    },

    list(state, { isFetched }, _root, rootGetters) {
      const list = rootGetters['users/list'];
      return isFetched ? list(state.data) : [];
    },
  },

  mutations: {

    list(state, value) {
      // eslint-disable-next-line
      state.data = value;
    },
  },

  actions: {

    async fetch({ rootGetters, commit, dispatch }) {
      commit('list', null);

      const create = rootGetters['users/create'];

      const users = await fetchUsers();
      const ids = [];

      for (let i = 0; i < users.length; i += 1) {
        const {
          email,
          id,
        } = users[i];

        const user = create(id, email);

        dispatch('users/save', user, { root: true });
        ids.push(user.id);
      }

      commit('list', ids);
    },
  },

  reset({ commit }) {
    commit('list', null);
  },
});
