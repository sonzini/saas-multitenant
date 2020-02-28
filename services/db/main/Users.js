import { USER_ROLES } from '../../../helpers/constants';

const Users = sequelize.define('Users', {
  first_name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  last_name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  hash: {
    type: Sequelize.TEXT,
    allowNull: true,
  },
  salt: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  activationKey: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  resetPasswordKey: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  verified: {
    type: Sequelize.BOOLEAN,
    allowNull: true,
  },
  role: {
    type: Sequelize.ENUM,
    values: Object.keys(USER_ROLES),
    allowNull: false,
    defaultValue: USER_ROLES.ADMIN,
  },
}, {
  paranoid: true,
});

Users.belongsTo(Accounts)