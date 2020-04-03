import { AsyncRouter } from 'express-async-router';

import {
  createRequestLog,
  createCreationLog,
  createEditionLog,
  createDeletionLog,
} from '../services/logger';
import {
  getPayments,
  createPayment,
  editPayment,
  deletePayment,
  getPaymentById,
} from '../controllers/payments';
import { getPaymentAttemptsByPaymentId } from '../controllers/paymentAttempts';

const router = AsyncRouter();

router.get('/', async (req, res) => {
  const payments = await getPayments();

  createRequestLog(req);

  res.json(payments);
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;

  const payment = await getPaymentById(id);

  createRequestLog(req);

  res.json(payment);
});

router.post('/', async (req, res) => {
  const payload = {
    ...req.body,
  };

  const payment = await createPayment(payload);

  createCreationLog(req, payment);

  res.json(payment);
});

router.put('/:id', async (req, res) => {
  const payload = {
    ...req.body,
    id: req.params.id,
  };

  const payment = await editPayment(payload);

  createEditionLog(req, payment);

  res.json(payment);
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  const payment = await deletePayment(id);

  createDeletionLog(req, payment);

  res.json(payment);
});

router.get('/:id/attempts', async (req, res) => {
  const { id } = req.params;

  const attempts = await getPaymentAttemptsByPaymentId(id);

  createRequestLog(req);

  res.json(attempts);
});

export default router;
