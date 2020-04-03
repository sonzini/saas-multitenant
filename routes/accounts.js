import { AsyncRouter } from 'express-async-router';

import {
  createRequestLog,
  createCreationLog,
  createEditionLog,
  createDeletionLog,
} from '../services/logger';
import {
  getAccountsController,
  createAccountController,
  editAccountController,
  deleteAccountController,
  getAccountByIdController,
} from '../controllers/accounts';
import { getCardsByAccountIdController } from '../controllers/cards';
import { getPlansByAccountIdController } from '../controllers/plans';
import { getUsersByAccountIdController } from '../controllers/users';

const router = AsyncRouter();

router.get('/', async (req, res) => {
  const accounts = await getAccountsController();

  createRequestLog(req);

  res.json(accounts);
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;

  const account = await getAccountByIdController(id);

  createRequestLog(req);

  res.json(account);
});

router.post('/', async (req, res) => {
  const payload = {
    ...req.body,
  };

  const account = await createAccountController(payload);

  createCreationLog(req, account);

  res.json(account);
});

router.put('/:id', async (req, res) => {
  const payload = {
    ...req.body,
    id: req.params.id,
  };

  const account = await editAccountController(payload);

  createEditionLog(req, account);

  res.json(account);
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  const account = await deleteAccountController(id);

  createDeletionLog(req, account);

  res.json(account);
});

router.get('/:id/cards', async (req, res) => {
  const { id } = req.params;

  const cards = await getCardsByAccountIdController(id);

  createRequestLog(req);

  res.json(cards);
});

router.get('/:id/plans', async (req, res) => {
  const { id } = req.params;

  const plans = await getPlansByAccountIdController(id);

  createRequestLog(req);

  res.json(plans);
});

router.get('/:id/users', async (req, res) => {
  const { id } = req.params;

  const users = await getUsersByAccountIdController(id);

  createRequestLog(req);

  res.json(users);
});

export default router;
