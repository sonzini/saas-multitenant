import { AsyncRouter } from 'express-async-router';

const router = AsyncRouter();

router.get('/ping', async (req, res) => res.status(200).send('pong'));
router.get('/date', async (req, res) =>
  res.status(200).send(new Date().toISOString()),
);
router.get('/favicon.ico', async (req, res) => res.status(204).end());

export default router;
