import express from 'express';

const router = express.Router();

// /admin/
router.get('/', (req, res) => {
  res.render('admin', {
    title: 'Admin Panel',
  });
});

module.exports = router;
