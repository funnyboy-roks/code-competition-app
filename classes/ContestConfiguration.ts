import Problem from './Problem';

export type ContestState = 'started' | 'stopped';

export default class ContestConfiguration {
  static from(configuration: any): any {
    if (configuration === null) return null;
    return Object.assign(new ContestConfiguration('', ''), configuration);
  }

  name: string;

  description: string;

  date: Date | null;

  startTime: Date | null;

  endTime: Date | null;

  duration: number;

  problems: Problem[];

  state: ContestState;

  shuffleQuestions: boolean;

  constructor(name: string, description: string) {
    this.name = name;
    this.description = description;
    this.date = null;
    this.startTime = null;
    this.endTime = null;
    this.duration = 0;
    this.problems = [];
    this.state = 'stopped';
    this.shuffleQuestions = false;
  }

  update(values: any) {
    if (values.name) {
      this.name = values.name;
    }

    if (values.description) {
      this.description = values.description;
    }

    if (values.startTime) {
      this.startTime = values.startTime;
    }

    if (values.endTime) {
      this.endTime = values.endTime;
    }

    if (values.date) {
      this.date = values.date;
    }

    if (values.duration) {
      this.duration = values.duration;
    }

    if (values.state) {
      this.state = values.state;
    }
  }
}
