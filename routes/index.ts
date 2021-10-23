import express from 'express';
import { data } from '../data-handler';

const router = express.Router();

router.get('/', (req, res) => {
  res.render('index', { title: 'Home', req, data });
});

module.exports = router;
