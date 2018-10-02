import { internet } from 'faker';

export default () => {
  const users = [];

  for (let i = 0; i <= 100; i += 1) {
    const email = internet.email();
    const id = i;

    users.push({
      id,
      email,
    });
  }

  return users;
};
