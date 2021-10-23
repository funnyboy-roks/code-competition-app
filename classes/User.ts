import { randomBytes } from 'crypto';

import Submission from './Submission';

export default class User {
  static from(user: any) {
    return Object.assign(new User('', ''), user);
  }

    id: string;

    name: string;

    password: string;

    submissions: Submission[];

    admin: boolean;

    constructor(name: string, password: string) {
      this.id = randomBytes(16).toString('hex');
      this.name = name;
      this.password = password;
      this.submissions = [];
      this.admin = false;
    }

    addSubmission(submission: Submission) {
      this.submissions.push(submission);
    }

    passwordValid(password: string): boolean {
      return this.password === password;
    }
}
