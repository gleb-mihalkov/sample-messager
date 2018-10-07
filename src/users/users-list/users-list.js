import {
  mapGetters,
  mapActions,
} from 'vuex';

import './users-list.store';

export default {
  name: 'UsersList',

  computed: {
    ...mapGetters('usersList', [
      'isFetched',
      'list',
    ]),
  },

  methods: {
    ...mapActions('usersList', ['fetch']),
  },

  mounted() {
    this.fetch();
  },
};
