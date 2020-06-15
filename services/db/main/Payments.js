import { PAYMENT_STATUS } from '../../../helpers/constants';

/**
 * Payments: All the bills we have to declare. All what we are going to collect and we collected
 */

export default (sequelize, DataTypes) => {
  const Payments = sequelize.define(
    'Payments',
    {
      amount: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
        defaultValue: 0,
      },
      collect_at: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      status: {
        type: DataTypes.ENUM,
        values: Object.keys(PAYMENT_STATUS),
        allowNull: false,
      },
    },
    {
      paranoid: true,
      underscored: true,
      underscoredAll: true,
    },
  );

  Payments.associate = ({ PaymentAttempts }) => {
    Payments.hasMany(PaymentAttempts);
  };

  return Payments;
};
