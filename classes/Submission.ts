import { data } from '../data-handler';
import Problem from './Problem';

export default class Submission {
  input: string;

  output: string;

  problemIndex: number; // Problem index in competition problems array

  constructor(input: string, output: string) {
    this.input = input;
    this.output = output;
    this.problemIndex = -1;
  }

  set problem(problem: Problem | undefined) {
    if (!problem) this.problemIndex = -1;
    this.problemIndex = data.configuration?.problems.findIndex((p) => p === problem) || -1;
  }

  get problem(): Problem | undefined {
    return this.problemIndex === -1 ? undefined : data.configuration?.problems[this.problemIndex];
  }
}
