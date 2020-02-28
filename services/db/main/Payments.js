import { PAYMENT_SCENARIOS, PAYMENT_STATUS } from '../../../helpers/constants';

const Payments = sequelize.define('Payments', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  scenario: {
    type: Sequelize.ENUM,
    values: Object.keys(PAYMENT_SCENARIOS),
    allowNull: false,
  },
  amount: {
    type: Sequelize.DECIMAL(10, 2),
    allowNull: false,
    defaultValue: 0,
  },
  collect_at: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  status: {
    type: Sequelize.ENUM,
    values: Object.keys(PAYMENT_STATUS),
    allowNull: false,
  }
}, {
  paranoid: true,
});

Payments.hasMany(PaymentAttempts)
Payments.belongsTo(Services)
Payments.belongsTo(Card)