import store from '@/store';

export default (namespace, module) => {
  store.registerModule(namespace, module);
};
