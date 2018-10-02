import store from '@/store';

// eslint-disable-next-line
const isExists = (st, namespace) => Boolean(st._modules.root._children[namespace]);

export default (namespace, module) => {
  if (isExists(store, namespace)) {
    return;
  }

  store.registerModule(namespace, module);
};
