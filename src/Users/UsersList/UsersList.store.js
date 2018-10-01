import store from '@/store';

store.registerModule('UsersList', {
  namespaced: true,

  state: {
    users: [1, 2, 3],
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
});
