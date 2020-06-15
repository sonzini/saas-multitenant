import {
  SUBSCRIPTION_STATUS,
  PERIOD_TYPES,
  PAYMENT_SCENARIOS,
} from '../../../helpers/constants';

/**
 * Subscriptions: The thing (service) that our clients are paying for in a specific period at an specific price
 */

export default (sequelize, DataTypes) => {
  const Subscriptions = sequelize.define(
    'Subscriptions',
    {
      status: {
        type: DataTypes.ENUM,
        values: Object.keys(SUBSCRIPTION_STATUS),
        allowNull: false,
        defaultValue: SUBSCRIPTION_STATUS.INITIALIZED,
      },
      price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
      },
      period: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      period_type: {
        type: DataTypes.ENUM,
        values: Object.keys(PERIOD_TYPES),
        allowNull: false,
      },
      start_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      finish_at: {
        type: DataTypes.DATE,
      },
      scenario: {
        type: DataTypes.ENUM,
        values: Object.keys(PAYMENT_SCENARIOS),
        defaultValue: PAYMENT_SCENARIOS.STRIPE,
        allowNull: false,
      },
    },
    {
      underscored: true,
      underscoredAll: true,
      paranoid: true,
    },
  );

  Subscriptions.associate = ({ Payments, Accounts, Plans }) => {
    Subscriptions.hasMany(Payments);

    Subscriptions.belongsTo(Accounts, {
      as: 'account',
      foreignKey: { allowNull: false },
      onDelete: 'CASCADE',
    });

    Subscriptions.belongsTo(Plans, { as: 'plan' });
  };

  Subscriptions.initScopes = () => {
    Subscriptions.addScope('view', {
      include: ['plan', 'account'],
    });
  };

  return Subscriptions;
};
