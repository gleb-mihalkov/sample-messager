export default create => ({
  state: {
    data: {},
  },

  getters: {

    create() {
      return create;
    },

    get(state) {
      return id => state.data[id];
    },
  },

  mutations: {

    set(state, item) {
      const { id } = item;
      // eslint-disable-next-line
      state.data[id] = item;
    },
  },
});
