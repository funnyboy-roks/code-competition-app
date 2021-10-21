import fs from 'fs';
import { MainData } from './dataTypes';

const dataFile = './data/server.json';

const defaultData: MainData = {
  competition: {
    // Competition information and configuration
    problems: [
      {
        prompt: '', // Markdown styled prompt, to show the information that would be in the packet.  If blank, nothing will show
        submissionTest: {
          // The test for the competitor to use before submission, to confirm that their project works
          input: '',
          output: '',
          options: {},
        },
        tests: [
          // Tests used to test the code - These are not shown to the competitor
          {
            input: '',
            output: '',
            options: {},
          },
        ],
        points: 1, // The amount of points for each question
      },
    ],
    timeLimit: 0, // Time limit in minutes - 0 for no limit
  },
  users: [
    {
      name: 'admin',
      password: 'admin',
      admin: true,
      id: -1,
    },
  ],
};

export const json: MainData = fs.existsSync(dataFile) && fs.readFileSync(dataFile, 'utf8') !== ''
  ? JSON.parse(fs.readFileSync(dataFile, 'utf8'))
  : defaultData;

export const save = async () => {
  fs.writeFileSync(dataFile, JSON.stringify(json, null, 4));
};

save();
