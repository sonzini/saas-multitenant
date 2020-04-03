import { AsyncRouter } from 'express-async-router';

import {
  createRequestLog,
  createCreationLog,
  createEditionLog,
  createDeletionLog,
} from '../services/logger';
import {
  getPaymentAttempts,
  createPaymentAttempt,
  editPaymentAttempt,
  deletePaymentAttempt,
  getPaymentAttemptById,
} from '../controllers/paymentAttempts';

const router = AsyncRouter();

router.get('/', async (req, res) => {
  const paymentAttempts = await getPaymentAttempts();

  createRequestLog(req);

  res.json(paymentAttempts);
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;

  const paymentAttempt = await getPaymentAttemptById(id);

  createRequestLog(req);

  res.json(paymentAttempt);
});

router.post('/', async (req, res) => {
  const payload = {
    ...req.body,
  };

  const paymentAttempt = await createPaymentAttempt(payload);

  createCreationLog(req, paymentAttempt);

  res.json(paymentAttempt);
});

router.put('/:id', async (req, res) => {
  const payload = {
    ...req.body,
    id: req.params.id,
  };

  const paymentAttempt = await editPaymentAttempt(payload);

  createEditionLog(req, paymentAttempt);

  res.json(paymentAttempt);
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  const paymentAttempt = await deletePaymentAttempt(id);

  createDeletionLog(req, paymentAttempt);

  res.json(paymentAttempt);
});

export default router;
