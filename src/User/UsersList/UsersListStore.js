export default {
  usersList: {
    namespaced: true,

    state: {
      users: [1, 2, 3],
    },

    getters: {

      isFetched(state) {
        return state.users !== null;
      },

      users(state, { isFetched }, _root, rootGetters) {
        const getList = rootGetters['user/list'];
        return isFetched ? getList(state.users) : [];
      },
    },
  },
};
