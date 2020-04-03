import { AsyncRouter } from 'express-async-router';

import {
  createRequestLog,
  createCreationLog,
  createEditionLog,
  createDeletionLog,
} from '../services/logger';
import {
  getAccounts,
  createAccount,
  editAccount,
  deleteAccount,
  getAccountById,
} from '../controllers/accounts';
import { getCardsByAccountId } from '../controllers/cards';
import { getPlansByAccountId } from '../controllers/services';
import { getUsersByAccountId } from '../controllers/users';

const router = AsyncRouter();

router.get('/', async (req, res) => {
  const accounts = await getAccounts();

  createRequestLog(req);

  res.json(accounts);
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;

  const account = await getAccountById(id);

  createRequestLog(req);

  res.json(account);
});

router.post('/', async (req, res) => {
  const payload = {
    ...req.body,
  };

  const account = await createAccount(payload);

  createCreationLog(req, account);

  res.json(account);
});

router.put('/:id', async (req, res) => {
  const payload = {
    ...req.body,
    id: req.params.id,
  };

  const account = await editAccount(payload);

  createEditionLog(req, account);

  res.json(account);
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  const account = await deleteAccount(id);

  createDeletionLog(req, account);

  res.json(account);
});

router.get('/:id/cards', async (req, res) => {
  const { id } = req.params;

  const cards = await getCardsByAccountId(id);

  createRequestLog(req);

  res.json(cards);
});

router.get('/:id/plans', async (req, res) => {
  const { id } = req.params;

  const plans = await getPlansByAccountId(id);

  createRequestLog(req);

  res.json(plans);
});

router.get('/:id/users', async (req, res) => {
  const { id } = req.params;

  const users = await getUsersByAccountId(id);

  createRequestLog(req);

  res.json(users);
});

export default router;
