import { registerModule } from '@/Common/Vue';

import { fetchUsers } from './UsersList.helpers';

registerModule('UsersList', {
  namespaced: true,

  state: {
    users: null,
  },

  getters: {

    isFetched(state) {
      return state.users !== null;
    },

    users(state, { isFetched }, _root, root) {
      const getList = root['Users/list'];
      return isFetched ? getList(state.users) : [];
    },
  },

  mutations: {

    users(state, value) {
      // eslint-disable-next-line
      state.users = value;
    },
  },

  actions: {

    async pull({ commit, dispatch }) {
      commit('users', null);

      const users = await fetchUsers();
      const ids = [];

      for (let i = 0; i < users.length; i += 1) {
        const user = users[i];

        dispatch('Users/add', user, { root: true });
        ids.push(user.id);
      }

      commit('users', ids);
    },
  },
});
