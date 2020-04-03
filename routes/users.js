import { AsyncRouter } from 'express-async-router';

import {
  createRequestLog,
  createCreationLog,
  createEditionLog,
  createDeletionLog,
} from '../services/logger';
import {
  getUsers,
  createUser,
  editUser,
  deleteUser,
  getUserById,
} from '../controllers/users';

const router = AsyncRouter();

router.get('/', async (req, res) => {
  const users = await getUsers();

  createRequestLog(req);

  res.json(users);
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;

  const user = await getUserById(id);

  createRequestLog(req);

  res.json(user);
});

router.post('/', async (req, res) => {
  const payload = {
    ...req.body,
  };

  const user = await createUser(payload);

  createCreationLog(req, user);

  res.json(user);
});

router.put('/:id', async (req, res) => {
  const payload = {
    ...req.body,
    id: req.params.id,
  };

  const user = await editUser(payload);

  createEditionLog(req, user);

  res.json(user);
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  const user = await deleteUser(id);

  createDeletionLog(req, user);

  res.json(user);
});

export default router;
