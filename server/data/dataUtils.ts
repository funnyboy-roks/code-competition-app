import * as data from './dataHandler';
import { UserData } from './dataTypes';

export const getUser = (username: string): UserData | undefined => {
  // eslint-disable-next-line no-restricted-syntax
  for (const user of data.json.users) {
    if (user.name === username) return user;
  }
  return undefined;
};

export default {};
