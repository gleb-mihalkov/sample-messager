import { registerItems } from '@/common/vue';

registerItems('users', (id, email) => ({
  id,
  email,
}));
