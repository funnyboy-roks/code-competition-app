import fs from 'fs';
import AppData from './classes/AppData';

const fileName = './data/data.json';

// eslint-disable-next-line import/no-mutable-exports
export let data: AppData;

export const loadData = (): void => {
  if (fs.existsSync(fileName)) {
    data = JSON.parse(fs.readFileSync(fileName, 'utf8')) as AppData;
  } else {
    data = new AppData();
  }
};

export const saveData = (): void => {
  fs.writeFileSync(fileName, JSON.stringify(data));
};

export const init = () => {
  loadData();
  saveData();
};
