import { PAYMENT_SCENARIOS, PAYMENT_STATUS } from '../../../helpers/constants';

export default (sequelize, DataTypes) => {
  const Payments = sequelize.define('Payments',
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      scenario: {
        type: DataTypes.ENUM,
        values: Object.keys(PAYMENT_SCENARIOS),
        allowNull: false,
      },
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
