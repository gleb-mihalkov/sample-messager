import { assert } from 'chai';

import {
  createEntitiesStore as create,
  registerModule as register,
} from '@/common/vue';

register('users', create((id, email) => {
  assert.isNotEmpty(id);
  assert.isNotEmpty(email);

  return {
    id,
    email,
  };
}));
