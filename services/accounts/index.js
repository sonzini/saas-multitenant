import { Accounts } from '../db/main';

export const getAccounts = ({ transaction = null } = {}) =>
  Accounts.findAll({ transaction });

export const getAccountById = (id, { transaction = null } = {}) =>
  Accounts.scope('view').findByPk(id, { transaction });

export const createAccount = (payload, { transaction = null } = {}) =>
  Accounts.create(payload, { transaction });

export const editAccount = async (payload, { transaction = null } = {}) => {
  const { id } = payload;
  const account = await getAccountById(id, { transaction });
  return account.update(payload, { transaction });
};

export const deleteAccount = async (id, { transaction = null } = {}) => {
  const account = await getAccountById(id, { transaction });
  return account.destroy();
};
