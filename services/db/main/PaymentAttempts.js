import { PAYMENT_SCENARIOS, PAYMENT_STATUS } from '../../../helpers/constants';

const PaymentAttempts = sequelize.define('PaymentAttempts', {
  status: {
    type: Sequelize.ENUM,
    values: Object.keys(PAYMENT_STATUS),
    allowNull: false,
  },
  payload: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
}, {
  paranoid: true,
});

PaymentAttempts.belongsTo(Payments)

