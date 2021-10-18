import express from 'express';
import morgan from 'morgan';
import { Server } from 'socket.io';
import chalk from 'chalk';
import session from 'express-session';
import { randomBytes } from 'crypto';

import Client from './client';
import api from './api';
import * as data from './data/dataHandler';

const { log } = console;

const app = express();
const http = require('http').Server(app);
const io: Server = require('socket.io')(http);
require('dotenv').config();

console.dir(data.json);

const port = process.env.PORT || 3000;

app.set('trust proxy', 1); // trust first proxy

const sessionOptions = {
  cookie: { secure: true },
  secret: randomBytes(40).toString('hex'),
  resave: false,
  saveUninitialized: true,
};

app.use(session(sessionOptions));

app.use(morgan('dev'));

app.use(api);

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
