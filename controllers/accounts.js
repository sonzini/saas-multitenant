import { DBMain } from '../services/db/main';
import {
  getAccounts,
  getAccountById,
  createAccount,
  editAccount,
  deleteAccount,
} from '../services/accounts';

export const getAccountsController = async () => {
  try {
    // @TODO: Validations

    // Requests
    const result = await DBMain.transaction(async (transaction) => {
      const accounts = await getAccounts({ transaction });

      return accounts;
    });

    return result;
  } catch (error) {
    // @TODO: Error handler
    console.log(error);
  }
};

export const getAccountByIdController = async (id) => {
  // @TODO: Validations

  // Requests
  const result = await DBMain.transaction(async (transaction) => {
    const account = await getAccountById(id, { transaction });

    return account;
  });

  return result;
};

export const createAccountController = async (payload) => {
  // @TODO: Validations

  // Requests
  const result = await DBMain.transaction(async (transaction) => {
    const account = await createAccount(payload, { transaction });

    return account;
  });

  return result;
};

export const editAccountController = async (payload) => {
  try {
    // @TODO: Validations

    // Requests
    const result = await DBMain.transaction(async (transaction) => {
      const account = await editAccount(payload, { transaction });

      return account;
    });

    return result;
  } catch (error) {
    // @TODO: Error handler
    console.log(error);
  }
};

export const deleteAccountController = async () => {
  try {
    // @TODO: Validations

    // Requests
    const result = await DBMain.transaction(async (transaction) => {
      const account = await deleteAccount(id, { transaction });

      return account;
    });

    return result;
  } catch (error) {
    // @TODO: Error handler
    console.log(error);
  }
};
