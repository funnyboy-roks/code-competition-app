import Problem from './Problem';

export type ContestState = 'started' | 'stopped';

export default class ContestConfiguration {
  static from(configuration: any): any {
    return Object.assign(new ContestConfiguration('', ''), configuration);
  }

  name: string;

  description: string;

  startTime: Date | null;

  duration: number;

  problems: Problem[];

  state: ContestState;

  constructor(name: string, description: string) {
    this.name = name;
    this.description = description;
    this.startTime = null;
    this.duration = 0;
    this.problems = [];
    this.state = 'stopped';
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

    if (values.duration) {
      this.duration = values.duration;
    }

    if (values.state) {
      this.state = values.state;
    }
  }
}
