import {
  SERVICE_TYPES,
  SERVICE_STATUS,
  PERIOD_TYPES,
} from '../../../helpers/constants';

export default (sequelize, DataTypes) => {
  const Services = sequelize.define('Services',
    {
      type: {
        type: DataTypes.ENUM,
        values: Object.keys(SERVICE_TYPES),
        allowNull: false,
      },
      status: {
        type: DataTypes.ENUM,
        values: Object.keys(SERVICE_STATUS),
        allowNull: false,
        defaultValue: SERVICE_STATUS.INITIALIZED,
      },
      price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
        defaultValue: 0,
      },
      start_at: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      finish_at: {
        type: DataTypes.DATE,
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
    },
    {
      paranoid: true,
      underscored: true,
      underscoredAll: true,
    },
  );

  Services.associate = ({ Features, Payments }) => {
    Services.belongsToMany(Features, { through: 'services_features' });
    Services.hasMany(Payments);
  };

  return Services;
};
