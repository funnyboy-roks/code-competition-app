import User from './User';
import ContestConfiguration from './ContestConfiguration';

export default class AppData {
    users: User[];

    configuration: ContestConfiguration | null;

    constructor() {
      this.users = [];
      this.configuration = null;
    }

    getUserByName(name: string): User | undefined {
      return this.users.find((user) => user.name === name);
    }

    getUserById(id: string): User | undefined {
      return this.users.find((user) => user.id === id);
    }
}
