import { PAYMENT_STATUS } from '../../../helpers/constants';

/**
 * Payment Attempts: Every time we try to make a payment, this is like a log.
 */

export default (sequelize, DataTypes) => {
  const PaymentAttempts = sequelize.define('PaymentAttempts',
    {
      status: {
        type: DataTypes.ENUM,
        values: Object.keys(PAYMENT_STATUS),
        allowNull: false,
      },
      payload: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },
    {
      paranoid: true,
      underscored: true,
      underscoredAll: true,
    },
  );

  return PaymentAttempts;
};
