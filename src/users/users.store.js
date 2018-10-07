import { assert } from 'chai';

import {
  createEntitiesStore as create,
  registerModule as register,
} from '@/common/vue';

register('users', create((id, email) => {
  assert.isAbove(id, 0);
  assert.isNotEmpty(email);

  return {
    id,
    email,
  };
}));
