import { ACCOUNT_STATUS } from '../../../helpers/constants';

export default (sequelize, DataTypes) => {
  const Accounts = sequelize.define('Accounts',
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

  Accounts.associate = ({ Services, Users, Cards }) => {
    Accounts.hasMany(Services);
    Accounts.hasMany(Users);
    Accounts.hasMany(Cards);
  };

  return Accounts;
};
