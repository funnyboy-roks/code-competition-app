import fs from 'fs';
import path from 'path';
import AppData from './classes/AppData';

const filePath = ['data', 'data.json'];
const fileName = path.join(...filePath);

// eslint-disable-next-line import/no-mutable-exports
export let data: AppData;

export const loadData = (): void => {
  if (fs.existsSync(fileName)) {
    data = AppData.from(JSON.parse(fs.readFileSync(fileName, 'utf8')));
  } else {
    data = new AppData();
  }
};

export const saveData = (): void => {
  if (!fs.existsSync(filePath[0])) {
    fs.mkdirSync(filePath[0]);
  }
  fs.writeFileSync(fileName, JSON.stringify(data));
};

export const init = () => {
  loadData();
  saveData();
};
