import Accounts from '../services/db/main/Accounts';

export const getAccountsController = () => Accounts.findAll();
export const getAccountByIdController = id => Accounts.findByPk(id);
export const createAccountController = payload => Accounts.create(payload);
export const editAccountController = () => {};
export const deleteAccountController = () => {};
