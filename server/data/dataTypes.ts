export type ProgramTest = {
  input: '';
  output: '';
  options: {};
};

export type Problem = {
  prompt: '';
  submissionTest: ProgramTest;
  tests: ProgramTest[];
  points: number;
};

export type CompetitionData = {
  problems: Problem[];
  timeLimit: Number;
};

export type UserData = {
  name: string;
  password: string;
  admin: boolean;
  id: number;
};

export type MainData = {
  competition: CompetitionData;
  users: UserData[];
};
