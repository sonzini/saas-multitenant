import { ACCOUNT_STATUS } from '../../../helpers/constants';

const Accounts = sequelize.define('Accounts', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  status: {
    type: Sequelize.ENUM,
    values: Object.keys(ACCOUNT_STATUS),
    defaultValue: ACCOUNT_STATUS.INITIALIZED,
    allowNull: false,
  },
}, {
  paranoid: true,
});

Accounts.hasMany(Services)
Accounts.hasMany(Users)
Accounts.hasMany(Cards)