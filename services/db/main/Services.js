import { SERVICE_TYPES, SERVICE_STATUS, PERIOD_TYPES } from '../../../helpers/constants';

const Services = sequelize.define('Services', {
  type: {
    type: Sequelize.ENUM,
    values: Object.keys(SERVICE_TYPES),
    allowNull: false,
  },
  status: {
    type: Sequelize.ENUM,
    values: Object.keys(SERVICE_STATUS),
    allowNull: false,
    defaultValue: SERVICE_STATUS.INITIALIZED,
  },
  price: {
    type: Sequelize.DECIMAL(10, 2),
    allowNull: false,
    defaultValue: 0,
  },
  start_at: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  finish_at: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  period: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  period_type: {
    type: Sequelize.ENUM,
    values: Object.keys(PERIOD_TYPES),
    allowNull: false,
  },
}, {
  paranoid: true,
});

Services.belongsToMany(Features, {through: 'ServicesFeatures'})
Services.belongsTo(Accounts)
Services.hasMany(Payments)

