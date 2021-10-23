import User from './User';
import ContestConfiguration from './ContestConfiguration';

export default class AppData {
  static from(json: any): AppData {
    const appData = Object.assign(new AppData(), json);
    appData.users = json.users.map((user: any) => User.from(user));
    appData.configuration = ContestConfiguration.from(json.configuration);
    return appData;
  }

  users: User[];

  configuration: ContestConfiguration | null;

  constructor() {
    this.users = [];
    this.configuration = null;

    this.createDefaultAdmin();
  }

  createDefaultAdmin(): void {
    const user = new User('admin', 'admin');
    user.admin = true;
    this.users.push(user);
  }

  getUserByName(name: string): User | undefined {
    return this.users.find((user) => user.name === name);
  }

  getUserById(id: string): User | undefined {
    return this.users.find((user) => user.id === id);
  }
}
