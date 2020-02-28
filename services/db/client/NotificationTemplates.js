import { NOTIFICATION_TEMPLATE_TYPES } from '../../../helpers/constants';

const NotificationTemplates = sequelize.define('NotificationTemplates', {
  uuid: {
    type: Sequelize.UUID,
    allowNull: false,
  },
  type: {
    type: client.Sequelize.ENUM(Object.keys(NOTIFICATION_TEMPLATE_TYPES)),
    allowNull: false,
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  description: {
    type: Sequelize.TEXT,
  },
  content: {
    type: Sequelize.TEXT,
  },
  isPartial: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  }
}, {
  paranoid: true,
});