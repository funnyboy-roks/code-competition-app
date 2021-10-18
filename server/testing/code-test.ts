import { exec } from 'child_process';

const commands = {
  python: 'python3',
  java: 'java -jar', // WIP
} as const;

type Languages = keyof typeof commands;

/**
 * Run a file in a specific language
 *
 * Supported:
 * - Python
 * - Java*
 *
 * *Currently, Java files will need to be a jar,
 * but in the future, my goal is to support the raw .java file
 *
 * @param language The language to test
 * @param fileName The name of the file
 * @param input The input for the file
 * @param args The arguments to pass to the command (placed before filename and after command)
 * @returns The file output(Promise)
 */
export const runFile = async (
  language: Languages,
  fileName: string,
  input: string,
  args: string = '',
): Promise<{ stderr: string; stdout: string }> => {
  const command = commands[language];

  return new Promise<{ stderr: string; stdout: string }>((resolve, reject) => {
    const timer = setTimeout(() => {
      // Reject after 10s
      reject(new Error('Promise timed out after 10 seconds'));
    }, 10000);
    exec(`echo '${input}' | ${command} ${args} ${fileName}`, {}, (error, stdout, stderr) => {
      clearTimeout(timer);
      resolve({ stdout, stderr });
    });
  });
};

export type FileOptions = {
  language: Languages;
  args?: string;
  trim?: boolean;
  caseSensitive?: boolean;
};

export const testInput = async (
  fileName: string,
  input: string,
  expectedOutput: string,
  {
    language, args, trim, caseSensitive,
  }: FileOptions,
): Promise<boolean> => {
  const { stderr, stdout } = await runFile(language, fileName, input, args);

  let stdoutModified = stdout;
  let expOutModified = expectedOutput;

  if (trim) {
    stdoutModified = stdoutModified.trim();
    expOutModified = expOutModified.trim();
  }

  if (!caseSensitive) {
    stdoutModified = stdoutModified.toLowerCase();
    expOutModified = expOutModified.toLowerCase();
  }

  return !stderr && stdoutModified === expOutModified;
};

export const testInputSync = (
  fileName: string,
  input: string,
  expectedOutput: string,
  options: FileOptions,
  // eslint-disable-next-line no-unused-vars
  callback: (result: boolean) => void,
): void => {
  testInput(fileName, input, expectedOutput, options).then(callback);
};

// Test
// (async () => {
//   const input = '2\nHello\nWorld';
//   const output = 'olleH\ndlrow';
//   const valid = await testInput('pythonTest.py', input, output, {
//     language: 'python',
//     trim: true,
//     caseSensitive: true,
//   });
//   console.log('Valid?', valid);
// })();
