import { AsyncRouter } from 'express-async-router';

import {
  createRequestLog,
  createCreationLog,
  createEditionLog,
  createDeletionLog,
} from '../services/logger';
import {
  getCards,
  createCard,
  editCard,
  deleteCard,
  getCardById,
} from '../controllers/cards';
import { getPaymentsByCardId } from '../controllers/payments';

const router = AsyncRouter();

router.get('/', async (req, res) => {
  const cards = await getCards();

  createRequestLog(req);

  res.json(cards);
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;

  const card = await getCardById(id);

  createRequestLog(req);

  res.json(card);
});

router.post('/', async (req, res) => {
  const payload = {
    ...req.body,
  };

  const card = await createCard(payload);

  createCreationLog(req, card);

  res.json(card);
});

router.put('/:id', async (req, res) => {
  const payload = {
    ...req.body,
    id: req.params.id,
  };

  const card = await editCard(payload);

  createEditionLog(req, card);

  res.json(card);
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  const card = await deleteCard(id);

  createDeletionLog(req, card);

  res.json(card);
});

router.get('/:id/payments', async (req, res) => {
  const { id } = req.params;

  const payments = await getPaymentsByCardId(id);

  createRequestLog(req);

  res.json(payments);
});

export default router;
