import { Subscriptions, Accounts } from '../db/main';
import { createSubscriptionFormatter } from '../../helpers/formatter';
import { Error422UnprocessableEntity } from '../errors';

export const getSubscriptions = ({ transaction = null } = {}) =>
  Subscriptions.findAll({ transaction });

export const getSubscriptionById = (id, { transaction = null } = {}) =>
  Subscriptions.scope('view').findByPk(id, { transaction });

export const createSubscription = async (
  payload,
  { transaction = null } = {},
) => {
  // payment method id/ card id
  // plan id
  // account id???

  const { account_id } = payload;
  const account = await Accounts.scope('view').findByPk(account_id, {
    transaction,
  });

  const hasCards = Boolean(account.cards.length);
  if (!hasCards) {
    // @TODO: Translation
    throw new Error422UnprocessableEntity({
      message: 'Se requiere un tarjeta vinculada a la cuenta',
      area: 'createSubscription',
    });
  }

  // tener una tarjeta en la cuenta
  // chequear que esa tarjeta funcione y tenga saldo para pagar esta subscription

  // crear subscripcion
  // crear payment para futuro pago
  // @TODO: Aca se podria calcular el periodo de prueba sumandole una cierta cantidad
  // dias (por ejemplo) a la fecha inicial para la creacion del pago futuro

  // intentar cobrar

  const formattedPayload = createSubscriptionFormatter(payload);
  return Subscriptions.create(formattedPayload, { transaction });
};
