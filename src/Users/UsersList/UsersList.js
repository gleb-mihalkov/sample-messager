import { mapGetters } from 'vuex';

import { getUserLink } from './UsersList.filters';

import './UsersList.store';

export default {
  name: 'UsersList',

  computed: {
    ...mapGetters('UsersList', ['users']),
  },

  filters: {
    getUserLink,
  },
};
