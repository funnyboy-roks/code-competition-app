import express from 'express';
import data, { getUser } from './data/dataUtils';

const api = express.Router();
api.use(express.json());

api.get('/api/', (req, res) => {
  res.json({
    message: 'Hello from the server',
  });
});

api.post('/login', (req, res) => {
  const { username, password } = req.body;

  const user = getUser(username);

  let output = {};

  if (!user || user?.password !== password) {
    output = {
      success: false,
      error: 'Invalid username or password.',
    };
  } else {
    output = {
      success: true,
      user: {
        id: user.id,
        admin: user.admin,
        name: user.name,
      },
    };

    console.log('body:', req.body);
    console.log('user:', username);
    console.log('pass:', password);
  }

  res.end(JSON.stringify(output));
});

export default api;
