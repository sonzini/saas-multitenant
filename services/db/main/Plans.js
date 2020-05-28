import { PLAN_TYPES, PERIOD_TYPES } from '../../../helpers/constants';

/**
 * Plans: List of products we serve
 */

export default (sequelize, DataTypes) => {
  const Plans = sequelize.define(
    'Plans',
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      type: {
        type: DataTypes.ENUM,
        values: Object.keys(PLAN_TYPES),
        allowNull: false,
      },
      default_price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
        defaultValue: 0,
      },
      default_period: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      default_period_type: {
        type: DataTypes.ENUM,
        values: Object.keys(PERIOD_TYPES),
        allowNull: false,
      },
    },
    {
      underscored: true,
      underscoredAll: true,
      paranoid: true,
    },
  );

  Plans.associate = ({ Products, Subscriptions }) => {
    Plans.belongsToMany(Products, {
      through: 'plans_products',
      as: 'products',
    });
    Plans.hasMany(Subscriptions);
  };

  Plans.initScopes = () => {
    Plans.addScope('view', {
      include: ['products'],
    });
  };

  Plans.prototype.removeProducts = function (products, { transaction } = {}) {
    return Promise.all(
      products.map((p) => this.removeProduct(p, { transaction })),
    );
  };

  return Plans;
};
