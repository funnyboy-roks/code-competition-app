import fs from 'fs';

const json = JSON.parse(fs.readFileSync('./server/data.json', 'utf8'));

export default json;
