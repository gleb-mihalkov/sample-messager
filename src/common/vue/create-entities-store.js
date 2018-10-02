export default create => ({
  namespaced: true,

  state: {
    data: {},
  },

  getters: {

    create() {
      return create;
    },

    all(state) {
      return Object.keys(state.data).map(id => state.data[id]);
    },

    list(state) {
      return ids => ids.map(id => state.data[id]);
    },

    item(state) {
      return id => state.data[id];
    },
  },

  mutations: {

    save(state, item) {
      const { id } = item;
      const existing = state.data[id] || {};

      // eslint-disable-next-line
      state.data[id] = {
        ...existing,
        ...item,
      };
    },
  },

  actions: {

    save({ commit }, item) {
      commit('save', item);
    },
  },
});
