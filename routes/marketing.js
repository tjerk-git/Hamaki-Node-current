import express from 'express';

const router = express.Router();

router.get('/features', (req, res) => {
  res.render('features.njk', { title: 'Features' });
});

router.get('/download', (req, res) => {
  res.render('download.njk', { title: 'Download' });
});

export default router;
