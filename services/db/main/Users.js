import { USER_ROLES } from '../../../helpers/constants';

/**
 * Users: People that can login into the system. Should be linked to an account
 */

export default (sequelize, DataTypes) => {
  const Users = sequelize.define('Users',
    {
      first_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      last_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
        },
      },
      hash: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      salt: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      activationKey: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      resetPasswordKey: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      verified: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      role: {
        type: DataTypes.ENUM,
        values: Object.keys(USER_ROLES),
        allowNull: false,
        defaultValue: USER_ROLES.ADMIN,
      },
    },
    {
      paranoid: true,
      underscored: true,
      underscoredAll: true,
    },
  );

  return Users;
};
