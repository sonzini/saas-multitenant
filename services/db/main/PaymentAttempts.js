import { PAYMENT_SCENARIOS, PAYMENT_STATUS } from '../../../helpers/constants';

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
