import {
  mapGetters,
  mapActions,
} from 'vuex';

import './UsersList.store';

export default {
  name: 'UsersList',

  computed: {
    ...mapGetters('UsersList', ['users']),
  },

  methods: {
    ...mapActions('UsersList', ['pull']),
  },

  mounted() {
    this.pull();
  },
};
