import {
  mapGetters,
  mapActions,
} from 'vuex';

import './users-list.store';

export default {
  name: 'UsersList',

  computed: {
    ...mapGetters('usersList', ['users']),
  },

  methods: {
    ...mapActions('usersList', ['pull']),
  },

  mounted() {
    this.pull();
  },
};
