import { data } from '../data-handler';
import Problem from './Problem';

export default class Submission {
    input: string;

    output: string;

    problemIndex: number; // Problem index in competition problems array

    constructor(input: string, output: string) {
      this.input = input;
      this.output = output;
    }

    set problem(problem: Problem) {
      this.problemIndex = data.configuration.problems.findIndex((p) => p === problem);
    }
}
