import { Subscriptions } from '../db/main';
import { createSubscriptionFormatter } from '../../helpers/formatter';

export const getSubscriptions = ({ transaction = null } = {}) =>
  Subscriptions.findAll({ transaction });

export const getSubscriptionById = (id, { transaction = null } = {}) =>
  Subscriptions.scope('view').findByPk(id, { transaction });

export const createSubscription = (payload, { transaction = null } = {}) => {

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
