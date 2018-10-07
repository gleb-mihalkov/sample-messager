import store from '@/store';

export default (namespace, id, ...values) => {
  const get = store.getters[`${namespace}/get`];
  const existing = get(id);

  if (values.length === 0) {
    return existing;
  }

  const create = store.getters[`${namespace}/create`];
  const item = create(id, ...values);

  if (existing) {
    Object.assign(existing, item);
    return existing;
  }

  store.commit(`${namespace}/set`, item);
  return item;
};
