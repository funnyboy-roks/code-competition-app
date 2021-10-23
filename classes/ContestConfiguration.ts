import Problem from "./Problem";
export type ContestState = 'started' | 'stopped';

export default class ContestConfiguration {

    name: string;
    description: string;
    startTime: Date;
    duration: number;
    problems: Problem[];

    state: ContestState;

    constructor(name: string, description: string) {
        this.name = name;
        this.description = description;
        this.startTime = null;
        this.duration = 0;
        this.problems = [];
    }

}
