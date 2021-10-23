import express from 'express';
import marked from 'marked';
import ContestConfiguration from '../classes/ContestConfiguration';
import { data, saveData } from '../data-handler';

// Set options
// `highlight` example uses https://highlightjs.org
marked.setOptions({ renderer: new marked.Renderer() });

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

router.post('/create-users/', (req, res) => {
  res.send('Create Users');
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
