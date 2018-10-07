import store from '@/store';

// eslint-disable-next-line
const isExists = (st, namespace) => Boolean(st._modules.root._children[namespace]);

export default (namespace, module) => {
  if (isExists(store, namespace)) {
    return;
  }

  const extended = Object.assign({ namespaced: true }, module);
  store.registerModule(namespace, extended);
};
