import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
  res.render('support.njk', { title: 'Support' });
});

export default router;
