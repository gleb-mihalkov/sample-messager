import store from '@/store';

/* eslint-disable */
const isExists = (st, namespace) => Boolean(st._modules.root._children[namespace]);
/* eslint-enable */

export default (namespace, module) => {
  if (isExists(store, namespace)) {
    return;
  }

  store.registerModule(namespace, module);
};
