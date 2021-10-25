import express from 'express';
import marked from 'marked';
import ContestConfiguration from '../classes/ContestConfiguration';
import { data, saveData } from '../data-handler';

const router = express.Router();

// /admin/
router.get('/', (req, res) => {
  res.render('admin/index', {
    title: 'Admin Panel',
    req,
    data,
    marked,
  });
});

// /admin/config
router.get('/config', (req, res) => {
  res.render('admin/config', {
    title: 'Admin Panel',
    req,
    data,
    marked,
    scripts: ['/javascript/edit-config.js'],
  });
});

// /admin/problems
router.get('/problems', (req, res) => {
  res.render('admin/problems', {
    title: 'Admin Panel',
    req,
    data,
    marked,
  });
});

// /admin/problem/:id/edit
router.get('/problem/:id/edit', (req, res) => {
  res.render('admin/problem/edit', {
    title: 'Admin Panel',
    req,
    data,
    marked,
  });
});

// /admin/problems
router.get('/problem/:id/delete', (req, res) => {
  // res.flash('success', 'Problem deleted');
  res.redirect('/admin/problems');
});

router.post('/create-competition/', (req, res) => {
  const comp = new ContestConfiguration(req.body.name, req.body.description);
  console.log(comp);
  data.configuration = comp;
  saveData();
  // req.flash('success', 'Competition created');
  res.redirect('/admin');
});

router.post('/update-config/', (req, res) => {
  console.log(req.body);
  data.configuration?.update(req.body);
  saveData();
  res.redirect('/admin');
});

module.exports = router;
