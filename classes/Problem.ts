export type Test = {
    input: string;
    output: string;
}

export default class Problem {
    prompt: string; // MD

    test: Test | null;

    tests: Test[];

    constructor(prompt: string) {
      this.prompt = prompt;
      this.test = null;
      this.tests = [];
    }
}
