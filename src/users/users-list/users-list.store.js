import {
  registerModule,
  getItem,
} from '@/common/vue';

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

    list(state) {
      return state.data;
    },
  },

  mutations: {

    list(state, value) {
      // eslint-disable-next-line
      state.data = value;
    },
  },

  actions: {

    async fetch({ commit }) {
      commit('list', null);

      const users = await fetchUsers();
      const items = users.map(item => getItem('users', item.id, item.email));

      commit('list', items);
    },
  },

  reset({ commit }) {
    commit('list', null);
  },
});
