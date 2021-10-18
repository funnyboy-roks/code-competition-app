import express from 'express';

const api = express.Router();

api.get('/api/', (req, res) => {
  res.json({
    message: 'Hello from the server',
  });
});

export default api;
