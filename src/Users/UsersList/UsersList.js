import { mapGetters } from 'vuex';

import './UsersList.store';

export default {
  name: 'UsersList',

  computed: {
    ...mapGetters('UsersList', ['users']),
  },
};
