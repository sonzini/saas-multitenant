import { AsyncRouter } from 'express-async-router';
import {
  getSubscriptionsController,
  getSubscriptionByIdController,
  createSubscriptionController,
} from '../controllers/subscriptions';
import { createRequestLog, createCreationLog } from '../services/logger';

const router = AsyncRouter();

router.get('/', async (req, res) => {
  const subscriptions = await getSubscriptionsController();

  createRequestLog(req);

  res.json(subscriptions);
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;

  const subscription = await getSubscriptionByIdController(id);

  createRequestLog(req);

  res.json(subscription);
});

router.post('/', async (req, res) => {
  const payload = {
    ...req.body,
  };

  const subscription = await createSubscriptionController(payload);

  createCreationLog(req, subscription);

  res.json(subscription);
});

export default router;
