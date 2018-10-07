import createItems from './create-items';
import registerModule from './register-module';

export default (namespace, create) => registerModule(namespace, createItems(create));
