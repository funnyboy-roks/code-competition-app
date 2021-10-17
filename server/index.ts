import express from 'express';
import morgan from 'morgan';
import { Server } from 'socket.io';
import chalk from 'chalk';

import Client from './client';

const { log } = console;

const app = express();
const http = require('http').Server(app);
const io: Server = require('socket.io')(http);
require('dotenv').config();

const port = process.env.PORT || 3000;

app.use(morgan('dev'));

app.get('/api/', (req, res) => {
  res.send('Hello World!');
});

app.use(express.static('client'));

const clients = new Map<string, Client>();

io.on('connect', (socket) => {
  const client = new Client(socket);
  clients.set(socket.id, client);

  log(chalk`{blue ${socket.id}} - {green connected}`);
  socket.on('disconnect', () => {
    log(chalk`{blue ${socket.id}} - {red disconnected}`);
  });
});

http.listen(port, () => {
  log(`Listening on http://localhost:${port}`);
});
