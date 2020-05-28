import { ACCOUNT_STATUS } from '../../../helpers/constants';

/**
 * Account: Our customer data.
 */

export default (sequelize, DataTypes) => {
  const Accounts = sequelize.define(
    'Accounts',
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      status: {
        type: DataTypes.ENUM,
        values: Object.keys(ACCOUNT_STATUS),
        defaultValue: ACCOUNT_STATUS.INITIALIZED,
        allowNull: false,
      },
    },
    {
      paranoid: true,
      underscored: true,
      underscoredAll: true,
    },
  );

  Accounts.associate = ({ Subscriptions, Users, Cards }) => {
    Accounts.hasMany(Users, { as: 'users' });
    Accounts.hasMany(Subscriptions, {
      as: 'subscriptions',
      foreignKey: { allowNull: false },
      onDelete: 'CASCADE',
    });
    Accounts.hasMany(Cards, {
      as: 'cards',
      foreignKey: { allowNull: false },
      onDelete: 'CASCADE',
    });
  };

  Accounts.initScopes = () => {
    Accounts.addScope('view', {
      include: ['subscriptions', 'users', 'cards'],
    });
  };

  return Accounts;
};
