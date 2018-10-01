import { internet } from 'faker';

/* eslint-disable */
export const fetchUsers = async () => {
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