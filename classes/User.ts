import { randomBytes } from 'crypto';

import Submission from './Submission';

export default class User {
    id: string;

    name: string;

    password: string;

    submissions: Submission[];

    constructor(name: string, password: string) {
      this.id = randomBytes(16).toString('hex');
      this.name = name;
      this.password = password;
      this.submissions = [];
    }

    addSubmission(submission: Submission) {
      this.submissions.push(submission);
    }

    passwordValid(password: string): boolean {
      return this.password === password;
    }
}
