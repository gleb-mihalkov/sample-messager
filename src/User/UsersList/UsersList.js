import { mapGetters } from 'vuex';

import { getUserLink } from './UsersListFilters';

export default {
  name: 'UsersList',

  computed: {
    ...mapGetters('user/usersList', ['users']),
  },

  filters: {
    getUserLink,
  },
};
